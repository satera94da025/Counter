import React from "react";
import s from './Counter.module.css'
import {ErrorType} from "./App";

type PropsType = {
    addCount: () => void
    count: number
    resCount: () => void
    maxValue: number
    error: ErrorType
}

function Counter(props: PropsType) {

    function addCount() {
        props.addCount()
    }

    function resCount() {
        props.resCount()
    }

    return (
        <div className={s.counterBlock}>
            <div className={s.counter}>
                <a className={props.count === props.maxValue ? s.maxValue : ''}>{props.error || props.count} </a>
            </div>
            <div className={s.buttons}>
                <button className={s.button} disabled={props.count === props.maxValue} onClick={addCount}>inc</button>
                <button className={s.button} onClick={resCount}>reset</button>
            </div>
        </div>)
}

export default Counter