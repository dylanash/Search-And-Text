import React, {Component} from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            keyword: ''
        }; 
        // this.onInputChange = this.onInputChange.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    inputChange(event) {
        // event.preventDefault();
        this.setState({keyword: event.target.value});
    }


    render() {


        return (
            <div className="search" >
                <form className="search-form" >
                    <input 
                        placeholder="Water you want?"
                        className="form-input"
                        value={this.state.keyword}
                        onChange={this.inputChange}
                    />
                    <button className="search-button" >Clickity Doo Dah</button>
                </form>
            </div>
        );
    }

}

export default Search;