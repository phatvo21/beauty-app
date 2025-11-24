import React, { useState, useRef } from 'react';
import imgSrc from '../../assets/images/bg1.webp';
import FadeInScale from '../../components/animations/FadeInScale.js';
import video01 from '../../assets/videos/video01.mp4';
import poster from '../../assets/images/Poster.webp';
import image2 from '../../assets/images/image2.webp';
import image3 from '../../assets/images/image3.webp';
import image4 from '../../assets/images/image4.webp';
import image5 from '../../assets/images/image5.webp';
import about from '../../assets/images/about.webp';
import contact from '../../assets/images/contact.webp';
import { Link } from 'react-router-dom';
const Home = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            setIsPlaying(true);
            videoRef.current.play();
        }
    };
    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row relative">
                <div className='w-full h-[252px] lg:h-[525px] relative'>
                    <img
                        src={imgSrc}
                        alt="Egle Pociene"
                        className="w-full h-full object-cover"
                    />
                    <div className='fluidImageOverlay'></div>

                    <div className='absolute inset-0 flex items-center justify-center text-center'>
                        <FadeInScale className='text-gray-300 p-4 space-y-4 lg:space-y-8' scaleFrom={0.9}>
                            <p className='text-base'> Skin-Deep Confidence, Gently Crafted</p>
                            <div className='text-3xl lg:text-5xl'>Your <span className='italic font-bold'>Glow-Up</span> Era Begins</div>
                            <Link to="/treatments"
                                className='py-2 inline-block px-10 lg:px-15 border text-sm lg:text-base hover:bg-gray-50 font-semibold hover:border-main hover:text-main transition-colors'
                            >
                                Find Your Treatment
                            </Link>
                        </FadeInScale>
                    </div>
                </div>
            </div>

            <div className="py-6 lg:py-12 px-4 lg:px-20 gap-10 lg:gap-16 w-full bg-primary">
                <div className='mx-auto max-w-7xl flex flex-col lg:flex-row gap-4'>
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center">
                        <FadeInScale className="relative aspect-[3/4] lg:aspect-[3/5] h-[400px] lg:h-[600px] bg-neutral-200 shadow-lg">
                            <video
                                ref={videoRef}
                                src={video01}
                                poster={poster}
                                loop
                                className={`w-full h-full object-cover`}
                                controls={false}
                                onClick={handleVideoClick}
                            />
                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                    onClick={handlePlayClick}
                                >
                                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 text-main ml-1"
                                        >
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.533 0 3.245l-11.54 6.348c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}

                        </FadeInScale>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-main">
                        <FadeInScale className="text-3xl lg:text-5xl text-center lg:text-left ">
                            We've got your <span className="italic font-bold">Glow</span>
                        </FadeInScale>

                        <FadeInScale className="text-sm lg:text-base text-center lg:text-left font-medium tracking-wider text-neutral-700">
                            Welcome to Grace
                        </FadeInScale>
                        <FadeInScale className="text-sm lg:text-base leading-relaxed max-w-xl text-justify">
                            Tucked away on the outskirts of Leeds, UK. **Grace** is a refined beauty
                            space where transformation meets subtlety. Specialising in natural-looking
                            permanent makeup, results-driven facials, and skin-enhancing injectables,
                            each treatment is a quiet celebration of your unique beauty-delivered with
                            intention, artistry and care.
                        </FadeInScale>
                        <div className='flex justify-end'><FadeInScale className="w-fit float-end border cursor-pointer border-main py-1 lg:py-2 px-6 lg:px-8 mt-4 tracking-widest text-main hover:bg-neutral-100 transition-colors">
                            <Link to="/about"> Learn more</Link>
                        </FadeInScale></div>
                    </div>
                </div>

            </div>
            <div className="bg-secondary py-16 w-full">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FadeInScale className="flex flex-col items-center text-center">
                            <img src={image2} alt="Permanent Make-up" className="w-full h-72 object-cover mb-4 shadow-md" />
                            <h3 className="text-xl font-medium text-main mb-2">Permanent Make-up</h3>
                            <Link to="/treatments" className="border border-neutral-400 py-2 px-6 text-sm uppercase text-neutral-700 hover:bg-neutral-200 transition-colors">
                                See Treatments
                            </Link>
                        </FadeInScale>

                        <FadeInScale className="flex flex-col items-center text-center">
                            <img src={image3} alt="Injectables" className="w-full h-72 object-cover mb-4 shadow-md" />
                            <h3 className="text-xl font-medium text-main mb-2">Injectables</h3>
                            <Link to="/treatments#injectables" className="border border-neutral-400 py-2 px-6 text-sm uppercase text-neutral-700 hover:bg-neutral-200 transition-colors">
                                See Treatments
                            </Link>
                        </FadeInScale>

                        <FadeInScale className="flex flex-col items-center text-center">
                            <img src={image4} alt="Facials" className="w-full h-72 object-cover mb-4 shadow-md" />
                            <h3 className="text-xl font-medium text-main mb-2">Facials</h3>
                            <Link to='treatments#facials' className="border border-neutral-400 py-2 px-6 text-sm uppercase text-neutral-700 hover:bg-neutral-200 transition-colors">
                                See Treatments
                            </Link>
                        </FadeInScale>

                        <FadeInScale className="flex flex-col items-center text-center">
                            <img src={image5} alt="Beauty" className="w-full h-72 object-cover mb-4 shadow-md" />
                            <h3 className="text-xl font-medium text-main mb-2">Beauty</h3>
                            <Link to="/treatments#beauty-services" className="border border-neutral-400 py-2 px-6 text-sm uppercase text-neutral-700 hover:bg-neutral-200 transition-colors">
                                See Treatments
                            </Link>
                        </FadeInScale>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-16 w-full">
                <div className="container mx-auto flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-main">
                        <FadeInScale className="text-3xl lg:text-5xl text-center lg:text-left ">
                            Meet the <span className="italic font-bold">Founder</span>
                        </FadeInScale>
                        <FadeInScale className="text-sm lg:text-base leading-relaxed max-w-xl text-justify">
                            Reclaim your glow. Our award-winning studio aims to help you feel confident by offering personalized treatments that enhance your natural beauty.

                            With years of expertise, including prestigious accolades such as Semi-Permanent Makeup Artist of the 2025 and receiving awards like 2nd place at the global championship of Semi-Permanent Makeup brow Ombre technique, we're always here to support you.
                        </FadeInScale>
                        <div className='flex justify-center lg:justify-start'>
                            <FadeInScale className="w-fit float-end border cursor-pointer border-main py-1 lg:py-2 px-6 lg:px-8 mt-4 tracking-widest text-main hover:bg-neutral-100 transition-colors">
                                <Link to="/about"> Our Story</Link>
                            </FadeInScale>
                        </div>
                    </div>
                    <FadeInScale className="w-full lg:w-1/2 flex flex-col justify-center">
                        <img src={about} alt="Beauty" className="w-full h-80  lg:h-[420px] object-cover mb-4 shadow-md" />
                    </FadeInScale>
                </div>
            </div>
            <div
                className='w-full relative h-[480px] lg:h-[640px] bg-cover bg-[15%_70%]'
                style={{ backgroundImage: `url(${contact})` }}
            >
                <div className='hightImageOverlay'></div>
                <FadeInScale className="absolute inset-0 flex flex-col items-center justify-center h-full space-y-4 text-main text-center">
                    <h1 className="text-3xl lg:text-5xl font-semibold drop-shadow-lg">Ready to Book a Consultation?</h1>
                    <p className="text-base px-4 lg:text-xl max-w-2xl font-light drop-shadow-md">
                        Let's discuss your unique skin needs and embark on your glow-up journey.
                    </p>
                    <div className='flex justify-center lg:justify-start'>
                        <div className="w-fit float-end border cursor-pointer border-main py-1 lg:py-2 px-6 lg:px-8 mt-4 tracking-widest text-main hover:bg-neutral-100 transition-colors">
                            <a target='_blank' href="https://www.facebook.com/khanhtran.tonnu"> Call Us</a>
                        </div>
                    </div>
                </FadeInScale>
            </div>
        </>
    )
}

export default Home;