import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyapplicationSharedModule } from 'app/shared';
import {
    AuthorComponent,
    AuthorDetailComponent,
    AuthorUpdateComponent,
    AuthorDeletePopupComponent,
    AuthorDeleteDialogComponent,
    authorRoute,
    authorPopupRoute
} from './';

const ENTITY_STATES = [...authorRoute, ...authorPopupRoute];

@NgModule({
    imports: [MyapplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [AuthorComponent, AuthorDetailComponent, AuthorUpdateComponent, AuthorDeleteDialogComponent, AuthorDeletePopupComponent],
    entryComponents: [AuthorComponent, AuthorUpdateComponent, AuthorDeleteDialogComponent, AuthorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyapplicationAuthorModule {}
