import i18n from 'i18next';
//import XHR from 'i18next-xhr-backend';

const options = {
	fallbackLng: 'ru',
	ns: ['main'],
	defaultNS: 'main',
	keySeparator: false,
	//saveMissing: true,
	interpolation: {
		escapeValue: false,
		formatSeparator: ','
	},
	react: {
		wait: true
	},
	//debug: true
};

//options.backend = {
//	loadPath: '/locales/{{lng}}/{{ns}}.json',
//	//addPath: '/locales/add/{{lng}}/{{ns}}',
//};

options.resources = {
	en: {
		main: {
			'Трибуна.уз': 'TribunaUZ',
		}
	},
	ru: {
		main: {
			'Трибуна.уз': 'Трибуна.уз',
		}
	},
	uz: {
		main: {
			'Трибуна.уз': 'Трибуна.уз',
		}
	},
	oz: {
		main: {
			'Трибуна.уз': 'TribunaUZ',
		}
	},
};

export default () => {

	i18n
		//.use(XHR)
		.init(options);

	return i18n;
};