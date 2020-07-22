import React, { Component } from 'react';

class Weather extends Component{

    constructor(){
        super();
        this.state = { data:{main:{temp:''}} }
    }

    // The basic structure
    // pull other information from your assignment last quarter...
    // add a choose your own city api
    async componentDidMount() {
        const response = await fetch("https://mm214.com/demo.php")
        const json = await response.json()
        this.setState({ data: json })
        // console.log(this.state.data.main.temp)
    }

    render(){
        const temp = this.state.data.main.temp

        return(
            <div>
                <p>The temperature is {temp}</p>
            </div>
        )
    }

}

export default Weather;