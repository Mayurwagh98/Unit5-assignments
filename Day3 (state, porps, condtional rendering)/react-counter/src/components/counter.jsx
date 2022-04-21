import React from "react";

import "./counter.css"

const Counter = () =>{

    const [counter, setCounter] = React.useState("Enter number")

    const userInput = (e) =>{

        if(e.key == "Enter"){

            setCounter(Number(document.getElementById("user-input").value))

            document.getElementById("user-input").value = ""
        }

        const handleChange = (val, op = "add") =>{

            if(op == "double"){

                setCounter(counter * val)
            }
            else{

                setCounter(counter + val)
            }
        }
    }

    return (

        <>
            <input onKeyPress={userInput} id = "user-input" placeholder="Enter Number"></input>

            <div id="counter" className = {counter % 2 == 0 ? "even" : "odd"}>Counter :{counter}</div>

            <button onClick = {() => {handlechange (1)}}>Inc</button>

            <button onClick = {() => {handleChange (-1)}}>Dec</button>

            <button onClick = {() => {handleChange (2, "double")}}>Double</button>
        </>
    )
}

export {Counter}