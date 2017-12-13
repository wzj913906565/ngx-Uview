import { NvButtonComponent } from './nv-button/nv-button.component';

export const appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'button' },
    { path: 'button', component: NvButtonComponent },
]