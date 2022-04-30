import { ChangeButton} from "./ChangeButton";
import { ResultElement } from "./ResultElemet";
import CurrencyElement from "./CurrencyElement";
import AmountElement from "./AmountElement";
import Clock from "./Clock";
import { currencies } from "./currencies";
import { useState } from "react";
import { StyledForm } from "./styled";
import "../Form/index.css";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Clock/>
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
            <ResultElement result={result}/>
        </StyledForm>
    )
};

export {Form};