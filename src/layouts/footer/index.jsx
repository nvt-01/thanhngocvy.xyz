const Footer = () => {
    return (
        <div className="section bg-dark">
            <div className="footer-container">
                <div className="footer-info-box text-center">
                    <h4 className="footer-title">Let’s work together</h4>
                    <h2 className="mail">
                        <a href="mailto:hello@thanhngocvy.xyz">
                            hello@thanhngocvy.xyz
                        </a>
                    </h2>
                </div>

                <div className="footer-copyright-social">
                    <div className="footer-copyright">
                        <p>&copy; 2022 Ngoc Vy Thanh</p>
                    </div>
                    <div className="footer-social">
                        <ul className="social">
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="facebook"
                                    href="https://www.facebook.com/ngocvy.thanh"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="behance"
                                    href="https://www.behance.net/ngcvythnh"
                                >
                                    Behance
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
