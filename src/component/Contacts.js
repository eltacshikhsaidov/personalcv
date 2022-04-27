import { Component } from "react";
import './Contacts.css';

export default class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                    <h2>Contacts</h2>
                    <hr></hr>
                    <ul>
                        <li>Email: <a href="/email">thomas@starex.az</a></li>
                        <li>Github: <a href="/github">@thomasDev</a></li>
                        <li>Facebook <a href="/facebook">@jhonson</a></li>
                        <li>Twitter: <a href="/twitter">@thomasjohnson</a></li>
                        <li>Telegram: <a href="/telegram">@thoms99</a></li>
                        <li>Whatsapp: <a href="/whatsapp">follow link</a></li>
                        <li>Stackoverflow: <a href="/stackoverflow">@thmsjhnsn</a></li>
                    </ul>
            </div>
        );
    }
}