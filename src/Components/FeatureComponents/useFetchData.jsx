import React, { useState,useEffect, useMemo} from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [result,setResult] = useState([])
    

    useEffect(()=>{
        fetchCategoriesData();
    },[]);


    const fetchCategoriesData=async ()=>{
        const res = await axios("https://mapi.thesouledstore.com/api/v2/homescreenweb/v3");
        if(res.status === 200) setResult(res?.data?.["Home Landing Web"] )
    }
    // const cachedValue = useMemo(fetchCategoriesData,[result])
    return result;
};

export default useFetchData;