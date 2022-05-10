import { ChangeButton} from "./ChangeButton";
import { ResultElement } from "./ResultElemet";
import CurrencyElement from "./CurrencyElement";
import AmountElement from "./AmountElement";
import Clock from "./Clock";
import { currencies } from "./currencies";
import { useState } from "react";
import { StyledForm, StyledFieldset, StyledLegend } from "./styled";
import { useApiRates } from "../../useRates";
import { Loading } from "./Loading/styled";

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
            <StyledFieldset>
                <Loading></Loading>
                <StyledLegend>
                    Currency converter 😉
                </StyledLegend>
                <CurrencyElement currency={currency} setCurrency={setCurrency}/>
                <AmountElement amount={amount} setAmount={setAmount}/>
            </StyledFieldset>
            <ChangeButton/>
            <ResultElement result={result}/>
        </StyledForm>
    )
};

export {Form};