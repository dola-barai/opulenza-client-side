import React, { useState } from "react";

import "./Contact.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "", // Add subject field
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to a server)
        console.log(formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-cover bg-center bg-no-repeat  shadow-2xl border rounded-lg p-4 md:p-8 lg:p-12 w-full max-w-xl  bg-white bg-opacity-20">
                <h2 className="text-3xl font-extrabold text-black mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="label-text font-primary text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border-lg  focus:outline-4 focus:ring focus:border-blue-500 text-lg text-gray-950"
                            required
                        />
                    </div>
                    <div>
                        <label className="label-text font-primary text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border focus:outline-4 focus:ring focus:border-blue-500 text-lg text-gray-950"
                            required
                        />
                    </div>
                    <div>
                        <label className="label-text font-primary text-white">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border focus:outline-4 focus:ring focus:border-blue-500 text-lg text-gray-950"
                            required
                        />
                    </div>
                    <div>
                        <label className="label-text font-primary text-white">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 rounded-lg bg-opacity-10 border focus:outline-4 focus:ring focus:border-blue-500 text-lg text-gray-950"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-6 py-3 border focus:outline-4 rounded-lg hover:bg-gray-500 transition duration-300 text-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;