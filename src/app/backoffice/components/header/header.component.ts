import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteInfo } from '../../_shared/interfaces/backoffice-interfaces';
import { MENU_ROUTES } from '../../_shared/configs/menu-routes.config';
import { LanguageComponent } from '../../../_shared/components/language/language.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LanguageComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public menuRoutes: RouteInfo[] = MENU_ROUTES;

  constructor() {}
}
