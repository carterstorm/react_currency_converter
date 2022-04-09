import { useState } from "react";
import { currencies } from "../currencies";

const CurrencyElement = () => {
    const [currency, setCurrency] = useState(currencies[0].short);

    return (
        <p>
            <label 
                className="form__label">
                <span 
                    className="form__labelText">
                        Currency:
                </span>
                <select 
                    className="form__input"
                    value={currency}
                    onChange={({target}) => setCurrency(target.value)}
                    >
                        {currencies.map((item) => (
                            <option
                                key={item.short}
                                value={item.short}
                                >
                                {item.short}
                            </option>
                            ))
                        }
                </select>
            </label>
        </p>
    );
};

export {CurrencyElement};