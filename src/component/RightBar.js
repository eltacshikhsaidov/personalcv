import './RightBar.css';
import { Component } from 'react';
import Row from './Row';

export class RightBar extends Component {
    render () {
        return (
            <div className='RightBar'>
                <Row>
                    <div className='Experience'>
                        <h1>Experience</h1>
                        <hr></hr>
                        <div className='WorkPlaces'>
                            <ul>
                                <li>Starex (2017-2018) - Team Lead</li>
                                <li>HackLab (2016-2017) - Middle Developer</li>
                                <li>Frazex (2015-2016) - Middle Developer</li>
                                <li>Cybernet (2014-2015) - Junior Developer</li>
                            </ul>
                        </div>
                    </div>
                </Row>
                <Row>
                    <h1>Courses and Certificates</h1>
                    <hr></hr>
                    <div className='Courses'>
                        <ul>
                            <li>Complete web development - Udemy</li>
                            <li>ReactJS Intermediate - Scrimba</li>
                            <li>Java BootCamp - Ingress Academy</li>
                            <li>Advanced NodeJS - TechAcademy</li>
                        </ul>
                    </div>
                </Row>
                <Row>
                    <h1>Skills</h1>
                    <hr></hr>
                    <div className='Skills'>
                        <ul>
                            <li>JavaScript - Advanced</li>
                            <li>ReactJS - Intermediate</li>
                            <li>NodeJS - Intermediate</li>
                            <li>Java - Advanced</li>
                        </ul>
                    </div>
                </Row>
                <Row>
                    <h1>Projects</h1>
                    <hr></hr>
                    <div className='Projects'>
                        <ul>
                            <li>SmartPay - <a href='#'>smartpay.az</a></li>
                            <li>SubLMS - <a href='#'>sublms.org</a></li>
                            <li>Polextron - <a href='#'>ploextron.io</a></li>
                            <li>Grantsolutions - <a href='#'>grantsolutions.com</a></li>
                        </ul>
                    </div>
                </Row>
            </div>
        );
    }
}