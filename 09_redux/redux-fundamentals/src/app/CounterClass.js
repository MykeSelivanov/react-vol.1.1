import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
class CounterClass extends Component {
    render() {
        console.log(this.props);
        const { count, myincrement, mydecrement } = this.props;
        return (
            <div className="container">
                <h1>Redux Class Component Example - Counter</h1>
                <div className="counter">
                    <h2>{count}</h2>
                    <button onClick={() => myincrement(count)}>Increment</button>
                    <button onClick={() => mydecrement(count)}>Decrement</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // bringing a state from redux
    return {
        count: state.count,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        myincrement: (count) => dispatch(increment(count)),
        mydecrement: (count) => dispatch(decrement(count))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);

// currying
// function a(c, d){

// }

// function a(c) {
//     function b(d)
// }
