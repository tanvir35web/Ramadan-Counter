import "./App.css";
import CountDown from "./components/CountDown";

function App() {
    return (
        <>
            <div className="w-full h-[100vh] flex items-center justify-center gap-10">
                <CountDown duration={14 * 25 * 40 * 1000} />
                <CountDown duration={20 * 44 * 62 * 1000} />
            </div>
        </>
    );
}

export default App;
