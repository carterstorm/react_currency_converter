import { useState } from "react";
import { ChangeButton} from "./ChangeButton";
import { ResultElement } from "./ResultElemet";
import { Loading } from "./Loading/styled";
import { Failure } from "./Failure/styled";
import Clock from "./Clock";
import { 
    StyledForm,
    Fieldset,
    Legend,
    Label,
    LabelText,
    Input 
} from "./styled";

import { useApiRates } from "../../useApiRates";

const Form = () => {

    const apiRates = useApiRates();

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount)
    }

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = apiRates.rates[currency];

        setResult({
          sourceAmount: +amount,
          targetAmount: amount * rate,
          currency,
        })
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Clock/>
            <Fieldset>
                <Legend>
                    Currency converter 😉
                </Legend>

                {apiRates.state === "loading" ?  (
                        <Loading>
                            Please wait a secound... <br/> Loading rates from the European Central Bank
                        </Loading>
                    )
                    : 
                        apiRates.state === "error" ? (
                            <Failure>
                                Something go wrong... Please check your internet connection. <br/>If you are connected to the Internet, the error is probably on our side. Please try again later...
                            </Failure>
                        )
                     : (
                        <>
                            <Label>
                                <LabelText>
                                    Currency:
                                </LabelText>
                                <Input
                                    as="select"
                                    value={currency}
                                    onChange={({target}) => setCurrency(target.value)}
                                >
                                    {Object.keys(apiRates.rates).map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    ))}
                                </Input>
                            </Label>

                            <Label>
                                <LabelText>
                                    Amount to change (PLN):
                                </LabelText>
                                <Input 
                                    type="number"
                                    value={amount}
                                    onChange={({target}) => setAmount(target.value)}
                                    step="0.01" 
                                    min="1" 
                                    required
                                />
                            </Label>
                        </>
                    )
                }
            </Fieldset>
            <ChangeButton/>
            <ResultElement result={result}/>
        </StyledForm>
    )
};

export {Form};