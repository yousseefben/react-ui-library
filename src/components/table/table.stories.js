import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './table';

const columns = [{
    title: 'Name', dataIndex: 'name', key:'name', width: 100,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend']
}, {
    title: 'Age', dataIndex: 'age', key:'age', width: 100,
}, {
    title: 'Address', dataIndex: 'address', key:'address', width: 200,
}, {
    title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
}];

const data = [
    { name: 'Jack', age: 28, address: 'some where', key:'1' },
    { name: 'Rose', age: 36, address: 'some where', key:'2' },
];

storiesOf('Table', module)
    .add('default Table', () => (
        <div>
             <Table columns={columns} data={data} />
        </div>
    ));
