import React from 'react'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.showOut = this.showOut.bind(this)

       
        
    }
    showOut () {
        //hey
                }
    render () {
        return (
            <input type="text" placeholder="type in Emoji's name"/>
        )
    }
}