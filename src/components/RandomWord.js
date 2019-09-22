import React, { Component } from 'react'

class RandomWord extends Component {
    state = {
        newWord: "",
        wordList: [],
        generateWord: "Click me",
        loading: false,
        setBgColor: ""
    }
    constructor() {
        super() 
        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        const url = "https://random-word-api.herokuapp.com/word?key=7GI5OTYV&number=1000"
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                wordList: response,
                loading: false
            })
        })
        
    }

    handleEvent(event){
        const rand = Math.ceil(Math.random() * (100 - 10) + 10)
        const word = this.state.wordList[rand]
        this.setState({
            generateWord: word
        })
    }

    changeBg(){
        const dark = randRGB(0, 150)
        this.setState({
            setBgColor: `rgb(${dark})`
        })
    }

    render() {
        const {generateWord, loading} = this.state
        return (
            <div className="word" onClick={this.handleEvent}>
                <h1>{loading ? "Loading..." : generateWord}</h1>
            </div>
        )
    }
}

const randRGB = (min, max) => {
    return Math.ceil(min + Math.random() * (max - min))
}

export default RandomWord