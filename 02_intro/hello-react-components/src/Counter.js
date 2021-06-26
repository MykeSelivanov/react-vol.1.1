// class component
import { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 2 };
        // required
        // this.handleCLick = this.handleCLick.bind(this);
    }

    // you need to bind when using regular function syntax - uncomment binding above
    // handleCLick() {
    //     // function has it's own 'this'
    //     this.setState({ count: this.state.count + 1 });
    // }

    // you don't need to bind, when using arrow function
    handleClickArrow = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.handleClickArrow}>Increase</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Counter;