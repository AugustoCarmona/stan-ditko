import { useEffect, useState } from 'react';
import axios from 'axios';

export default (url, single = false) => { 
    const [element, setelement] = useState([]);

    useEffect(()=> {
        axios
        .get(url)
        .then(res=>{
            single ? setelement(res.data.data.results[0]) : setelement(res.data.data.results);
        })
        .catch(error=>console.log(error));
    }, []);

    return element;
};
