
const BASE_URL = 'http://localhost:3030';

export default function useFetch() {
    const request = async (url, method, data) => {
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

        const response = await fetch(BASE_URL + url, options);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Fetch error');
        }

        const result = await response.json();
        
        return result;
    }

    return { request };
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