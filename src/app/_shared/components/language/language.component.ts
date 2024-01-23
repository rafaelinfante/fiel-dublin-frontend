import { Component, Input, OnInit } from '@angular/core';
import { LANGUAGES_MAP } from '../../configs/language.config';
import { Language } from '../../interfaces/language.interfaces';
import { NgClass } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { APP_DEFAULT_LANGUAGE } from '../../constants/language.constants';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [NgClass],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent implements OnInit {
  // protected readonly languages : Language[] = LANGUAGES;
  private readonly LANGUAGE_STORAGE_KEY: string = 'lang';
  protected readonly languagesMap: Map<string, Language> = LANGUAGES_MAP;
  public selectedLanguage?: Language;
  @Input() public isDarkTheme: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const userLang: string = localStorage.getItem(this.LANGUAGE_STORAGE_KEY)
      ? localStorage.getItem(this.LANGUAGE_STORAGE_KEY)!
      : this.translate.getBrowserLang()!;
    this.onLanguageChange(this.languagesMap.has(userLang) ? userLang : APP_DEFAULT_LANGUAGE);
  }

  onLanguageChange(language: string) {
    this.selectedLanguage = this.languagesMap.get(language)!;
    localStorage.setItem(this.LANGUAGE_STORAGE_KEY, language);
    this.translate.use(language);
  }
}
