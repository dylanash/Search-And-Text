import React, {Component} from 'react';

class TextCompare extends Component {
    constructor() {
        super();
        this.state = {
            fieldA: '',
            fieldB: ''
        }; 
        this.textInputChange = this.textInputChange.bind(this);
        this.handleCompare = this.handleCompare.bind(this);
    }

    textInputChange(event, field) {
        // event.preventDefault();
        console.log('f:', field)
        console.log('event:',event)
        if(field === 'fieldA'){
            this.setState({
                fieldA: event
            })
        } else if (field === 'fieldB' ) {
            this.setState({
                fieldB: event
            })
        }
      

        // event.preventDefault();
    }

    handleCompare(event) {
        event.preventDefault();
        // console.log(this.state.keyword);
    }


    render() {
        return (
            <div className="search" >
                <form className="search-form" >
                    <input 
                        placeholder="Enter some text"
                        className="text-a"
                        value={this.state.fieldA}
                        onChange={(event) => this.textInputChange(event.target.value, "fieldA")}
                    />
                    <input 
                        placeholder="Enter text to compare to other text"
                        className="text-b"
                        value={this.state.fieldB}
                        onChange={(event) => this.textInputChange(event.target.value, "fieldB")}
                    />
                    <button className="search-button" >Compare Text Fields</button>
                </form>
            </div>
        );
    }
}

export default TextCompare;