import { Routes } from '@angular/router';
import { OperatorComponent } from './componets/operator/operator.component';
import { RefillFormComponent } from './componets/refill-form/refill-form.component';
import { OperatorResolver } from './resolvers/operator.resolver';

export const appRoutes: Routes = [
    { path: '', component: OperatorComponent, resolve: {operators : OperatorResolver }},
    { path: 'refill/:id/:name', component: RefillFormComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
