interface Language {
  name: string;
  nativeName: string;
  flag: string;
}

interface Languages {
  [key: string]: Language;
}

export const languages: Languages = {
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸'
  },
} 