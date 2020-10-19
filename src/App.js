import React from 'react';
import logo from './logo.svg';
import './App.css';
import Addition from './Addition';

const App = () => {
    return (
        <>
            <Addition numberOne={ 4 } numberTwo={ 4 } />
            <Addition numberOne={ 7 } numberTwo={ -1 } />
            <Addition numberOne={ -20 } numberTwo={ 27 } />
            <Addition numberOne={ 3.1 } numberTwo={ 1.9 } />
            <Addition numberOne={ 1 } numberTwo={ 2 } />
            <Addition numberOne={ 100 } numberTwo={ -100 } />
            <Addition numberOne={ 534 } numberTwo={ -525 } />
        </>
    );
}

export default App;
