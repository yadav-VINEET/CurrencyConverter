import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_3mV67hBXxoJMzGtzFu4K8LwSo1h0Io07fkWh1Xmy&base_currency=${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.data))  // Access the 'data' property from the response
            .catch((error) => console.error('Error fetching currency data:', error));
    }, [currency]); // The dependency array is correct.
    // console.log("Data loaded");
    console.log(data);
    return data;
}

export default useCurrencyInfo;
