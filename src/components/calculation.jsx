import React from "react";
import imgDol from "../images/icon-dollar.svg"
import imgPer from "../images/icon-person.svg"
import "./calculation.css"

export const Calculation = (props)=>{
    let {data, change, click} = props;
    
    return(
        <div className="calculation">
            <form>
                <label htmlFor="bill">Bill</label>
                <div>
                    <input 
                    type = "text" 
                    id = "bill" 
                    name = "bill"
                    value = {data.bill}
                    onChange = {change}/>

                    <img src = {imgDol}/>
                </div>
            </form>
 
            <p>Select Tip %</p>
            <div className="button">
                <button name = "5" onClick={click}>5%</button>
                <button name = "10" onClick={click}>10%</button>
                <button name = "15" onClick={click}>15%</button>
                <button name = "25" onClick={click}>25%</button>
                <button name = "50" onClick={click}>50%</button>
                <button>Custom</button>
            </div>
                        
            <form>
                <label htmlFor="people">Number of People</label>
                <div>
                    <input 
                    type = "text" 
                    id = "people" 
                    name = "people"
                    value = {data.people}
                    onChange = {change} />
                    <img src = {imgPer}/>
                </div>
            </form>
        </div>
    )
}