const AmountElement = (amount, setAmount) => {
    
    const onChangeAmount = ({target}) => {
        setAmount(target.value)
    };
    
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
                    onChange={onChangeAmount}
                    step="0.01" 
                    min="1" 
                    className="form__input" 
                    required/>
            </label>
        </p>
    )
}

export default AmountElement;