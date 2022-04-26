import React from "react"
import logo from "./images/logo.svg"
import "./main.css"

import {Result} from "./components/result"
import {Calculation} from "./components/calculation"
import {Footer} from "./components/footer"

class Main extends React.Component{

    state = {
        data:{
            bill : 0,
            people: 0,
        },
        amount : 0,
        total : 0,
    }

    change = (e)=>{
        let data =  {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data})
    }

    click = (e)=>{
        let {bill, people} = this.state.data
        let value = parseFloat(e.currentTarget.name)
        let cal = bill * value/100
        console.log(people)
        console.log(value)
        if (parseInt(people) !== 0){
            cal = cal/people
            this.setState({amount:cal, total : bill/people + cal})
            
        }
        
        
    }

    render(){
        return(
            <div className="dashy">
                <img src = {logo} alt ="logo"/>
                <div className = "calculator">
                    
                    <Calculation
                    data = {this.state.data}
                    change = {this.change}
                    click = {this.click}/>
                    
                    <Result
                    amount = {this.state.amount}
                    total = {this.state.total}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Main;