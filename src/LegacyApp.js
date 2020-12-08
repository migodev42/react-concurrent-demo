import logo from './logo.svg';
import './App.css';
import { useState, unstable_useDeferredValue } from 'react';
import { unstable_scheduleCallback } from "scheduler";
import Clock from "./Clock";
import SlowList from './SlowList';

function App() {
    const [value, setValue] = useState('');
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1>React Without Concurrent Mode</h1>
                <input type="text" onChange={onChange} value={value} />
                <Clock />

                <SlowList text={value}/>
            </header>
        </div>
    );
}

export default App;
