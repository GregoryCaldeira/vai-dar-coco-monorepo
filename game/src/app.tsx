import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'normalize.css';
import { store } from './app/store';
import { MainContainer } from './components';

const root = createRoot(document.body);
root.render(
  <Provider store={store}>
    <MainContainer>
      <h1>Hello World!</h1>
    </MainContainer>
  </Provider>,
);
