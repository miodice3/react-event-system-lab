import { render } from 'enzyme'
// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component {

    handleOnFocus = (e) => {
        console.log("Good!")
    }

    handleOnBlur = (e) => {
        console.log("Hey! Eyes on me!")
    }


    render(){
        return(
            <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>im a button</button>
        )
    }
}