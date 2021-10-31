import React, {Component} from 'react';

class AgeCalc extends React.Component{
render(){
    let d = new Date();
   
    this.state = {
    currentYear : d.getFullYear(),
    birthYear: 2002,
}



return(
    <>
    
   <div className = "container">
    <h1>Age Calculator</h1>
    <h2>Your Birth Year is {this.state.birthYear} </h2>
    <h3>Age is {+this.state.currentYear - this.state.birthYear}</h3>
    </div>
    </>
);
    



}
}
export default AgeCalc;