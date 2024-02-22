import React, { useEffect, useState } from "react";
import "./countDown.css";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const CountDown = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTime(time - 1000);
            return () => {
                clearTimeout(timeoutId);
            };
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        };
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

        return { seconds, minutes, hours };
    };

    const formattedTime = getFormattedTime(time);

    return (
        <div className="w-[30rem] h-48 bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2 shadow-lg">
            <h1 className="font-bold text-2xl">Count Down</h1>

            <div className=" flex items-center p-2 gap-4  font-bold text-5xl  justify-center overflow-hidden relative">
                <h3>
                    <Odometer value={formattedTime.hours} formate={"dd"} />
                </h3>
                <h3>:</h3>
                <h3>
                    <Odometer value={formattedTime.minutes} formate={"dd"} />
                </h3>
                <h3>:</h3>
                <h3>
                    <Odometer
                        className="flex flex-row-reverse"
                        value={formattedTime.seconds}
                        duration={500}
                        formate={"(.ddd),dd"}
                    />
                </h3>
            </div>
        </div>
    );
};

export default CountDown;
