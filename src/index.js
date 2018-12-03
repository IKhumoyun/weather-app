import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import configureStore from 'store';
import i18n from 'i18n';
import Routes from 'routes';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n()}>
			<Routes/>
		</I18nextProvider>
	</Provider>,
	document.getElementById('root')
);