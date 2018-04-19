# resizable-antd-table
make ant-design table column resizable, highly inspire by [resize-antd-table][1].


### usage

>npm install resizable-antd-table

```
import ResizableAntdTable from 'resizable-antd-table';

...

const columns = [
  {title: 'a', dataIndex: 'a'},
  {title: 'b', dataIndex: 'b'},
];

const data = [
  {a: 1, b: 2},
  {a: 3, b: 4},
];

...

<ResizableAntdTable bordered={true} columns={columns} dataSource={data} />
```


### demo

[demo][2]






[1]: https://github.com/Jullys/resize-antd-table
[2]: https://sdhhqb.github.io/resizable-antd-table/