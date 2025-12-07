import { useState } from 'react';

export default function useLocalStorage(initalState, key) {
    const [state, setState] = useState(() => {

        const data = localStorage.getItem(key);

        if (data) {
            return JSON.parse(data);
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