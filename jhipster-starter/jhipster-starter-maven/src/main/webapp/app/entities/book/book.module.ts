import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyapplicationSharedModule } from 'app/shared';
import {
    BookComponent,
    BookDetailComponent,
    BookUpdateComponent,
    BookDeletePopupComponent,
    BookDeleteDialogComponent,
    bookRoute,
    bookPopupRoute
} from './';

const ENTITY_STATES = [...bookRoute, ...bookPopupRoute];

@NgModule({
    imports: [MyapplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [BookComponent, BookDetailComponent, BookUpdateComponent, BookDeleteDialogComponent, BookDeletePopupComponent],
    entryComponents: [BookComponent, BookUpdateComponent, BookDeleteDialogComponent, BookDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyapplicationBookModule {}
