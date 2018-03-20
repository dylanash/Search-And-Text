import React, {Component} from 'react';

class TextCompare extends Component {
    constructor() {
        super();
        this.state = {
            fieldA: '',
            fieldB: ''
        }; 
        // this.textInputChange = this.textInputChange.bind(this);
        // this.handleCompare = this.handleCompare.bind(this);
    }

    textInputChange(event) {
        // event.preventDefault();
        console.log("Event target: ", event.target);
        // this.setState({keyword: event.target.value});
        // event.preventDefault();
    }

    handleCompare(event) {
        event.preventDefault();
        console.log(this.state.keyword);
        

    }


    render() {


        return (
            <div className="search" >
                <form className="search-form" >
                    <input 
                        placeholder="Enter some text"
                        className="text-a"
                        value={this.state.fieldA}
                        onChange={this.textInputChange}
                    />
                    <input 
                        placeholder="Enter text to compare to other text"
                        className="text-b"
                        value={this.state.fieldB}
                        onChange={this.textInputChange}
                    />
                    <button className="search-button" >Compare Text Fields</button>
                </form>
            </div>
        );
    }

}

export default TextCompare;