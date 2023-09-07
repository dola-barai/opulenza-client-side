import React from "react";
import BusinessCard from "./BusinessCard";
import ContactForm from "./ContactForm";
import HeaderForRoute from "../shared/HeaderForRoute";
import Footer from "../Home/Footer";


function Contact() {
    return (
        <div>
            <HeaderForRoute></HeaderForRoute>
            <div
                className="bg-slate-800 pt-28"
                style={{
                    backgroundColor: "transparent",
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="min-h-screen flex flex-col lg:flex-row">
                    {/* Left Part */}
                    <div className="lg:w-1/2 mt-16 lg:mt-0">
                        <div className="px-4">
                            <div className="mb-8">
                                <BusinessCard />
                            </div>
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="mt-4 lg:w-1/2">
                        <div className="min-h-screen ">
                            <div className="flex flex-col justify-center px-4 lg:px-16">
                                <div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Contact;