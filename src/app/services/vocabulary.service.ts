import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class VocabularyService {
    constructor(
        private readonly http: HttpClient,
        private readonly storage: StorageService
    ) {}

    get supportedLanguages$(): Observable<string[]> {
        const url = `${this.storage.endpointUrl}/vocabulary/supported-languages`;
        return this.http.get<string[]>(url).pipe(tap((langs) => langs.sort()));
    }

    referencesFor$(lang: string): Observable<string[]> {
        const url = `${this.storage.endpointUrl}/vocabulary/language-references/${lang}`;
        return this.http.get<string[]>(url).pipe(tap((langs) => langs.sort()));
    }
}
