import  {Component} from 'react';
import './Profile.css';

export default class Profile extends Component {
    render() {
        return (
            <div className='Profile'>
                <img src='https://images.generated.photos/rpVU51nHWMtbdMqEZRyNGBg-eRtKrAmRTmEcC_w6s5E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzY1MjA5LmpwZw.jpg' alt='Profile image'></img>
                <div className='FullName'>
                    <h1>Thomas Johnson</h1>
                    <hr></hr>
                    <div className='PersonalInfo'>
                        <h3>About me</h3>
                        <p>
                           I was a web developer in <span>Starex</span>,<br></br>
                           since first year of university I started to work in 
                           various companies and now my position is Team Leader.
                           <br></br>
                            My hobbies are: reading books, doing sport, fishing and so on
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}