import React from 'react';
// 2 rules of creating class components:
// 1. Extending React.Component
// 2. render()

class ClassComponent extends React.Component {
    // constructor is optional
    // constructor() {
    //     super()
    // }

    render() {
        console.log(`props from classComponent`, this.props);
        return (
            <div>
             <h1>Hello from Class Component!</h1>
             <h2>Message: {this.props.message}</h2>
             </div>
        )
    }
}

export default ClassComponent;