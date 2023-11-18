import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { MainContainer } from './components';

const root = createRoot(document.body);
root.render(
  <MainContainer>
    <h1>Hello World!</h1>
  </MainContainer>,
);
