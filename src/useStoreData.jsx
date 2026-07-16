import { useEffect, useState } from "react";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// delay is for testing purposes only

function useStoreData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        setLoading(true)
        setError(null)

        fetch('https://fakestoreapi.com/products', {signal})
            .then(response => {
                if (response.status >= 400) {throw new Error(`HTTP error. Status: ${response.status}`)}
                return response.json();
            })
            .then((data) => {
                // add delay to test loading state
                return delay(2000).then(() => data);
            })
            .then(data => setData(data))
            .catch(err => {
                if (err.name !== `AbortError`) {
                    setError(err.message || "Something went wrong");
                }
            })
            .finally(() => {
                if (!signal.aborted) {
                    setLoading(false);
                }
            })

            return () => {
                controller.abort();
            }
    }, []);

    return {data, loading, error};

};

export default useStoreData;