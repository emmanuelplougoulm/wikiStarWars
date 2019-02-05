import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, incrementCounterByNumber, decrementCounterByNumber } from '../store/counter/actionsCreator'

class Redux extends Component {
    // incrementCounter = () => this.setState(state => ({ counter: state.counter + 1 }));
    // incrementCounterByNumber = number => this.setState(state => ({ counter: state.counter + number }));
    // decrementCounter = () => this.setState(state => ({ counter: state.counter - 1 }));
    // decrementCounterByNumber = number => this.setState(state => ({ counter: state.counter - number }));

    render() {
        const { counter } = this.props;
        return (
            <div>
                <div>REDUX</div>
                <div>COUNTER : {counter}</div>
                <button onClick={this.props.incrementCounter}>+1</button>
                <button onClick={this.props.incrementCounterByNumber}>+X</button>
                <button onClick={this.props.decrementCounter}>-1</button>
                <button onClick={this.props.decrementCounterByNumber}>-X</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter()),
    incrementCounterByNumber: () => dispatch(incrementCounterByNumber(3)),
    decrementCounterByNumber: () => dispatch(decrementCounterByNumber(3)),
});





export default connect(mapStateToProps, mapDispatchToProps)(Redux);