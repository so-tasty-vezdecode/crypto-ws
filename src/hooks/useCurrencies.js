import { useState, useEffect } from "react";

import endpoints from "../config/endpoints";

const useCurrencies = () => {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        fetch(endpoints.getCurrencies)
            .then(data => data.json())
            .then(data => data.filter(item => item.symbol.match(/\w+?USD/)))
            .then(setCurrencies)
    }, []);

    return {
        currencies,
    }
}

export default useCurrencies;
