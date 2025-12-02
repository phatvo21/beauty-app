import React from 'react';
import about1 from '../../assets/images/about/about1.png';
import FadeInScale from '../../components/animations/FadeInScale.js';
import awards01 from '../../assets/images/awards01.webp';
import awards02 from '../../assets/images/awards02.webp';
import awards03 from '../../assets/images/awards03.webp';
import awards04 from '../../assets/images/awards04.webp';

const About = () => {
    return (
        <>
            <div className="bg-secondary py-6 lg:py-12 px-10 lg:px-20">
                <div className="flex flex-col md:flex-row mx-auto max-w-7xl relative">
                    <FadeInScale className='w-full lg:w-2/5 h-[530px] lg:h-[720px] relative' scaleFrom={0.9}>
                        <img
                            src={about1}
                            alt="Egle Pociene"
                            className="w-full h-full object-containt bg-[15%_70%]"
                        />
                        <div className='fluidImageOverlay'></div>
                    </FadeInScale>
                    <FadeInScale
                        className="w-full lg:w-3/5 p-4 lg:p-10 flex flex-col justify-center gap-4 text-sm lg:text-base absolute lg:relative bottom-0 text-gray-300 lg:text-main"
                    >
                        <p className='italic max-w-2xl text-sm lg:text-xl mx-auto'>“With experience in the beauty industry since 2012 , I aim to bring out the most natural beauty in my clients without turning them into someone else – Still you, but better.”</p>
                        <div className='italic max-w-2xl text-sm lg:text-xl mx-auto'>- Grace -</div>
                    </FadeInScale>
                </div>
            </div>
            <div className="py-6 lg:py-12 px-4 lg:px-20 gap-10 lg:gap-16 w-full bg-primary">
                <div className='mx-auto max-w-7xl flex flex-col lg:flex-row gap-4 mb-8 lg:mb-12 items-center'>
                    <h1 className='text-2xl lg:text-4xl mb-3 text-main'>The <span className='italic font-semibold'>Grace</span> Journey</h1>
                </div>
                <div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {/* Studies Card */}
                    <FadeInScale delay={0.1} className='bg-secondary p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center min-h-[250px]'>
                        <h3 className='text-xl font-semibold text-main mb-3'>Studies</h3>
                        <div className='text-sm text-gray-700 text-left'>
                            <ul className="list-disc list-inside space-y-1">
                                <li>2012: Makeup Artist course in Ho Chi Minh, Vietnam</li>
                                <li>2012-2014: Makeup freelancer and founder of Khanh Tran Wedding Studio</li>
                                <li>2014: Phibrows Microblading and Permanent Makeup courses in Ho Chi Minh</li>
                                <li>2014-2024: Practising and instructing Makeup & Permanent Makeup in Khanh Tran Beauty Academy in VietNam</li>
                                <li>2025: VTCT Level 4 Certificate in Micropigmentation in Leeds</li>
                                <li>2025: Makeup Diploma Course from Elizabeth Sands Beauty School.</li>
                            </ul>
                        </div>
                    </FadeInScale>

                    {/* Skills Card */}
                    <FadeInScale delay={0.2} className='bg-secondary p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center min-h-[250px]'>
                        <h3 className='text-xl font-semibold text-main mb-3'>Skills</h3>
                         <div className='text-sm text-gray-700 text-left'>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Makeup: Day/ night makeup,  Event Makeup, Shooting Makeup, Bridal Makeup, SFX Makeup, Costume Makeup</li>
                                <li>Permanent Makeup: Hairstroke Eyebrows, Ombre Eyebrows, Permanent Lipstick, Permanent Eyeliner</li>
                            </ul>
                        </div>
                    </FadeInScale>

                    {/* Experience Card */}
                    <FadeInScale delay={0.3} className='bg-secondary p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center min-h-[250px]'>
                        <h3 className='text-xl font-semibold text-main mb-3'>Experience</h3>
                        <p className='text-sm text-gray-700'>
                            Since 2012, I worked in various medical clinics, gaining hands-on experience with advanced medical lasers and diverse skin procedures. I have helped clients from addressing complex skin concerns to achieving their desired results.
                        </p>
                    </FadeInScale>

                    {/* Makeup Card */}
                    <FadeInScale delay={0.4} className='bg-secondary p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center min-h-[250px]'>
                        <h3 className='text-xl font-semibold text-main mb-3'>Makeup</h3>
                        <p className='text-sm text-gray-700 mb-2'>
                            In 2018, I decided to blend my knowledge of beauty with my expertise in makeup, but with a twist. I decided to focus on makeup that lasts.
                        </p>
                        <p className='italic text-sm text-gray-700 font-semibold'>
                            This is how Grace came to life.
                        </p>
                    </FadeInScale>
                </div>
            </div>
            <div className="py-6 lg:py-12 px-4 lg:px-20 w-full bg-secondary">
                <div className='mx-auto max-w-7xl flex flex-col lg:flex-row gap-4 mb-8 lg:mb-12 items-center'>
                    <h2 className='text-2xl lg:text-4xl mb-3 italic font-semibold text-main'>Awards & Recognition</h2>
                </div>
                <div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10'>
                    {/* Award 1 */}
                    <FadeInScale delay={0.1} className='bg-primary p-4 lg:p-10 rounded-lg shadow-sm flex flex-col items-center text-center'>
                        <img
                            src={awards01} // Placeholder for award image 1
                            alt="Semi-Permanent Make Up Specialist of the Year Award"
                            className="max-h-72 w-72 h-auto object-cover bg-[15%_70%] mb-5 lg:mb-10 rounded" // Added max-w-sm to control image size
                        />
                        <p className='text-main text-sm lg:text-base font-medium italic'>Semi-Permanent Make Up Specialist of the Year 2025</p>
                    </FadeInScale>

                    {/* Award 2 */}
                    <FadeInScale delay={0.2} className='bg-primary p-4 lg:p-10 rounded-lg shadow-sm flex flex-col items-center text-center'>
                        <img
                            src={awards02} // Placeholder for award image 2
                            alt="Shaded Brows Winner at Milan Biotek Championship 2024"
                            className="max-h-72 w-72 h-auto object-cover bg-[15%_70%] mb-5 lg:mb-10 rounded"
                        />
                        <p className='text-main text-sm lg:text-base font-medium italic'>Shaded Brows Winner at Milan Biotek Championship 2024</p>
                    </FadeInScale>

                    {/* Award 3 */}
                    <FadeInScale delay={0.3} className='bg-primary p-4 lg:p-10 rounded-lg shadow-sm flex flex-col items-center text-center'>
                        <img
                            src={awards03} // Placeholder for award image 3
                            alt="Englands Business Awards"
                            className="max-h-72 w-72 h-auto object-cover bg-[15%_70%] mb-5 lg:mb-10 rounded"
                        />
                        <p className='text-main text-sm lg:text-base font-medium italic'>Finalist as Yorkshire Aesthetician 2025</p>
                    </FadeInScale>

                    {/* Award 4 */}
                    <FadeInScale delay={0.4} className='bg-primary p-4 lg:p-10 rounded-lg shadow-sm flex flex-col items-center text-center'>
                        <img
                            src={awards04} // Placeholder for award image 4
                            alt="Oceanic Events Appearance"
                            className="max-h-72 w-72 h-auto object-cover object-[15%_15%] mb-5 lg:mb-10 rounded"
                        />
                        <p className='text-main text-sm lg:text-base font-medium italic'>Guest at Oceanic Events</p>
                    </FadeInScale>
                </div>
            </div>
        </>
    );
}

export default About;