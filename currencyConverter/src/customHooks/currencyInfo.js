import { useState, useEffect } from "react";

function useCurrencyChanger(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res[currency]) {
                    setData(res[currency]);
                } else {
                    console.error("Unexpected response format:", res);
                }
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;
}

export default useCurrencyChanger;
