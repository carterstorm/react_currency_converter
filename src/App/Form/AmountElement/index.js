import { useState } from "react";

const AmountElement = () => {
    const [amount, setAmount] = useState("");

    return (
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
    )
};

export {AmountElement};