import React, {Component} from 'react';
import keys from '../keys';
import Bing from 'node-bing-api';

class Search extends Component {

    constructor() {
        super();
        this.state = {
            keyword: ''
        }; 
        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputChange(event) {
        // event.preventDefault();
        this.setState({keyword: event.target.value});
    }

    handleSubmit(event) {
        // event.preventDefault();
        event.preventDefault();
        console.log("Event.target: ", event);
        // console.log(this.state.keyword);
        this.setState({keyword:''});
        
        

    }


    render() {
        console.log("KEYS: ", keys);


        return (
            <div className="search" >
                <h3>Search It</h3>
                <form className="search-form" 
                    onSubmit={this.handleSubmit} >Search here:
                    <input 
                        placeholder="Water you want?"
                        className="form-input"
                        value={this.state.keyword}
                        onChange={this.inputChange}
                    />
                    <button className="search-button" 
                            >Clickity Doo Dah</button>
                </form>
            </div>
        );
    }

}

export default Search;