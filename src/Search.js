import React, {Component} from 'react';
import axios from 'axios';

/*
Search function using axios requests to DuckDuckGo
DuckDuck takes the term and returns data that is parsed to deliver
- a Title of the first result
- a URL of the first result
- an image if available
*/

class Search extends Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            searchTerm: '',
            searchUrl: '',
            searchImage: ''
        }; 
        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    searchDuck(term) {
    
        axios.get(`https://api.duckduckgo.com/?q=${term}&format=json`)
        .then((res) => {
            if (res.data.Heading) {
                this.setState({searchTerm: res.data.Heading});
                this.setState({searchUrl: res.data.AbstractURL});
                this.setState({searchImage: res.data.Image})

            }
        })
        .catch((err) =>{
            console.error(err);
        } )
    }

    inputChange(event) {
        this.setState({keyword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let keyword = this.state.keyword
            this.searchDuck(keyword);
    }

    render() {
        return (
            <div className="search" >
                <h3>Search Using DuckDuckGo!</h3>
                <form className="search-form" 
                    onSubmit={this.handleSubmit} >
                    <input 
                        placeholder="Enter Keyword"
                        className="form-input"
                        value={this.state.keyword}
                        onChange={this.inputChange}
                    />
                    <button className="search-button" >Search</button>
                    <div>Suggestions for search: kayaking, twizzlers, six flags, jamba juice etc.</div>

                </form>
                <div 
                className="search-results">Search Results<br />
                    <div 
                    className="search-term" >
                    {this.state.searchTerm ? this.state.searchTerm : ''}
                    </div>
                    <a
                    className="search-url" 
                    href={this.state.searchUrl} >
                    {this.state.searchUrl ? this.state.searchUrl : ''}
                    </a>
                    {this.state.searchImage.length > 0 ? 
                        <img src={this.state.searchImage} 
                        className="search-image"
                        alt="No image found for this search"
                        height="200" />
                        : ''}
                </div>
            </div>
        );
    }

}

export default Search;