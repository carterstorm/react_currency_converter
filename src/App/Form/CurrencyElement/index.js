import { currencies } from "../currencies";

const CurrencyElement = ({currency, setCurrency}) => {
    return (
        <p>
            <label 
                className="form__label">
                    <span 
                        className="form__labelText"
                    >
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
    )
};

export default CurrencyElement;