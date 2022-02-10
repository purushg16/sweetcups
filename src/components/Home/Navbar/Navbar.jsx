import React from "react";
import "./navbar.css";
import logo from "./logo1.png";

export default class Navbar extends React.Component {

    componentDidMount() {
        const Ulkitscript1 = document.createElement("script");
        Ulkitscript1.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js";
        Ulkitscript1.async = true;

        const Ulkitscript2 = document.createElement("script");
        Ulkitscript2.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js";
        Ulkitscript2.async = true;

        document.body.appendChild(Ulkitscript1);
        document.body.appendChild(Ulkitscript2);

    }

    render() {

        return (
            <section id="nav-section">

                    <div id="uk-top">

                        <div className="uk-card nav-card uk-card-body uk-width-1-2@m">
                            <h3 className="uk-card-title brand-title">  <a id="brand" href="/"> <img alt="" src={logo} /> Sweetcups Bangalore </a> </h3>
                            <div className="uk-width-1-2@m uk-text-center nav-link-section">

                                <ul className="nav-ul">
                                    <li><a href="#feature-section"> About </a></li>
                                    <li><a href="#contact-section"> Contact </a></li>
                                    <li><a href="#items-section"> Services </a></li>
                                    <li><a href="#gallery-section"> Gallery </a></li>
                                </ul>
                                
                            </div>
                        </div>

                        <div className="uk-card vr-card uk-card-body">
                            <h3 className="uk-card-title vr-title"> Wanna See Us ? </h3>
                            <p className="vr-desc"> Click here to Experience Virtual Reality Based cake shop </p>
                            <a href="http://ivandayas.tiiny.site" target='_blank'> <button className="uk-button vr-button"> Visit Us </button> </a>
                        </div>


                    </div>

                <div className="background-img">  </div>

            </section>
        )

    }

};