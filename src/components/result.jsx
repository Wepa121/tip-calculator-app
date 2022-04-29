import React from "react";
import "./result.css"

export const Result=(props)=>{
    let {amount, total, reset, people} = props;
    let classButton = "";
    if(people === 0){
        classButton = "first"
    }
    else{
        classButton = "second"
    }
    return(
            <div className="result">
                <div className="dollar">
                    <div className="amount">
                        <p>Tip-Amount</p>
                        <p>/ person</p>
                    </div>
                    <div className="num">${amount.toFixed(2)}</div>    
                </div>
                <div className = "dollar">
                    <div className="amount">
                        <p>Total</p>
                        <p>/ person</p>
                    </div>
                    <div className="num">${total.toFixed(2)}</div>    
                </div>
                <button className = {classButton} onClick={reset}>Reset</button>
            </div>
    )
}