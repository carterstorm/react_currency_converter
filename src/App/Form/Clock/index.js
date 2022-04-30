import { useEffect, useState } from "react";
import { ClockElement } from "./styled";

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

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