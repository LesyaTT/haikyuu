import {useEffect, useState} from "react";
import apiClient from "@/api.js";

export function importData(component){
    const [data, setData] = useState([]);

    useEffect(() => {
        apiClient.get('/')
            .then(response => {
                let data = response.data;
                setData(data[component]);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return data;
}
