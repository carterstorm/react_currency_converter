import { ChangeButton} from "./ChangeButton";
import { ResultElement } from "./ResultElemet";
import { currencies } from "./currencies";
import { useState } from "react";

const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({short}) => short === currency).rate;
    
        setResult({
          sourceAmount: +amount,
          targetAmount: amount/rate,
          currency,
        })
      };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount)
    }

    return (
        <form onSubmit={onFormSubmit}
            className="form">
            <fieldset 
                className="form__fieldset">
                <legend 
                    className="form__legend">
                        Currency converter 😉
                </legend>
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
                <p>
                    <label 
                        className="form__label">
                        <span 
                            className="form__labelText"
                        >
                            Amount to change (PLN):
                        </span>
                        <input 
                            type="number"
                            value={amount}
                            onChange={({target}) => setAmount(target.value)}
                            step="0.01" 
                            min="1" 
                            className="form__input" 
                            required
                        />
                    </label>
                </p>
            </fieldset>
            <ChangeButton/>
            <ResultElement result={result}/>
        </form>
    )
};

export {Form};