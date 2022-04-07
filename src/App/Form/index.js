import { CurrencyElement } from "./CurrencyElement";

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
            </fieldset>
        </form>
    )
};

export {Form};