import { useEffect, useState } from 'react';
import axios from 'axios';

export default (url) => { 
    const [character, setCharacter] = useState([]);

    useEffect(()=> {
        axios
        .get(url)
        .then(res=>{
            setCharacter(res.data.data.results);
        })
        .catch(error=>console.log(error));
    }, []);

    return character;
};
