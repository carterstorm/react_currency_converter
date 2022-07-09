import { useState, useEffect } from "react";
import axios from "axios";

export const useApiRates = () => {
    const [apiRates, setApiRates] = useState({
        state: "loading",
    });
    
    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const {rates, date} = response.data;

                setApiRates({
                    state: "success",
                    rates,
                    date,
                });
    
            } catch {
                setApiRates({
                    state: "error",
                });
            };
        };
    
        setTimeout(getRates, 2*1000);
    }, []);

    return apiRates;    
};