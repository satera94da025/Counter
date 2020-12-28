import React, {ChangeEvent, useState} from "react";
import s from './Counter.module.css'
import {ErrorType} from "./App";

type PropsType = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    check: (start: number, max: number) => void
    error: ErrorType
}

function SecondCounter(props: PropsType) {

    const [start, setStart] = useState<number>(props.startValue)
    const [max, setMax] = useState<number>(props.maxValue)

    function startChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setStart(e.currentTarget.valueAsNumber)
        props.check(e.currentTarget.valueAsNumber, max)

    }

    function maxChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setMax(e.currentTarget.valueAsNumber)
        props.check(start, e.currentTarget.valueAsNumber)

    }

    const onClickHandler = () => {
        props.setStartValue(start)
        props.setMaxValue(max)
    }

    return (<div className={s.counterBlock}>
            <div className={s.counter}>
                <div >
                    <span> max value:</span>
                    <input onChange={maxChangeHandler} value={max}
                           className={`${s.inputClass}  ${props.error ? s.error : ''}`} type='number'/> <br/>
                    <span> start value:</span>
                    <input onChange={startChangeHandler} value={start}
                           className={`${s.inputClass}  ${props.error ? s.error : ''}`} type='number'/>
                </div>
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={onClickHandler}>set</button>
            </div>
        </div>
    )
}

export default SecondCounter