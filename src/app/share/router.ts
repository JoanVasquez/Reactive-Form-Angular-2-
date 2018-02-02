import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from '../simple-form/simple-form.component';
import { AdvancedFormComponent } from '../advanced-form/advanced-form.component';
import { ModuleWithProviders } from '@angular/core';

export const routes : Routes = [
    {path: 'simple', component: SimpleFormComponent},
    {path: 'advanced', component: AdvancedFormComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);