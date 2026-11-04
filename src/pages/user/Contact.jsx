const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

            <h1 className="text-5xl font-bold mb-10">
                Contact Us
            </h1>

            <div className="grid md:grid-cols-2 gap-12">

                <div>

                    <h2 className="text-3xl font-semibold">
                        Get in Touch
                    </h2>

                    <p className="mt-6 text-gray-600">
                        Email :
                        support@carxpress.com
                    </p>

                    <p className="mt-3 text-gray-600">
                        Phone :
                        +91 9876543210
                    </p>

                    <p className="mt-3 text-gray-600">
                        Ahmedabad, Gujarat
                    </p>

                </div>

                <form className="space-y-5">

                    <input
                        className="w-full border rounded-xl p-4"
                        placeholder="Name"
                    />

                    <input
                        className="w-full border rounded-xl p-4"
                        placeholder="Email"
                    />

                    <textarea
                        rows="6"
                        className="w-full border rounded-xl p-4"
                        placeholder="Message"
                    />

                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl">
                        Send Message
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Contact;