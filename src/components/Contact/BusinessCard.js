import React, { useEffect } from "react";

function BusinessCard() {
    useEffect(() => {
        // Initialize Google Map when the component mounts
        const initMap = () => {
            const myLatLng = { lat: 37.7749, lng: -122.4194 }; // Replace with your coordinates
            const map = new window.google.maps.Map(document.getElementById("map"), {
                center: myLatLng,
                zoom: 15,
            });
            new window.google.maps.Marker({
                position: myLatLng,
                map,
                title: "My Business Location",
            });
        };

        // Load the Google Maps API script
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            // Clean up the script element
            document.head.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="rounded-lg overflow-hidden border mt-10 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-28 max-w-xl mx-auto bg-white bg-opacity-20">
                <div className="px-5 py-5">
                    <div>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4267750191966!2d82.71184391467037!3d25.75646348363905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903a1891de5581%3A0xd77cd41dcc720301!2sPanchatiya%20Mosque!5e0!3m2!1sen!2sin'
                            width='100%'
                            height="250"
                            style={{ border: "1px solid black" }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                <div className="p-4">
                    <h2 className="text-2xl font-semibold text-black">
                        Contact Information
                    </h2>
                    <div className="flex items-center mt-4">
                        <svg
                            className="w-6 h-6 text-black mr-2"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                            <path d="M12 8v8l-4-4-2 2 6 6 8-8-2-2-4 4z"></path>
                        </svg>
                        <p className="text-black text-xl underline font-semibold hover:text-2xl">
                            123 Street Name, City
                        </p>
                    </div>
                    <div className="flex items-center mt-4">
                        <svg
                            className="w-6 h-6 text-black mr-2"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 10C22 16.5268 16.5268 22 10 22C3.47316 22 0 16.5268 0 10C0 3.47316 3.47316 0 10 0C16.5268 0 22 3.47316 22 10ZM2 10C2 15.5229 6.47715 20 12 20C17.5229 20 22 15.5229 22 10H2Z"></path>
                            <circle cx="12" cy="10" r="4"></circle>
                        </svg>
                        <p className="text-black text-xl font-semibold">
                            Email:{" "}
                            <a
                                href="mailto:abc@gmail.com"
                                className="text-black  underline hover:text-2xl"
                            >
                                abc@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center mt-4">
                        <svg
                            className="w-6 h-6 text-black mr-2"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 10C22 16.5268 16.5268 22 10 22C3.47316 22 0 16.5268 0 10C0 3.47316 3.47316 0 10 0C16.5268 0 22 3.47316 22 10ZM2 10C2 15.5229 6.47715 20 12 20C17.5229 20 22 15.5229 22 10H2Z"></path>
                            <path d="M15 8H19.4L23 12.6V18H1V6H23V11.4L18.4 6H15V8Z"></path>
                        </svg>
                        <p className="text-black text-xl font-semibold">
                            Phone:{" "}
                            <a
                                href="tel:(123) 456-7890"
                                className="text-black underline hover:text-2xl"
                            >
                                (123) 456-7890
                            </a>
                        </p>
                    </div>
                </div>
                {/* Place Order Button */}
            </div>
        </>
    );
}

export default BusinessCard;