import "./Footer.css";

const Footer = ({}) => {

    return (
        <footer>
            &copy; Danny Hook {(new Date().getFullYear())} | <a href="https://github.com/MostLikelyNotHuman/u2-rebuild"> Website source code</a>
        </footer>
    )
}

export default Footer;