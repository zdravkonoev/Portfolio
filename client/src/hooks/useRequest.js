
const BASE_URL = 'http://localhost:3030';
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.jsx";

export default function useRequest(url, initalState) {

    const {user, isAutheticated} = useContext(UserContext); 

    const [data, setData] = useState(initalState);
    
    const request = async (url, method, data, config={}) => {
        let options = {};
        if (method) {
            options.method = method;   
        }

        if (data) {
            options.headers = {
                "Content-Type": "application/json"
            };

            options.body = JSON.stringify(data);
            
        }
        console.log("User acccess Toekn:", config.accessToken);
        console.log("User isAutheticated:", isAutheticated);

        if (config.accessToken || isAutheticated) {
            options.headers = {
                ...options.headers,
                "X-Authorization": config.accessToken || user.accessToken,
            };
        }

        const response = await fetch(BASE_URL + url, options);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Fetch error');
        }

        if (response.status === 204) {
            return {}
        }

        const result = await response.json();
        
        return result;
    }

    useEffect(() => {
        // Fetch initial data if URL is provided
        
        if (!url) return;

        request(url)
          .then(result => setData(result))
          .catch(error => console.error('Error fetching data:', error));
        
    }, [url]);

    return { request, data };
}


//export default function useFetch(url, initalState) {
//    const [data, setData] = useState(initalState);
//    const [isPending, setIsPending] = useState(true);
//    const [error, setError] = useState(null);
//
//    useEffect(() => {
//        const abortController = new AbortController();
//
//        fetch(url, {signal: abortController.signal})
//            .then(res => res.json())
//            .then(result => {
//                console.log(Object.values(result));
//                setData(result);
//            })
//            .catch(err => {
//                setError(err.message);
//                console.error("Error fetching data:", err);
//            })
//            .finally(() => {
//                setIsPending(false);
//            });
//        return () => {
//            abortController.abort();
//        };
//    }, [url])
//
//    return {data, isPending, error};
//}