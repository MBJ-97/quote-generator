import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default function App() {

    const [advice, setAdvice] = useState([])

    const fetchAdvice = () => {

        axios.get('https://api.adviceslip.com/advice')
            .then( (res) => {

                const {advice} = res.data.slip;
                console.log(advice);

                setAdvice(advice) //set the state of app component to fetched value
            })
            .catch( (error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="app">
            <div className="card">
                <h2 className="heading">{advice}</h2>
                <button onClick={fetchAdvice} className="button">
                    <span className="span">Another one</span>
                </button>
            </div>
        </div>
    )
}
