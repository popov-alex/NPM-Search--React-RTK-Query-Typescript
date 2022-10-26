import RepositoriesList from './RepositoriesList';

import { Typography, Col, Row } from 'antd';
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <div>
      <Row style={{ padding: 100 }}>
        <Col span={12} offset={6}>
          <Title>Search For a Package</Title>
          <RepositoriesList />
        </Col>
      </Row>
    </div>
  );
};

export default App;
