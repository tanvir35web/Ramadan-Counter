import { useEffect, useState } from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import CountdownTimer from "./components/ShowCounter/CountdownTimer";

function App() {
    const dueTargetTime = 10 * 60 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();

    const dateTimeAfterThreeDays = currentTime + dueTargetTime;

    const [value, setValue] = useState(1234);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(4000), 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div className="w-full h-[100vh] flex items-center justify-center gap-10">
                <CountDown duration={10 * 25 * 53 * 1000} />
                <div>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>

            </div>
        </>
    );
}

export default App;
