import { Routes } from '@angular/router';
import { AuthGuard } from './auth/_shared/guards/auth.guard';
import { SignedInGuard } from './auth/_shared/guards/signedIn.guard';

const authRoutes = () => import('./auth/auth.routes').then(m => m.routes);
const backofficeRoutes = () => import('./backoffice/backoffice.routes').then(m => m.routes);

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      {
        path: 'auth',
        loadChildren: authRoutes,
        canActivate: [SignedInGuard],
      },
      {
        path: 'backoffice',
        canActivate: [AuthGuard],
        loadChildren: backofficeRoutes,
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];
