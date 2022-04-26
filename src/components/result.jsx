import React from "react";


export const Result=(props)=>{
    let {amount, total} = props;
    return(
            <div className="result">
                <div className="dollar">
                    <div className="amount">
                        <p>Tip Amount</p>
                        <p>/ person</p>
                    </div>
                    <div>${amount.toFixed(2)}</div>    
                </div>
                <div className = "dollar">
                    <div className="amount">
                        <p>Total</p>
                        <p>/ person</p>
                    </div>
                    <div>${total.toFixed(2)}</div>    
                </div>
                <button>Reset</button>
            </div>
    )
}