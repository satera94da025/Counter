import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import SecondCounter from "./SecondCounter";

export type ErrorType = '' | ' your start value is error' | ' your max value is error'

function App() {

    const [error, setError] = useState<ErrorType>('')

    function check(start: number, max: number) {
        if (start >= max) {
            setError(' your max value is error')
        } else if (start < 0) {
            setError(' your start value is error')
        }else setError('')

    }

    function setStartValue(start: number) {
        localStorage.setItem('start', JSON.stringify(start))
    }

    function getStartValue() {
        const get = (localStorage.getItem('start'))
        if (get) {
            return JSON.parse(get)
        } else return 0
    }

    function setMaxValue(max: number) {
        localStorage.setItem('max', JSON.stringify(max))
    }

    function getMaxValue() {
        const get = (localStorage.getItem('max'))
        if (get) {
            return JSON.parse(get)
        } else return 5
    }

    const startValue = getStartValue()
    const maxValue = getMaxValue()

    const [count, setCount] = useState<number>(startValue)

    function addCount() {
        setCount(count + 1)
    }

    function resCount() {
        setCount(startValue)
    }

    function SetStart(value: number) {
        setStartValue(value)
        setCount(value)
    }

    return (
        <div className="App">
            <SecondCounter maxValue={maxValue} startValue={startValue} setMaxValue={setMaxValue}
                           setStartValue={SetStart} check={check} error={error}/>
            <Counter addCount={addCount} count={count} resCount={resCount} maxValue={maxValue} error={error}/>
        </div>
    );
}

export default App;
