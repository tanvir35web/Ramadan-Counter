import React, { useEffect, useState } from "react";

const CountDown = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time]);

    const getFormattedTime = (milliseconds) => {
        const totalSeconds = parseInt(Math.floor(milliseconds / 1000));
        const totalMinutes = parseInt(Math.floor(totalSeconds / 60));
        const totalHours = parseInt(Math.floor(totalMinutes / 60));

        const seconds = parseInt(totalSeconds % 60);
        const minutes = parseInt(totalMinutes % 60);
        const hours = parseInt(totalHours % 24);

        return `${hours < 10 ? "0" + hours : hours} : ${
            minutes < 10 ? "0" + minutes : minutes
        } : ${seconds < 10 ? "0" + seconds : seconds}`;
    };

    const formattedTime = getFormattedTime(time);

    return (
        <div className="w-96 h-48 bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2 shadow-lg">
            <h1 className="font-bold text-2xl">Count Down</h1>
            <h3 className="font-bold text-5xl"> {formattedTime} </h3>
        </div>
    );
};

export default CountDown;
