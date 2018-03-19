import React, {Component} from 'react';

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
        // event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.keyword);
        

    }


    render() {


        return (
            <div className="search" >
                <form className="search-form" 
                    onSubmit={this.handleSubmit} >
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