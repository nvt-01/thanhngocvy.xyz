import AOS from "aos";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ProjectPage from "./pages/project";
import ProjectDetails from "./templates/project-details";
//CSS File Here
import "./assets/css/plugins/fontawesome.min.css";
import "./assets/css/plugins/icofont.min.css";
import "aos/dist/aos.css";
import "./assets/css/plugins/animate.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./assets/scss/style.scss";
import NavScrollTop from "./components/nav-scroll-top";

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: "ease",
        });
        AOS.refresh();
    }, []);
    return (
        <Router>
            <NavScrollTop>
                <Switch>
                    <Route
                        path={`${process.env.PUBLIC_URL + "/"}`}
                        exact
                        component={HomePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/about"}`}
                        component={AboutPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/project"}`}
                        component={ProjectPage}
                    />
                    <Route
                        path={`${
                            process.env.PUBLIC_URL + "/project-detalis/:id"
                        }`}
                        component={ProjectDetails}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/contact"}`}
                        component={ContactPage}
                    />
                </Switch>
            </NavScrollTop>
        </Router>
    );
};

export default App;
