import { Component } from "react";
import Contacts from "./Contacts";
import './LeftBar.css';
import Profile from "./Profile";

export class LeftBar extends Component {
    render() {
        return (
            <div className="LeftBar">
                <Profile></Profile>
                <Contacts></Contacts>
            </div>
        );
    }
}