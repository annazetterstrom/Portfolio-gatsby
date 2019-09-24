import React, { Component } from 'react'


export class Form extends Component {
    render() {
        return (
            <div>
                <form name="contact" method="POST" netlify className="form">
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" cols="50" rows="10" placeholder="Message"></textarea>
                <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}
export default Form
