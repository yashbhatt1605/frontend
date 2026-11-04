
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        { name: "Facebook", Icon: FaFacebookF },
        { name: "Instagram", Icon: FaInstagram },
        { name: "Twitter", Icon: FaTwitter },
        { name: "YouTube", Icon: FaYoutube },
    ];

    return (
        <footer className="bg-gray-950 text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="text-yellow-400">Car</span>Xpress
                        </h2>
                        <p className="text-gray-400 leading-7">
                            India's premium destination for luxury cars,
                            superbikes and electric vehicles.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {socialLinks.map(({ name, Icon }) => (
                                <button
                                    key={name}
                                    type="button"
                                    aria-label={name}
                                    title={`${name} profile coming soon`}
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center"
                                >
                                    <Icon />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-yellow-400 mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            {[
                                ["Home", "/home"],
                                ["Cars", "/cars"],
                                ["Bikes", "/bikes"],
                                ["About", "/about"],
                                ["Contact", "/contact"],
                            ].map(([label, path]) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className="hover:text-yellow-400"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-yellow-400 mb-5">
                            Services
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>Luxury Cars</li>
                            <li>Super Bikes</li>
                            <li>Electric Vehicles</li>
                            <li>Finance</li>
                            <li>Insurance</li>
                            <li>Test Drive Booking</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-yellow-400 mb-5">
                            Contact
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-yellow-400" />
                                <span>Surendranagar, Gujarat</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-yellow-400" />
                                <span>+91 9876543210</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-yellow-400" />
                                <span>support@carxpress.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
                    © {new Date().getFullYear()} CarXpress. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
