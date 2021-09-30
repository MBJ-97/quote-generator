import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SharedQuote from './SharedQuote';
import ShareButton from './ShareButton'



export default function App() {

    const [advice, setAdvice] = useState([])

    const fetchAdvice = () => {

        axios.get('https://api.adviceslip.com/advice')
            .then( (res) => {

                const {advice} = res.data.slip;

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
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="app">
                        <div className="card">
                            <h2 className="heading">{advice}</h2>
                            <button onClick={fetchAdvice} className="button">
                                <span className="span">Another one</span>
                            </button>
                            <ShareButton advice={advice} /> {/* Should set a link and display it on click either with a modal or simply below*/}
                        </div>
                    </div>
                </Route>
                <Route path="/shared/:id">
                    <SharedQuote />
                </Route>
            </Switch>
        </Router>
        
    )
}
