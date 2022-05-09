import { useState } from "react";

export const useRates = () => {
    const [rates, setRates] = useState({
        state: "Loading...",
    });
};