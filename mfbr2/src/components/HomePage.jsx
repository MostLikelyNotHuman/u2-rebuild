import { intervals } from "../assets/intervals";
import { notes } from "../assets/notes";
import Divider from "./basic/Divider";
import HomeBox from "./basic/HomeBox";
import "./HomePage.css";

const HomePage = () => {

    const buttons = [
        {
            id: 1,
            text: "Notes",
            linkTo: "/practice-notes"
        },
        {
            id: 2,
            text: "Intervals",
            linkTo: "/practice-intervals"
        }
    ];

    return (
        <main className="homePage-main">
            <div id="homePage-intro">
                <h2>Welcome to Music for Beginners!</h2>
                <p>Music For Beginners is an app designed to teach you the very basics 
                    of reading music. Here you'll find exercises to strengthen your ability 
                    to identify notes and intervals on the staff, with the goal of creating a solid 
                    foundation of skills for you to build on in the future!
                </p>
            </div>
            <Divider className={'homePage-horizontalDivider'}/>
            <div id="homePage-startBox">
                <HomeBox 
                    title={"Ready to get Started?"}
                    body={"Select any of the practices below.\n\nNote: All practices can also be accessed through the navigation bar at the top of the page."}
                    buttons={buttons}
                />
            </div>
            <Divider className={'homePage-horizontalDivider'}/>
        </main>
    );
}

export default HomePage;