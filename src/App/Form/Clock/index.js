import { useEffect, useState } from "react";
import "../Clock/index.css";

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, []);

    return (
        <p className="clock">
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
        </p>
    )
};

export default Clock;