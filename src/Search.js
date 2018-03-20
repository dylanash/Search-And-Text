import React, {Component} from 'react';
import keys from '../keys';
// import Bing from 'node-bing-api';
// var Bing = require('bing-search-api');
// import grabber from 'bing-grabber';
import axios from 'axios';

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
        // this.searchDuck = this.searchDuck.bind(this);
    }

    searchDuck(term) {
    
        axios.get(`https://api.duckduckgo.com/?q=${term}&format=json`)
        .then((res) => {
            console.log("RESSSS: ", res.data);
            if (res.data.Heading) {
                // let = theTerm = res.data.Heading;
                console.log("Term: ", res.data.AbstractURL)
                this.setState({searchTerm: res.data.Heading})
                this.setState({searchUrl: res.data.AbstractURL})
            }
        } )
        .catch((err) =>{
            console.error(err);
        } )

    }

    inputChange(event) {
        // event.preventDefault();
        this.setState({keyword: event.target.value});
    }

    handleSubmit(event) {
        // event.preventDefault();
        event.preventDefault();
        console.log("key", this.state.keyword);
        let keyword = this.state.keyword
        // console.log(this.state.keyword);
        // if (this.state.keyword.length > 0) {
            this.searchDuck(keyword);

        // }
        // this.setState({keyword:''});

    }

    componentDidMount() {

        // axios.get(`https://api.duckduckgo.com/?q=kayaking&format=json`)
        // .then((res) => {
        //     console.log("TEST: ", res.data);
        //     if (res.data.Heading) {
        //         // let = theTerm = res.data.Heading;
        //         console.log("Term: ", res.data.Heading)
        //         // this.setState({searchTerm:theTerm})
        //     }
        // } )
        // .catch((err) =>{
        //     console.error(err);
        // } )
    }


    render() {
        console.log("KEYS: ", keys.accKey);


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
                <div className="search-results">Search Results<br />
                    <span>{this.state.searchTerm ? this.state.searchTerm : ''}</span>
                    <span>{this.state.searchUrl ? this.state.searchUrl : ''}</span>
                </div>
            </div>
        );
    }

}

export default Search;