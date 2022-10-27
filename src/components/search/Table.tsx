import { Table } from 'antd';

interface Package {
  date: string;
  description: string;
  name: string;
  keywords: string[];
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

export const _Table = ({ data }: { data: Package }) => {

  // ТУТ РУГАЕТСЯ TS

  return <Table columns={columns} dataSource={data} />;
};
