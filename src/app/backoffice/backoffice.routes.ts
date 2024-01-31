import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from '../_shared/components/not-found/not-found.component';
import { BackofficeComponent } from './backoffice.component';
import { AuthGuard } from '../auth/_shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
      { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
