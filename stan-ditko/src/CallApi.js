import { useEffect, useState } from 'react';
import axios from 'axios';

export default (url, single = false) => { 
    const [element, setElement] = useState([]);
    useEffect(()=> {
        axios
        .get(url)
        .then(res=>{
            single ? setElement(res.data.data.results[0]) : setElement(res.data.data.results);
        })
        .catch(error=>console.log(error));
    }, []);
    return element;
};
