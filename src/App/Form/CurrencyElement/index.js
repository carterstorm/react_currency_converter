import { currencies } from "../currencies";
import { StyledInput, StyledLabel, StyledLabelText } from "../AmountElement/styled";

const CurrencyElement = ({currency, setCurrency}) => {
    return (
        <p>
            <StyledLabel>
                    <StyledLabelText>
                        Currency:
                    </StyledLabelText>
                    <StyledInput
                        as="select"
                        value={currency}
                        onChange={({target}) => setCurrency(target.value)}
                    >
                        {currencies.map((item) => (
                            <option
                                key={item.short}
                                value={item.short}
                            >
                                {item.short}
                            </option>
                            ))
                        }
                    </StyledInput>
            </StyledLabel>
        </p>
    )
};

export default CurrencyElement;