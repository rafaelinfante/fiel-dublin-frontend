import { Language } from '../interfaces/language.interfaces';
import { LANGUAGE_FLAGS_PATH } from '../constants/language.constants';

/*
export const LANGUAGES: Language[] = [
  {
    id: 'en',
    name: 'English',
    image: LANGUAGE_FLAGS_PATH + 'en.svg'
  },
  {
    id: 'pt',
    name: 'Portuguese',
    image: LANGUAGE_FLAGS_PATH + 'pt.svg'
  },
  {
    id: 'es',
    name: 'Spanish',
    image: LANGUAGE_FLAGS_PATH + 'es.svg'
  },
];
*/
export const LANGUAGES_MAP: Map<string, Language> = new Map([
  ['en', { id: 'en', name: 'English', image: LANGUAGE_FLAGS_PATH + 'en.svg' }],
  ['pt', { id: 'pt', name: 'Portuguese', image: LANGUAGE_FLAGS_PATH + 'pt.svg' }],
  ['es', { id: 'es', name: 'Spanish', image: LANGUAGE_FLAGS_PATH + 'es.svg' }],
]);
