import React, { Component } from 'react'
import "./Ubbi.css"

export default class Ubbi extends Component {
    
    state = {
        input: ""
    }

    handleChange = (event) => {
        let output = ""
        for (const i of event.target.value) {
            if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
                output += "ub"
            }
            output += i
        }
        this.setState ({ input: output })
    }

    render() {
        return (
            <div>
                <div className="main">
                    <div className="rules">
                        <h1>Ubbi Dubbi</h1>
                        <p>Encrypt a text with Ubbi Dubbi</p>
                        <p id="rules">The rules of Ubbi Dubbi are simple,
                        every vowel is prefaced with "ub"
                        </p>
                        <textarea name="encript" id="" cols="50" rows="10" onChange={this.handleChange}></textarea>
                        <p className="title">Encrypted text:</p>
                        <span className="output">{this.state.input}</span>
                    </div>
                </div>
            </div>
        )
    }
}

