import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [synchronizeTodos, setSynchronizeTodos] = React.useState(true);
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem = initialValue;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(parsedItem));
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                setLoading(false);
                setSynchronizeTodos(true);
                console.log("END SYNCHRONIZE");
            } catch (error) {
                setError(true);
            }
        }, 3000);
    }, [synchronizeTodos]);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(true);
        }
    }

    const synchronize = () =>{
        setLoading(true)
        setSynchronizeTodos(false);
    }

    return { item, saveItem, loading, error, synchronize }
}

export { useLocalStorage }