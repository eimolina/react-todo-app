import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const {
        synchronizeTodos,
        error,
        loading,
        item
    } = state;

    const onSetError = (error) => {
        dispatch({ type: actionTypes.ERROR, payload: error });
    }

    const onSave = (item) => {
        dispatch({ type: actionTypes.SAVE, payload: item });
    }

    const onSynchronize = () => {
        dispatch({ type: actionTypes.SYNCHRONIZE });
    }

    const onSuccess = (item) => {
        dispatch({ type: actionTypes.SUCCESS, payload: item });
    }

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
                onSuccess(parsedItem);
            } catch (error) {
                onSetError(error);
            }
        }, 3000);
    }, [synchronizeTodos]);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            onSave(newItem);
        } catch (error) {
            onSetError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
        synchronize: onSynchronize
    }
}

const initialState = ({ initialValue }) => ({
    synchronizeTodos: true,
    error: false,
    loading: true,
    item: initialValue
});

const actionTypes = {
    "ERROR": "ERROR",
    "SAVE": "SAVE",
    "SYNCHRONIZE": "SYNCHRONIZE",
    "SUCCESS": "SUCCESS",
};

const reducerObject = (state, payload) => ({
    [actionTypes.ERROR]: {
        ...state,
        error: true
    },
    [actionTypes.SAVE]: {
        ...state,
        item: payload
    },
    [actionTypes.SYNCHRONIZE]: {
        ...state,
        loading: true,
        synchronizeTodos: false
    },
    [actionTypes.SUCCESS]: {
        ...state,
        loading: false,
        synchronizeTodos: true,
        item: payload
    }
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };