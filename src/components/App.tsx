import { Provider } from 'react-redux';
import { store } from '../state/store';
import RepositoriesList from './RepositoriesList';

import { Typography, Space } from 'antd';
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Title>Search For a Package</Title>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
