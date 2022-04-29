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
        but:{
            "5":"aa",
            "10":"aa",
            "15":"aa",
            "25":"aa",
            "50":"aa",
        }
    }


    onReset = ()=>{
        let data1 = {
            bill : 0,
            people: 0,
        }
        let but={
            "5":"aa",
            "10":"aa",
            "15":"aa",
            "25":"aa",
            "50":"aa",
        }
        this.setState({data : data1, amount:0, total:0, but})

    }

    render(){
        return(
            <div className="dashy">
                <img src = {logo} alt ="logo"/>
                <div className = "calculator">
                    
                    <Calculation
                    data = {this.state.data}
                    change = {this.change}
                    click = {this.click}
                    but = {this.state.but}/>
                    
                    <Result
                    amount = {this.state.amount}
                    total = {this.state.total}
                    reset = {this.onReset}
                    people = {this.state.data.people}/>
                </div>
                <Footer/>
            </div>
        )
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
        let butChange = {
            "5":"aa",
            "10":"aa",
            "15":"aa",
            "25":"aa",
            "50":"aa"
        }
        butChange[e.currentTarget.name] = "bb";

        if (parseInt(people) !== 0){
            cal = cal/people
            this.setState({amount:cal, total : bill/people + cal, but:butChange})
        }   
    }
}

export default Main;