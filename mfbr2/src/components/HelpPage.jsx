import Divider from "./basic/Divider";
import Button from "./basic/Button";
import { intervals } from "../assets/intervals";
import "./HelpPage.css";

import staff from "../assets/images/help-page/staff.png";
import allNotes from "../assets/images/help-page/all_notes.png";
import extraNotes from "../assets/images/help-page/extra_notes.png";
import flatSymbol from "../assets/images/help-page/flat.png";
import sharpSymbol from "../assets/images/help-page/sharp.png";

const HelpPage = () => {
    return (
        <main className="helpPage-main">
            <div id="helpPage-about">
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
            </div>
            <Divider />
            <div id="helpPage-notes">
                <h3>Notes</h3>
                    <p>Notes are arranged on something called a <strong>staff</strong>, which is this set of horizontal
                        lines.</p>
                            <img src={staff} width={400} alt='A blank musical staff, with five lines and four spaces.'></img>
                    <p>Each line and space on the staff represents a different pitch.
                        A common way to remember where each note goes is to use the mnemonic
                        'Every Good Boy Deserves Fudge' for the lines E G B D F, and
                        the word FACE for the spaces F A C and E.</p>
                            <img src={allNotes} width={400} alt='The notes E through F, spanning the staff.'></img>
                    <p>The exercises here use two additional notes that sit just below the staff, C and D.</p>
                            <img src={extraNotes} width={150} alt='The notes C and D, just below the staff.'></img>
                    <p>Maybe you've noticed - the notes start over at A after G! The system only 
                        uses the first seven letters of the alphabet to identify notes. However, there are more 
                        than seven notes - there are actually twelve! Each of these notes can be modified in pitch 
                        by placing something called an <strong>accidental</strong> before it. These are 
                        called <strong>Sharps (♯)</strong> and <strong>Flats (♭)</strong>, and represent a slightly 
                        higher or lower pitch, respectively.</p>
                    <table>
                        <tbody>
                            <tr>
                                <td width={100}><img src={sharpSymbol} alt='The musical sharp symbol.'></img>Sharp symbol</td>
                                <td width={100}><img src={flatSymbol} alt='The musical flat symbol.'></img>Flat symbol</td>
                            </tr>
                        </tbody>
                    </table>    
            </div>
            <Divider />
            <div id="helpPage-intervals">
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
                        {console.log(intervals)}
                        {intervals.map(interval => {
                            return (
                                <tr>
                                    <th>{interval.name}</th>
                                    <th>{interval.size}</th>
                                    <th>
                                        <img src={interval.image.link} alt={interval.image.alt}></img>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Divider />
        </main>
    )
}

export default HelpPage;