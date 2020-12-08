import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LegacyApp from './LegacyApp';
import DebounceApp from './DebounceApp';
import reportWebVitals from './reportWebVitals';

const mode = 'concurrent';  // concurrent | debounce | legacy
if (mode === 'concurrent') {
    ReactDOM.unstable_createRoot(document.getElementById("root")).render(<App />)
} else if(mode === 'debounce'){
    ReactDOM.render(
        <DebounceApp />,
        document.getElementById('root')
    );
}else{
    ReactDOM.render(
        <LegacyApp />,
        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
