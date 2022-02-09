
import "./Contact.css";
import logo from "./logo2.png";

function Contact() {

    return (
        <section id="contact-section">

            <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-center" uk-grid='true'>
                <div>
                    <div>
                        <div class="uk-card uk-card-contact uk-card-body">
                            <h2 class="contact-title"> Contact Us </h2>

                            <div class="uk-width-1-1@s uk-width-2-1@m uk-width-2-1@l">

                                <ul class="uk-nav-default uk-nav-parent-icon" uk-nav='true'>
                                    <li className="contact-li" > <a><span class="uk-margin-small-right" uk-icon="icon: receiver"></span> +91­82172 61791  </a></li>
                                    <li className="contact-li" > <a><span class="uk-margin-small-right" uk-icon="icon: location"></span> mail@mail.com </a></li>
                                    <li className="contact-li" > <a><span class="uk-margin-small-right" uk-icon="icon: mail"></span> <span>Jayanagar, Bangalore</span> </a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="uk-card uk-card-contact-2 uk-card-body">
                            <img src={logo} alt="" id='logo' />
                            <h2 class="contact-title logo-name"> Sweetcups Bangalore </h2>
                            <p> Since 2002 </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}


export default Contact;