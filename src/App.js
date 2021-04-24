import { useState, useMemo } from 'react';

import { Table, Typography } from 'antd';
import Column from 'antd/lib/table/Column';

import useCurrencies from './hooks/useGetCurrencies';
import Ticker from './Ticker';

import './App.css';
import 'antd/dist/antd.css';

const PAGE_SIZE = 15;

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
            <Table
                dataSource={currencies}
                className="currencies-table"
                pagination={paginationConfig}
                rowKey={item => item.symbol}
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
