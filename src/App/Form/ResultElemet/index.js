const ResultElement = ({result}) => {

    return (
        <p 
            className="form__updateElement">
            {result && (
                <>
                    {
                        `After exchange 
                        ${result.sourceAmount.toFixed(2)} 
                        PLN you will receive 
                        ${result.targetAmount.toFixed(2)} ${result.currency}`
                    } 
                </>
            )}
        </p>
    )
};

export {ResultElement};