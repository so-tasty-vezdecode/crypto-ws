import { useEffect, useState, memo, useCallback } from 'react';

import SkeletonButton from 'antd/lib/skeleton/Button';

import useTicker from './hooks/useTicker';

const Ticker = memo(({ id }) => {
    const [value, setValue] = useState(null);

    const updateValue = useCallback((data) => {
        if (data.method === 'ticker' && data.params.symbol === id) {
            setValue(data.params.last);
        }
    }, [id]);

    const { subscribe, unsubscribe } = useTicker(updateValue);

    useEffect(() => {
        subscribe({ ticker: id });

        return () => unsubscribe({ ticker: id });
    }, [id, subscribe, unsubscribe]);

    return value
        ? '$' + value
        : <SkeletonButton style={{ width: 100, height: 16 }} size="small" active shape="round" />;
});

export default Ticker;
