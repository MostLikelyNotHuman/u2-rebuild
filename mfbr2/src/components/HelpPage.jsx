import Divider from "./basic/Divider";
import "./HelpPage.css";

const HelpPage = () => {
    return (
        <main className="helpPage-main">
            <h3>About This App</h3>
                <p> Welcome to Music for Beginners! This application is designed for anyone 
                    who is a complete beginner to music, and aims to teach you the very basics of 
                    reading notes and rhythm. Located on the top bar or the home page are links 
                    to a variety of exercises to strengthen your reading skills. Currently, 
                    you can find exercises to test your ability to recognize notes and intervals.</p>
                <p> The goal is that you take the skills you learn here and go on to:</p>
                <ul>
                    <li>Read your favorite music!</li>
                    <li>Write your own music!</li>
                    <li>Transcribe your favorite songs!</li>
                    <li>And many more activities!</li>
                </ul>
                <p>This help page covers the things you'll need to know to interact with the different 
                    activities, but is by no means a complete overview of the basics of reading music. 
                    Feel free to use whatever other resources you would like to help improve your skills!</p>
            <Divider />
            <h3>Notes</h3>
                <p>Notes are arranged on something called a <strong>staff</strong>, which is this set of horizontal
                    lines.</p>
                        {/* TODO: clean up and import images*/}
                <p>Each line and space on the staff represents a different pitch.
                    A common way to remember where each note goes is to use the mnemonic
                    'Every Good Boy Deserves Fudge' for the lines E G B D F, and
                    the word FACE for the spaces F A C and E.</p>
                        {/* TODO: clean up and import images*/}
                <p>The exercises here use two additional notes that sit just below the staff, C and D.</p>
                        {/* TODO: clean up and import images*/}
                <p>Maybe you've noticed - the notes start over at A after G! The system only 
                    uses the first seven letters of the alphabet to identify notes. However, there are more 
                    than seven notes - there are actually twelve! Each of these notes can be modified in pitch 
                    by placing something called an <strong>accidental</strong> before it. These are 
                    called <strong>Sharps (♯)</strong> and <strong>Flats (♭)</strong>, and represent a slightly 
                    higher or lower pitch, respectively.</p>
                <table>
                    <tbody>
                        <tr>
                            {/* TODO: import images and fill out table*/}
                        </tr>
                    </tbody>
                </table>
            <Divider />
            <h3>Intervals</h3>
                <p>The word 'interval' refers to the distance in pitch between two notes.
                    The smallest distance between two notes in western music is called a <strong>half-step</strong> or a <strong>semitone</strong>. 
                    This is the distance between G and G♯ or B and B♭, for instance.</p>
                <p>{`An oddity to keep in mind with this system is that, while most of the notes on the staff above are separated 
                    by two half steps (A -> A♯ -> B), this does not hold for the spaces between B and C and 
                    between E and F. These two sets of notes are only a half step apart. While an E can have a sharp 
                    accidental, an E♯ and an F are the same pitch!`}
                </p>
                <p>Every interval has its own unique name. The following are the ones you'll need to know 
                for the exercises here.</p>
                <table id='interval-table'>
                    <thead>
                        <tr>
                            <th>Interval</th>
                            <th>Distance in Half Steps</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* TODO: import images and fill out table*/}
                    </tbody>
                </table>
            <Divider />
            <h3>Rhythm</h3>
                <p>Notes placed on a staff don't just tell you their pitch, they also tell you their rhythm.
                    You've seen <strong>Quarter Notes</strong> and <strong>Whole Notes</strong> used in the examples 
                    above, but there are many more. A whole note represents four beats, a half note represents 
                    two beats, a quarter note represents a single beat, and so on.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Beats</th>
                            <th>Note ...</th>
                            <th>is equal in duration to:</th>
                        </tr>
                    </thead>  
                    <tbody>
                        {/* <img src={}*/}
                    </tbody>  
                </table>
                    <p>Theoretically this continues on forever, but notes with a shorter duration are less common.</p>
                   
        
        
        </main>
    )
}

export default HelpPage;