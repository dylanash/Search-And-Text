import React, {Component} from 'react';

class TextCompare extends Component {
    constructor() {
        super();
        this.state = {
            fieldA: '',
            fieldB: ''
        }; 
        // this.onInputChange = this.onInputChange.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    textInputChange(event) {
        // event.preventDefault();
        console.log("Event: ", event);
        // this.setState({field: event.target.value});
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