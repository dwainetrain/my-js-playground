import React, { Component } from 'react';

class Weather extends Component{

    constructor(props){
        super(props);
        this.state = {isLoaded:false}
    }

    kelvinToFahrenheit(f) {
        f = parseFloat(f);
        const newTemp = (f - 273.15) * 1.8 + 32;
        return newTemp.toFixed(0);
      }
    
    async componentDidMount() {
        try{
        const response = await fetch("https://mm214.com/demo.php")
        const json = await response.json()
        console.log(json)
        this.setState({
            location: json.name,
            temp: this.kelvinToFahrenheit(json.main.temp),
            condition: json.weather[0].description,
            isLoaded: true
        })} catch(error) {
            console.log(error)
        }
        
    }

    render(){

        return(
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Weather Report for {this.state.location}</h1>
                        <p>Temperature: {this.state.temp}&deg;F</p>
                        <p>Condition: {this.state.condition}</p>
                    </div>
                ) : (
                <h3>Loading...</h3>)
                }
            </div>
        )
    }

}

export default Weather;