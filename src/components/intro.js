import React, { Component } from 'react'

export class Intro extends Component {
    componentDidMount(){
       let intro = document.getElementsByClassName('intro')[0];
       setTimeout( ( )=>  {
           intro.classList.add('displayNone')

       },2500
       )
       let text = document.getElementsByClassName('text')[0];
       setTimeout( () =>{
           text.classList.add('displayNone')
       },2000
       )
       setTimeout( () =>{
           intro.style.height = '0';
           intro.style.width = '0';

       },3000
       )
    }
    render() {
        return (
            <div className="intro">
                <h2 className="text">Anna</h2>
            </div>
        )
    }
}

export default Intro
