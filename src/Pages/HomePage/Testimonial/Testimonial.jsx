import React from 'react';

const Testimonial = () => {
    return (
        <section className="bg-gray-100 ">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="card p-8 shadow-lg bg-white rounded-lg">
                        <div className="flex items-center mb-4">
                            <img  className="w-12 h-12 rounded-full mr-4"
                                src="path_to_avatar_image"
                                alt="Testimonial Avatar"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">John Doe</h3>
                                <p className="text-gray-500">CEO, Company Name</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        </p>
                    </div>
                    <div className="card p-8 shadow-lg bg-white rounded-lg">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-12 h-12 rounded-full mr-4"
                                src="path_to_avatar_image"
                                alt="Testimonial Avatar"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Jane Smith</h3>
                                <p className="text-gray-500">CTO, Company Name</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
