import React, { useState } from "react";
import SectionTitle from "../../../components/section-title";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const FaqContainer = () => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <div className="section section-padding mt-n1 mb-n1">
            <div className="container">
                <SectionTitle classOption="section-title-2" title="Faq's" />

                <div className="faq-wrapper">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="faq-menu">
                                <Nav tabs className="nav flex-column">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === "1",
                                            })}
                                            onClick={() => {
                                                toggle("1");
                                            }}
                                        >
                                            General
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === "2",
                                            })}
                                            onClick={() => {
                                                toggle("2");
                                            }}
                                        >
                                            Payment
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === "3",
                                            })}
                                            onClick={() => {
                                                toggle("3");
                                            }}
                                        >
                                            Support
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === "4",
                                            })}
                                            onClick={() => {
                                                toggle("4");
                                            }}
                                        >
                                            Return
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <div className="single-faq">
                                        <h4 className="title">
                                            How many landing page I can work
                                            with your product?
                                        </h4>
                                        <p>
                                            You can use our themes on as many
                                            site you want. Our theme is 100% GPL
                                            &amp; there is not domain
                                            restriction. You will receive
                                            support for the given domain amount.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            Can I use your product for my
                                            client?
                                        </h4>
                                        <p>
                                            Yes, you can. You can work with any
                                            type of project without taking our
                                            permission.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            What happens after my subscription
                                            runs out?
                                        </h4>
                                        <p>
                                            For Template Plans: After your
                                            subscription expires, you can still
                                            keep using the products you have
                                            downloaded from our site. But
                                            without an active subscription, you
                                            will NOT get updates and technical
                                            support from us.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            Will Edward oroducts slow down my
                                            website?
                                        </h4>
                                        <p>
                                            No, absolutely not. We are very
                                            obsessed about speed and
                                            optimization is not after thought
                                            for us. We made sure that the
                                            designs are almost exclusively CSS,
                                            so that no images need to be loaded.
                                            We also optimized all the code for
                                            the fastest possible loading times.​
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="single-faq">
                                        <h4 className="title">
                                            How many landing page I can work
                                            with your product?
                                        </h4>
                                        <p>
                                            You can use our themes on as many
                                            site you want. Our theme is 100% GPL
                                            & there is not domain restriction.
                                            You will receive support for the
                                            given domain amount.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            Can I use your product for my
                                            client?
                                        </h4>
                                        <p>
                                            Yes, you can. You can work with any
                                            type of project without taking our
                                            permission.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            What happens after my subscription
                                            runs out?
                                        </h4>
                                        <p>
                                            For Template Plans: After your
                                            subscription expires, you can still
                                            keep using the products you have
                                            downloaded from our site. But
                                            without an active subscription, you
                                            will NOT get updates and technical
                                            support from us.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            Will Edward oroducts slow down my
                                            website?
                                        </h4>
                                        <p>
                                            No, absolutely not. We are very
                                            obsessed about speed and
                                            optimization is not after thought
                                            for us. We made sure that the
                                            designs are almost exclusively CSS,
                                            so that no images need to be loaded.
                                            We also optimized all the code for
                                            the fastest possible loading times.​
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                    <div className="single-faq">
                                        <h4 className="title">
                                            How many landing page I can work
                                            with your product?
                                        </h4>
                                        <p>
                                            You can use our themes on as many
                                            site you want. Our theme is 100% GPL
                                            & there is not domain restriction.
                                            You will receive support for the
                                            given domain amount.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            Can I use your product for my
                                            client?
                                        </h4>
                                        <p>
                                            Yes, you can. You can work with any
                                            type of project without taking our
                                            permission.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            What happens after my subscription
                                            runs out?
                                        </h4>
                                        <p>
                                            For Template Plans: After your
                                            subscription expires, you can still
                                            keep using the products you have
                                            downloaded from our site. But
                                            without an active subscription, you
                                            will NOT get updates and technical
                                            support from us.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            Will Edward oroducts slow down my
                                            website?
                                        </h4>
                                        <p>
                                            No, absolutely not. We are very
                                            obsessed about speed and
                                            optimization is not after thought
                                            for us. We made sure that the
                                            designs are almost exclusively CSS,
                                            so that no images need to be loaded.
                                            We also optimized all the code for
                                            the fastest possible loading times.​
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tabId="4">
                                    <div className="single-faq">
                                        <h4 className="title">
                                            How many landing page I can work
                                            with your product?
                                        </h4>
                                        <p>
                                            You can use our themes on as many
                                            site you want. Our theme is 100% GPL
                                            & there is not domain restriction.
                                            You will receive support for the
                                            given domain amount.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            Can I use your product for my
                                            client?
                                        </h4>
                                        <p>
                                            Yes, you can. You can work with any
                                            type of project without taking our
                                            permission.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            What happens after my subscription
                                            runs out?
                                        </h4>
                                        <p>
                                            For Template Plans: After your
                                            subscription expires, you can still
                                            keep using the products you have
                                            downloaded from our site. But
                                            without an active subscription, you
                                            will NOT get updates and technical
                                            support from us.
                                        </p>
                                    </div>

                                    <div className="single-faq">
                                        <h4 className="title">
                                            Will Edward oroducts slow down my
                                            website?
                                        </h4>
                                        <p>
                                            No, absolutely not. We are very
                                            obsessed about speed and
                                            optimization is not after thought
                                            for us. We made sure that the
                                            designs are almost exclusively CSS,
                                            so that no images need to be loaded.
                                            We also optimized all the code for
                                            the fastest possible loading times.​
                                        </p>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqContainer;
