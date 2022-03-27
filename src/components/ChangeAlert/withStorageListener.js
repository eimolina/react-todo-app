import React from 'react'

export default function withStorageListener(WrappedComponent) {
    return function WrappedComponetWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);
        React.useEffect(() => {
            const onChange = (change) => {
                if (change.key === "TODOS_V1") {
                    console.log("CAMBIO STORAGE");
                    setStorageChange(true);
                }
            }

            window.addEventListener('storage', onChange);

            return () => {
                window.removeEventListener("storage", onChange);
            };
        },[]);


        const toggleShow = () => {
            props.synchronize();
            setStorageChange(false);
        }
        return <WrappedComponent
            show={storageChange}
            toggleShow={toggleShow}
        />
    }
}
