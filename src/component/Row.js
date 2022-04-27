import { Component } from 'react';
import './Row.css';

export default class Row extends Component {
    render() {
        return (
            <div className='Row'>
                {this.props.children}
            </div>
        );
    }
}