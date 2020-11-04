import React, { useEffect, useState } from "react";



export default function FunctionalBasedComponent(props) {
    const [incrementCount, setIncrementCount] = useState(0);

    // How useEffect replaces class based component lifecycle methods:
    // https://www.ibrahima-ndaw.com/blog/replace-component-lifecycle-with-useEffect/
    useEffect(() => {
        //console.log(props.id +' Component mounted');

        return () => {
            console.log(props.id + ' Component about to unmount');
        }
    }, [props.id])

    useEffect(() => {
        console.log(props.id + ' counter has been incremented' + incrementCount + ' times.');
    }, [incrementCount, props.id])




    return (
        <div>
            <button onClick={() => {
                setIncrementCount(incrementCount + 1);
                props.onIncrement(props.id)
            }}>Increment</button>
            <button onClick={() => props.onDecrement(props.id)}>Decrement</button>
            <button onClick={() => props.onDelete(props.id)}>Delete</button>
            {props.value}
        </div>
    )


}