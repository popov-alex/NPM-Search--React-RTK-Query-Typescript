import { useState } from 'react';
import { search } from '../state/slice/repositoriesSlice';
import { useTypedSelector } from '../hooks/customHooks';
import { useTypedDispatch } from '../hooks/customHooks';

import { Input, Col, Row, Button, Space } from 'antd';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useTypedDispatch();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(search(term) as any);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Row>
          <Col span={12}>
            <Input value={term} onChange={(e) => setTerm(e.target.value)} />
          </Col>
        </Row>
        <Button type='primary'>Search</Button>
      </form>
      <div>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
      </div>
    </div>
  );
};

export default RepositoriesList;
