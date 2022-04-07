import { CurrencyElement } from "./CurrencyElement";
import { AmountElement } from "./AmountElement";

const Form = () => {

    return (
        <form 
            className="form">
            <fieldset 
                className="form__fieldset">
                <legend 
                    className="form__legend">
                        Currency converter 😉
                </legend>
                <CurrencyElement/>
                <AmountElement/>
            </fieldset>
        </form>
    )
};

export {Form};