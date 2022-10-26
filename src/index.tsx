import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';

import { store } from './store';

import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
);
