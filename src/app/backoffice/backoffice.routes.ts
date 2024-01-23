import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from '../_shared/components/not-found/not-found.component';
import { BackofficeComponent } from './backoffice.component';

export const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
