import React, { useEffect, useState } from "react";
import "./countDown.css";

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

        const seconds =
            parseInt(totalSeconds % 60) < 10
                ? "0" + parseInt(totalSeconds % 60)
                : parseInt(totalSeconds % 60);
        const minutes =
            parseInt(totalMinutes % 60) < 10
                ? "0" + parseInt(totalMinutes % 60)
                : parseInt(totalMinutes % 60);
        const hours = parseInt(totalHours % 24);

        const s1 = Math.floor(seconds / 10);
        const s2 = Math.floor(seconds % 10);

        return { seconds, minutes, hours, s1, s2 };
    };

    const formattedTime = getFormattedTime(time);

    return (
        <div className="w-[30rem] h-48 bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2 shadow-lg">
            <h1 className="font-bold text-2xl">Count Down</h1>

            <div className=" h-12 flex items-center p-2 gap-4  font-bold text-5xl  justify-center overflow-hidden relative">
                <h3> {formattedTime.hours} </h3>
                <h3>:</h3>
                <h3> {formattedTime.minutes} </h3>
                <h3>:</h3>
                <h3 className="move"> {formattedTime.seconds} </h3>
                {/* <h3>:</h3>
                <h3 className={formattedTime.s1 && "move"}>
                    {formattedTime.s1}
                </h3>
                <h3 className="move">{formattedTime.s2}</h3> */}
            </div>
        </div>
    );
};

export default CountDown;
