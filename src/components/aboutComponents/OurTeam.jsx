'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function OurTeam() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
        })
    }, [])

    return (
        <section className="bg-[#1D293D] py-14">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FFDF20]">
                        Our Professional Team
                    </h2>
                    <p className="mt-3 text-gray-300 text-sm max-w-xl mx-auto">
                        Experienced professionals committed to operational excellence
                        and customer satisfaction.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                                alt="Muhammad Ali"
                                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-[#1D293D]">
                                Muhammad Ali
                            </h3>
                            <p className="text-xs font-medium text-[#FFDF20] mt-1">
                                Operations Manager
                            </p>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Ensures smooth operations and effective fleet coordination.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                                alt="Ahmed Khan"
                                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-[#1D293D]">
                                Ahmed Khan
                            </h3>
                            <p className="text-xs font-medium text-[#FFDF20] mt-1">
                                Fleet Supervisor
                            </p>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Maintains fleet safety, performance, and compliance.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                                alt="Sara Malik"
                                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-[#1D293D]">
                                Sara Malik
                            </h3>
                            <p className="text-xs font-medium text-[#FFDF20] mt-1">
                                Customer Relations Lead
                            </p>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Builds long-term client trust and service excellence.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default OurTeam
