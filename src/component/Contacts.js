import { Component } from "react";
import './Contacts.css';

export default class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                    <h2>Contacts</h2>
                    <hr></hr>
                    <ul>
                        <li>Email: <a>thomas@starex.az</a></li>
                        <li>Github: <a>@thomasDev</a></li>
                        <li>Facebook <a>@jhonson</a></li>
                        <li>Twitter: <a>@thomasjohnson</a></li>
                        <li>Telegram: <a>@thoms99</a></li>
                        <li>Whatsapp: <a>follow link</a></li>
                        <li>Stackoverflow: <a>@thmsjhnsn</a></li>
                    </ul>
            </div>
        );
    }
}