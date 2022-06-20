const Footer = () => {
    return (
        <div className="section bg-dark">
            <div className="container">
                <div className="footer-info-box text-center">
                    <h4 className="title">Let’s work together</h4>
                    <h2 className="mail">
                        <a href="mailto:someone@example.com">hello@andle.com</a>
                    </h2>
                </div>

                <div className="footer-copyright-social">
                    <div className="footer-copyright">
                        <p>
                            &copy; 2021 <span> Andle</span> Made with{" "}
                            <i className="icofont-heart" aria-hidden="true"></i>{" "}
                            by{" "}
                            <a
                                href="https://hasthemes.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                HasThemes
                            </a>
                        </p>
                    </div>
                    <div className="footer-social">
                        <ul className="social">
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="twitter"
                                    href="https://twitter.com/"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="behance"
                                    href="https://www.behance.net/"
                                >
                                    Behance
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="dribbble"
                                    href="https://dribbble.com/"
                                >
                                    Dribbble
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="github"
                                    href="https://github.com/"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
