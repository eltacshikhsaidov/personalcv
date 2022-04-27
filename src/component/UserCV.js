import { Component } from "react";
import { LeftBar } from "./LeftBar";
import { RightBar } from "./RightBar";
import './UserCV.css';
export class UserCV extends Component {
    render() {
        return (
            <div className="UserCV">
                <LeftBar></LeftBar>
                <RightBar></RightBar>
            </div>
        );
    }
}