//useFetchData.js
import {useEffect, useState} from "react";
const url = "https://ThronesApi.com/api/v2/Characters"
export const useFetchData = ()=>{
    const [data, setData]= useState([]);

    const getData = async ()=>{
        const response = await fetch(url)
        const data = await response.json()
        setData(data);
    };
    useEffect(()=>{
        
        getData();
    }, []);
    return {data}
}