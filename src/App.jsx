import AOS from "aos";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import PricingPage from "./pages/pricing";
import ContactPage from "./pages/contact";
import ProjectPage from "./pages/project";
import ProjectDetails from "./templates/project-details";
import BlogDetails from "./templates/blog-details";
import BlogCategory from "./templates/blog-category";
import BlogDate from "./templates/blog-date";
import BlogAuthor from "./templates/blog-author";
import BlogTag from "./templates/blog-tag";
import BlogPage from "./pages/blog";
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
                        path={`${process.env.PUBLIC_URL + "/pricing"}`}
                        component={PricingPage}
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
                        path={`${process.env.PUBLIC_URL + "/blog"}`}
                        component={BlogPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
                        component={BlogDetails}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
                        component={BlogCategory}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/date/:date"}`}
                        component={BlogDate}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/author/:author"}`}
                        component={BlogAuthor}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/tag/:slug"}`}
                        component={BlogTag}
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
