import { Component } from '@angular/core';
import { User } from '../../../model/internal/user';
import { AuthService } from '../../../services/auth.service';
import { VocabularyService } from '../../../services/vocabulary.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LanguageReferencesComponent } from '../../dialogs/language-references/language-references.component';

@Component({
    selector: 'app-vocabulary',
    templateUrl: './vocabulary.component.html',
    styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent {
    currentUser$?: Observable<User | null>;
    languages$?: Observable<string[]>;

    constructor(
        private readonly vocabulary: VocabularyService,
        private readonly auth: AuthService,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.currentUser$ = this.auth.currentUser$;
        this.languages$ = this.vocabulary.supportedLanguages$;
    }

    onReferenceClicked(lang: string): void {
        this.vocabulary.referencesFor$(lang).subscribe((references) => {
            this.dialog.open(LanguageReferencesComponent, {
                data: { lang, references },
            });
        });
    }
}
