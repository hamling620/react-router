import React, { Component } from 'react'
import { Consumer } from './context'

class Link extends Component {
    render () {
        return (
            <Consumer>
            {
                state => {
                    const { push } = state.history
                    // console.log(state)
                    return <a href={this.props.to} onClick={ e => {
                            e.preventDefault()
                            push(this.props.to)
                        }}>
                        { this.props.children }
                    </a>
                }
            }    
            </Consumer>
        )
    }
}

export default Link