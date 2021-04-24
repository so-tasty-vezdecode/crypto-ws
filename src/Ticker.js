import { useEffect, useState, memo, useCallback } from 'react';

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

    return value ? '$' + value : 'Нет данных';
});

export default Ticker;
