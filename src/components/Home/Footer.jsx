import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm items-center text-center md:text-left">
                
                <div className="space-y-4">
                    <h2 className="text-2xl font-black tracking-tight text-gray-900">
                        <span className="text-primary font-black">HeroRide</span>
                    </h2>
                    <p className="text-gray-500 leading-relaxed max-w-xs">
                        Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.
                    </p>
                    <div className="space-y-3 pt-2 text-gray-700 font-medium flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-gray-900" size={14} />
                            <span>(123) 498-4600</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-gray-900" size={14} />
                            <a href="mailto:example@carrental.com" className="hover:underline">
                                example@carrental.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold tracking-wider uppercase text-gray-900">
                        Company
                    </h3>
                    <ul className="space-y-2.5 font-medium text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">New York</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Mobile</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">How we work</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold tracking-wider uppercase text-gray-900">
                        Working Hours
                    </h3>
                    <div className="space-y-2.5 text-gray-600 font-medium">
                        <p>
                            <span className="text-gray-400 mr-1">Mon - Fri:</span> 
                            <span className="text-gray-900 font-semibold">09:00AM - 09:00PM</span>
                        </p>
                        <p>
                            <span className="text-gray-400 mr-1">Sat:</span> 
                            <span className="text-gray-900 font-semibold">09:00AM - 07:00PM</span>
                        </p>
                        <p>
                            <span className="text-gray-400 mr-1">Sun:</span> 
                            <span className="text-gray-900 font-semibold">Closed</span>
                        </p>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 font-medium text-xs text-center">
                <p>© {new Date().getFullYear()} <span className="text-gray-900 font-bold">HeroRide</span>. All Rights Reserved</p>

                <div className="flex items-center gap-6 text-gray-700">
                    <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                        <FaFacebookF size={14} />
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                        <FaTwitter size={14} />
                    </a>
                    <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
                        <FaYoutube size={14} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;