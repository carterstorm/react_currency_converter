import { ClockElement } from "./styled";
import { useDate } from "./useDate";

const Clock = () => {

    const date = useDate();

    return (
        <ClockElement>
            Today is
            {" "}
            {date.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            })}
        </ClockElement>
    )
};

export default Clock;