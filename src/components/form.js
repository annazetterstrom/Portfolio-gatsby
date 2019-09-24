import React, { Component } from 'react'


export class Form extends Component {
    render() {
        return (
            <div>
             <form className="form" name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <input type="email" name="email" placeholder="Email"/>
                <textarea name="message" cols="40" rows="10" placeholder="Message"/>
                <button type="submit">Send</button>
            </form>
            </div>
        )
    }
}
export default Form
