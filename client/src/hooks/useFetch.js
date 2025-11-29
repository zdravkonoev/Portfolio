import { useEffect, useState } from "react";

export default function useFetch(url, initalState) {
    const [data, setData] = useState(initalState);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal})
            .then(res => res.json())
            .then(result => {
                console.log(Object.values(result));
                setData(result);
            })
            .catch(err => {
                setError(err.message);
                console.error("Error fetching data:", err);
            })
            .finally(() => {
                setIsPending(false);
            });
        return () => {
            abortController.abort();
        };
    }, [url])

    return {data, isPending, error};
}