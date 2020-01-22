// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>testasd1</h1>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 1
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {

        this.setState({ date: new Date() })

        this.setState((state, props) => ({ count: state.count + 1 }))
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);