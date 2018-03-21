import React, {Component} from 'react';

/*
Takes in two peices of text and compares them with three different sets of parameters
Note: text must be input with new-lines or will all be considered one text segment
Text from the right-side is compared to text on the left-side
- Mode 1 - Returns exact line matches between L & R
- Mode 2 - Returns partial matches between L & R
- Mode 3 - Returns lines that are exactly the same or different by 1-character
*/

class TextCompare extends Component {
    constructor() {
        super();
        this.state = {
            fieldA: '',
            fieldB: '',
            modeX: [],
            modeY: [],
            modeZ: []
        }; 
        this.textInputChange = this.textInputChange.bind(this);
        this.handleCompare = this.handleCompare.bind(this);
    }
    // return lines from A that exactly match B
    mode1 (arr1, arr2) {
        let res = [];
        arr1.forEach( lineA => {
            arr2.forEach(lineB => {
                if (lineA === lineB && !res.includes(lineA)) {
                    res.push(lineA);
                }
            })
        })
        this.setState({modeX: res}, function() {
        })
    }
    // returns partial matches from A & B
    mode2 (arr1, arr2) {
        let res = [];
        arr1.forEach( lineA => {
            arr2.forEach(lineB => {
                let aLength = lineA.length;
                let bLength = lineB.length;

                for (let i = 0; i < (aLength - bLength + 1) ; i++) {
                    if (lineB == lineA.slice(i, i+bLength) && !res.includes(lineA)) {
                        res.push(lineA);
                    }
                }
            })
        })
        this.setState({modeY: res});       
    }

    // returns exact matches and matches that differ by 1-letter
    mode3 (arr1, arr2) {
        let res = [];
        arr1.forEach( lineA => {
            arr2.forEach(lineB => {
                let bLength = lineB.length;

                if (lineA === lineB) {
                    res.push(lineA);
                }

                for (let k = 0; k < bLength ; k++) {
                    let tempB = lineB.slice(0,k)+lineB.slice(k+1);

                    if (tempB == lineA && !res.includes(lineA)) {
                        res.push(lineA);
                    }
                }
            })
        })
        this.setState({modeZ: res});  
    }

    textInputChange(event, field) {
        if(field === 'fieldA'){
            this.setState({
                fieldA: event
            })
        } else if (field === 'fieldB' ) {
            this.setState({
                fieldB: event
            })
        }
    }

    handleCompare(event) {
        event.preventDefault();
        let arrA = this.state.fieldA.split('\n');
        let arrB = this.state.fieldB.split('\n');

        this.mode1(arrA, arrB);
        this.mode2(arrA, arrB);
        this.mode3(arrA, arrB);
    }

    render() {
        return (
            <div>
                <h3>Compare Two Pieces Of Text</h3>
                <form className="compare-form" >
                    <div className="compare-wrapper" >
                        <div className="text-a-wrapper">
                            <textarea 
                                rows="10"
                                placeholder="Enter some text to compare. Use multiple lines."

                                className="text-a-input"
                                value={this.state.fieldA}
                                onChange={(event) => this.textInputChange(event.target.value, "fieldA")}
                            />
                        </div>
                        <div className="comparison" >
                            <button 
                                className="compare-button" 
                                onClick={this.handleCompare} >Compare Text Areas
                            </button>
                            <h4>Mode 1 - Direct Line Comparison</h4>
                            <div className="comp-x" >{this.state.modeX.map(x => {
                                return <div>{x}</div>
                                })}
                            </div>
                            <h4>Mode 2 - Comparing Line Segments</h4>
                            <div className="comp-y" >{this.state.modeY.map(y => {
                                return <div>{y}</div>
                                })}
                            </div>
                            <h4>Mode 3 - Comparing Segemnents With 1-letter Differences</h4>
                            <div className="comp-z" >{this.state.modeZ.map(z => {
                                return <div>{z}</div>
                                })}
                            </div>
                        </div>
                        <div className="text-b-wrapper">
                            <textarea
                                rows="10"
                                placeholder="Enter text lines to compare to the text in the left box."
                                className="text-b-input"
                                value={this.state.fieldB}
                                onChange={(event) => this.textInputChange(event.target.value, "fieldB")}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextCompare;