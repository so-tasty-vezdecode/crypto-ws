import { useState, useMemo } from 'react';

import { Table, Typography } from 'antd';
import Column from 'antd/lib/table/Column';

import useCurrencies from './hooks/useCurrencies';
import Ticker from './Ticker';

import './App.css';
import 'antd/dist/antd.css';

const PAGE_SIZE = 10;

const App = () => {
    const [page, setPage] = useState(1);
    const { currencies } = useCurrencies();

    const paginationConfig = useMemo(
        () => ({
            current: page,
            onChange: setPage,
            pageSize: PAGE_SIZE,
            size: 'small',
            showSizeChanger: false,
        }),
        [page],
    );

    return (
        <div className="App">
            <Typography.Title className="header">Котировки валют</Typography.Title>

            <Table
                dataSource={currencies}
                className="currencies-table"
                pagination={paginationConfig}
                rowKey={item => item.symbol}
                loading={currencies.length === 0}
            >
                <Column
                    key="name"
                    title="Криптовалюта"
                    render={(_, item) => {
                        return (
                            <Typography.Text>
                                {item.symbol.replace(/USD/, '')}
                            </Typography.Text>
                        );
                    }}
                    dataIndex="id"
                />
                <Column
                    key="quotation"
                    title="Котировка (USD)"
                    render={(_, item) => <Ticker id={item.symbol} />}
                />
            </Table>
        </div>
    );
}

export default App;
