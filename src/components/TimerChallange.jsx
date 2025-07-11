import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;
// ei toimi, sest kui on erinevad komponendid, siis teise komponendi nupule vajutades
// viskab React esimese info minema ja asendab selle uuega

function TimerChallange({ title, targetTime }) {

    const timer = useRef()
    const dialog = useRef()

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);


    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dialog.current.showModal()
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    const handleStop = () => {
        clearTimeout(timer.current);
    }



  return (<>
  <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? "Stop " : "Start " } Challenge
            </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
            {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
    </section>
    </>
  )
}

export default TimerChallange