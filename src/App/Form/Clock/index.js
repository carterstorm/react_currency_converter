import { useEffect, useState } from "react";

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, []);

    return (
        <p>
            Dzisiaj jest
            {" "}
            {date.toLocaleDateString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            })}
        </p>
    )
};

export default Clock;