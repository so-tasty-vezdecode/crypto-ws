import { useCallback } from 'react';

import useWebSocket from 'react-use-websocket';
import endpoints from '../config/endpoints';

const useTicker = (callback) => {
    const { sendJsonMessage } = useWebSocket(
        endpoints.websocket,
        {
            onMessage: (e) => callback(JSON.parse(e.data)),
            share: true,
        },
    );

    const subscribeTicker = useCallback(({ ticker }) => {
        sendJsonMessage({
            method: 'subscribeTicker',
            params: {
                symbol: ticker,
            },
        });
    }, [sendJsonMessage]);

    const unsubscribeTicker = useCallback(({ ticker }) => {
        sendJsonMessage({
            method: 'unsubscribeTicker',
            params: {
                symbol: ticker,
            },
        });
    }, [sendJsonMessage]);

    return {
        subscribe: subscribeTicker,
        unsubscribe: unsubscribeTicker,
    }
}

export default useTicker;
