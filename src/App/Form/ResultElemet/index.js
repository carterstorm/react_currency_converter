import { StyledResultElement } from "./styled";

const ResultElement = ({result}) => {

    return (
        <StyledResultElement 
            >
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
        </StyledResultElement>
    )
};

export {ResultElement};