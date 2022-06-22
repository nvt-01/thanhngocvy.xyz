const Footer = () => {
    return (
        <div className="section bg-dark">
            <div className="container">
                <div className="footer-info-box text-center">
                    <h4 className="title">Let’s work together</h4>
                    <h2 className="mail">
                        <a href="mailto:hello@thanhngocvy.xyz">
                            hello@thanhngocvy.xyz
                        </a>
                    </h2>
                </div>

                <div className="footer-copyright-social">
                    <div className="footer-copyright">
                        <p>
                            &copy; 2022 <span> Ngoc Vy Thanh</span>
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
                                    Facebook
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
