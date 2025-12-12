import { useState } from 'react';

export default function useLocalStorage(initalState, key) {
    const [state, setState] = useState(() => {
        //function to get initial state from localStorage on first render
        const storageData = localStorage.getItem(key);

        if (storageData) {
            return JSON.parse(storageData);
        }

        
        return initalState
    });

    const setPersistedState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    }

    return [
        state,
        setPersistedState
    ]
}