import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginData } from '../model/internal/login-data';
import { StorageService } from './storage.service';

// TODO move to own files

export class ReturnedType {
    readonly token: string = '';
    readonly refreshToken: string = '';
    readonly userData: any;
}

export class TokenResponse {
    readonly token: string = '';
    readonly refreshToken: string = '';
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly user$ = new BehaviorSubject<ReturnedType | null>(null);

    constructor(
        private readonly http: HttpClient,
        private readonly storage: StorageService,
        private readonly jwtHelper: JwtHelperService,
        private readonly router: Router
    ) {}

    // TODO Implement procedure after registration/login

    login(loginData: LoginData): void {
        const url = `${environment.endpointUrl}/auth/login`;
        this.http
            .post<ReturnedType>(url, loginData)
            .subscribe((result) => this.onSuccessfulAuth(result));
    }

    // TODO: Typify
    register(userData: any): void {
        const url = `${environment.endpointUrl}/auth/register`;
        this.http
            .post<ReturnedType>(url, userData)
            .subscribe((result) => this.onSuccessfulAuth(result));
    }

    get refreshToken$(): Observable<TokenResponse> {
        const refreshToken = this.storage.refreshToken;
        const url = `${environment.endpointUrl}/auth/refresh-token`;
        return this.http.post<TokenResponse>(url, { refreshToken }).pipe(
            tap((response) => {
                this.storage.token = response.token;
                this.storage.refreshToken = response.refreshToken;
            })
        );
    }

    get currentUser$(): Observable<ReturnedType | null> {
        return this.user$.pipe(
            switchMap((user) => {
                if (user) return of(user);
                else if (this.storage.token) return this.fetchCurrentUser$;
                else return of(null);
            })
        );
    }

    logout(): void {
        this.storage.token = null;
        this.storage.refreshToken = null;
        this.router.navigate(['login']).then();
        this.user$.next(null);
    }

    private get fetchCurrentUser$(): Observable<ReturnedType> {
        return this.http
            .get<ReturnedType>(`${environment.endpointUrl}/auth/current-user`)
            .pipe(
                tap((user) => {
                    if (!user) this.storage.token = null;
                    this.user$.next(user.userData);
                })
            );
    }

    private onSuccessfulAuth(result: ReturnedType): void {
        this.storage.token = result.token;
        this.storage.refreshToken = result.refreshToken;
        console.log(result.userData);
        this.user$.next(result.userData);
        this.router.navigate(['dashboard']).then();
    }
}
