import "./Footer.css";
import CompanyLogo from "../../../assets/playa_logo_black.png";

function Footer() {
    return (
        <div id="footer" className="container landing-content__footer">
            <img src={CompanyLogo} alt="company logo"/>
            <p>©2021 by Playa</p>
        </div>
    )
}

export default Footer;