import React from 'react'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.showOut = this.showOut.bind(this)

       
        
    }
    showOut (e) {
        //hey
                }
    render () {
        return (
            <input onChange={this.showOut} type="text" placeholder="type in Emoji's name"/>
        )
    }
}