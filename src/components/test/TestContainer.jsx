import React, { useEffect, useState } from 'react'
import TestClass from './TestClass'

const TestContainer = () => {

    const [fact, setFact] = useState([]);

    const askFact = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://catfact.ninja/fact", requestOptions)
            .then(response => response.json())
            .then(result => setFact(result))
            .catch(error => console.log('error', error));

    }

    useEffect(() => {
        askFact()
    }, [])


    return (
        <TestClass fact={fact} askFact={askFact} />
    )
}

export default TestContainer