import { ChangeButton} from "./ChangeButton";
import { ResultElement } from "./ResultElemet";
import { currencies } from "./currencies";
import CurrencyElement from "./CurrencyElement";
import AmountElement from "./AmountElement";
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
                <AmountElement amount={amount} setAmount={setAmount}/>
            </fieldset>
            <ChangeButton/>
            <ResultElement/>
        </form>
    )
};

export {Form};