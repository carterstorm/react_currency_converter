import axios from "axios";
import { useEffect, useState } from "react";

export const useApiRates = () => {
    const [apiRates, setApiRates] = useState({
        state: "Loading...",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const {rate, date} = response.data;

                setApiRates({
                    state: "Succes!",
                    rate,
                    date,
                });

            } catch {
                setApiRates({
                    state: "Error",
                });
            };
        };

        setTimeout(getRates, 1*1000);
    }, []);

    return apiRates;
};