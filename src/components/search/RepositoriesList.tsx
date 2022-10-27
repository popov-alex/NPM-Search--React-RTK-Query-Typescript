import { useState } from 'react';
import { Input, Button, Space, Table } from 'antd';

import { useGetRepositoryByNameQuery } from '../../services/npmRepositories';
import { _Table } from './Table';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('react');
  const [search, setSearch] = useState('react');

  const { data, error, isFetching, isSuccess } =
    useGetRepositoryByNameQuery(search);
  console.log(data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearch(term);
  };

  return (
    <div>
      <Space size={16} direction='vertical'>
        <form onSubmit={onSubmit}>
          <Space size={16} direction='vertical'>
            <Input
              style={{ width: 300 }}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />

            <Button type='primary' htmlType='submit'>
              Search
            </Button>
          </Space>
        </form>

        <div>
          {error && <h3>Oh, no! Error!</h3>}
          {isFetching && <h3>Loading...</h3>}
          {!error &&
            !isFetching &&
            isSuccess &&
            // ТУТ РУГАЕТСЯ TS

            Object.keys(data).length > 0 && <_Table data={data} />}
        </div>
      </Space>
    </div>
  );
};

export default RepositoriesList;
