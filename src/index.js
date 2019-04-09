// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Create a React component
const App = function() {
    const textAssets = {
        button: 'Click me!',
        label: 'Enter name:'
    };

    return (
        <div>
            <h3>Current time: {getTime()}</h3>
            <label className="label" htmlFor="name">
                {textAssets.label}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {textAssets.button}
            </button>
        </div>
    );
};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);