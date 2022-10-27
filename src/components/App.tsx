import RepositoriesList from './search/RepositoriesList';

import { Typography, Col, Row, PageHeader, Divider } from 'antd';
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <div>
      <PageHeader title='Search Page' />
      <Divider />
      <Row>
        <Col span={12} offset={6}>
          <Title level={3}>Search For a Package</Title>
          <RepositoriesList />
        </Col>
      </Row>
    </div>
  );
};

export default App;
