import { useState } from 'react';
import { Input, Button, Space } from 'antd';

import { useGetRepositoryByNameQuery } from '../services/npmRepositories';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const [search, setSearch] = useState('');

  const { data, error, isLoading } = useGetRepositoryByNameQuery(search);
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
          {isLoading && <h3>Loading...</h3>}
          {!error &&
            !isLoading &&
            data?.map((name: string) => <div key={name}>{name}</div>)}
        </div>
      </Space>
    </div>
  );
};

export default RepositoriesList;
