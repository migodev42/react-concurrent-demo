import logo from './logo.svg';
import './App.css';
import { useState, useCallback, unstable_useDeferredValue } from 'react';
import { unstable_scheduleCallback } from "scheduler";
import Clock from "./Clock";
import SlowList from './SlowList';
// import {debounce} from 'lodash'
import { useDebounce } from 'react-use'

function App() {
    const [value, setValue] = useState('');
    const [debounceValue, setDebounceValue] = useState('');

    useDebounce(() => {
        setDebounceValue(value)
    }, 500, [value])

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>React With Debounce</h1>
                <input type="text" onChange={onChange} value={value} />

                <Clock />

                <SlowList text={debounceValue} />
            </header>
        </div>
    );
}

export default App;
