import { useState, useEffect } from 'react';

function useCurrencyInfo(currency: string) {
    const [data, setData] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_3mV67hBXxoJMzGtzFu4K8LwSo1h0Io07fkWh1Xmy&base_currency=${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.data || {})); // assuming response has a 'data' field
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
