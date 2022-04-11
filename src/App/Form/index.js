import { ChangeButton} from "./ChangeButton";
import { ResultElement } from "./ResultElemet";
import { currencies } from "./currencies";
import CurrencyElement from "./CurrencyElement";
import { useState } from "react";

const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(currency);
        console.log(amount)
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
                <CurrencyElement currency={currency} setCurrency={setCurrency}/>
                <p>
                    <label 
                        className="form__label">
                        <span 
                            className="form__labelText">
                                Amount to change (PLN):
                        </span>
                        <input 
                            type="number"
                            value={amount}
                            onChange={({target}) => setAmount(target.value)}
                            step="0.01" 
                            min="1" 
                            className="form__input" 
                            required/>
                    </label>
                </p>
            </fieldset>
            <ChangeButton/>
            <ResultElement/>
        </form>
    )
};

export {Form};