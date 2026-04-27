import { Link } from "react-router";
import Button from "./Button";

const HomeBox = ({ title, body, buttons }) => {

    {console.log(buttons)};

    return (
        <div id="home-box">
            <h3 id="home-box-title">{title}</h3>
            <p id="home-box-body">{body}</p>
            {buttons ? 
                <div id="home-box-buttons">
                    {buttons.map(({ id, text, onClick, linkTo }) => {
                        return (
                            <Link to={linkTo}>
                                <Button 
                                    id={id}
                                    text={text}
                                    onClick={onClick}                
                                />
                            </Link>
                        )
                    })}
                </div>
            : 
                <>
                </>
            }
        </div>
    );
}

export default HomeBox;