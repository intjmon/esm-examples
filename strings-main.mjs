const SUPPORTED_LANGUAGES = ['cn', 'en', 'fr', 'jp', 'ko'];
const selectedLanguage = process.argv[2];

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
  console.log('지원하지 않는 언어입니다.');
  process.exit(1);
}

const translationModule = `./strings-${selectedLanguage}.mjs`;
import(translationModule)
  .then(strings => console.log(strings.HELLO));

