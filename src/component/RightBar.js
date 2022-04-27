import './RightBar.css';
import { Component } from 'react';
import Row from './Row';

export class RightBar extends Component {
    render () {
        return (
            <div className='RightBar'>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </div>
        );
    }
}