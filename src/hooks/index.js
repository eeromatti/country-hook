import { useState, useEffect } from "react";
import axios from "axios";

export const useCountry = ( search ) => {
    const [name, setName] = useState('')
    const [capital, setCapital] = useState('')
    const [population, setPopulation] = useState('')

    useEffect(() => {
        const country = axios.get(`https://studies.cs.helsinki.fi/restcountries/name/finland`)
        console.log("country:", country) 
    }, [])
}

