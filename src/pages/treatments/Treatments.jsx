import React, { useEffect, useRef, useState } from 'react'
import FadeInScale from '../../components/animations/FadeInScale';
import { useLocation } from 'react-router-dom';
import imgSrc from '../../assets/images/IMG_0699.webp';
import flower from '../../assets/images/flower.webp';
import ombre from '../../assets/images/ombre.webp';
import nano from '../../assets/images/nano.webp';
import combo from '../../assets/images/combo.webp';
import aquarelle from '../../assets/images/aquarelle.webp';
import IMG_4773 from '../../assets/images/IMG_4773.webp';
import threed_lip from '../../assets/images/3d+lip.webp';
import classic_eyeliner from '../../assets/images/classic_eyeliner.webp';
import flick_eyeliner from '../../assets/images/flick_eyeliner.webp';
import shaded_eyeliner from '../../assets/images/shaded_eyeliner.webp';
import poster2 from '../../assets/images/poster2.webp';
import poster3 from '../../assets/images/poster3.webp';
import beauty_mark from '../../assets/images/beauty_mark.webp';
import video03 from '../../assets/videos/video03.mp4';
import IMG_8684 from '../../assets/images/IMG_8684+3.webp';
import azzalure from '../../assets/images/azzalure.webp';
import Profhilo from '../../assets/images/Profhilo-sec2-image-v2.webp';
import Jalupro from '../../assets/images/Jalupro.webp';
import Lumi_Eyes from '../../assets/images/Lumi_Eyes.webp';
import Ejal40 from '../../assets/images/Ejal40.webp';
import makeup from '../../assets/images/makeup.webp';
import IMG_5516 from '../../assets/images/IMG_5516.webp';
import IMG_9689 from '../../assets/images/IMG_9689.webp';
import IMG_4359_2 from '../../assets/images/IMG_4359_2.webp';

import medicalneedling from '../../assets/images/medicalneedling.webp';
import { i } from 'framer-motion/client';
const Treatments = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.substring(1);
            const timeoutId = setTimeout(() => {
                const element = document.getElementById(id);

                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);

            return () => clearTimeout(timeoutId);

        }
    }, [hash]);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
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
        <div className="w-full bg-primary text-main">
            <div className='flex flex-col lg:flex-row'>
                <FadeInScale className='w-full lg:w-1/2 h-[270px] lg:h-[450px] relative overflow-hidden'>
                    <img
                        src={flower}
                        alt="Grace Treatments Menu"
                        className="w-full h-full object-cover object-center"
                    />
                </FadeInScale>
                <div className='w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 bg-secondary'>
                    <FadeInScale delay={0.1} className='text-3xl lg:text-5xl mb-4'>
                        <span className='italic font-semibold'>Personalised</span> treatments, <span className='italic font-semibold'>tailored</span> to you
                    </FadeInScale>
                    <FadeInScale delay={0.2} className='text-base lg:text-xl max-w-md'>
                        Discover the full range of aesthetic treatments available at Grace, each tailored to enhance your natural beauty.
                    </FadeInScale>
                </div>
            </div>
            <div id="eyebrow-treatments">
                <div className="pt-12 lg:pt-28 pb-6 lg:pb-12 px-4 lg:px-20 bg-primary">
                    <div className='mx-auto max-w-7xl gap-8 lg:gap-16'>
                        <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                            <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                                Eyebrow Treatments
                            </h2>
                            <div className='w-full h-0.5 bg-main'></div>
                        </FadeInScale>
                        <FadeInScale delay={0.2} className='w-full space-y-4 text-gray-700 text-sm lg:text-lg'>
                            <p>
                                Your eyebrows are one of the most defining features of your face, shaping and framing your overall appearance. Permanent Makeup (PMU) can enhance their symmetry and give you a more flattering, polished look.
                            </p>
                            <p>
                                The ideal brow style for you depends on factors like your natural hair growth, skin type, and personal preferences. Elle will work with you to create a bespoke design tailored to your unique features and desires. If you're unsure which style suits you best, Elle is here to guide you every step of the way.
                            </p>
                            <p>
                                Every brow treatment includes a consultation, the treatment session, and a follow up review (small additional fee).
                            </p>
                        </FadeInScale>
                    </div>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.1} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Ombre</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> £350
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                This technique uses soft, pixelated dots of colour throughout the brow, making it suitable for all skin types. It's a versatile style that can be customized to your preference — from a light, transparent mist for a soft, natural look, to a more defined, layered effect for a bold 'makeup' finish.
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results typically last around <span className='font-semibold italic'>3 years</span></li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={ombre}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={nano}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Microblading</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> £350
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                This technique uses ultra-fine, hair-like strokes to mimic the look of natural eyebrow hairs, creating a fuller, more defined brow. Best suited for those with normal to dry skin types, microblading offers a subtle, natural finish.                        </p>

                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results last approximately <span className='font-semibold italic'>3 years</span> Results last approximately</li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
                <div className="pt-4 lg:pt-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Combination</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> £450
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                A blend of soft shading and fine hair strokes, this technique creates depth and dimension for a more natural, fuller-looking brow. Ideal for normal to dry skin types, it offers a beautifully balanced result.                        </p>

                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results typically last around <span className='font-semibold italic'>3 years</span></li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={combo}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>

            </div>

            <div id="lip-treatments">
                <div className="pt-12 lg:pt-28 pb-6 lg:pb-12 px-4 lg:px-20 bg-primary">
                    <div className='mx-auto max-w-7xl gap-8 lg:gap-16'>
                        <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                            <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                                Lip Treatments
                            </h2>
                            <div className='w-full h-0.5 bg-main'></div>
                        </FadeInScale>
                        <FadeInScale delay={0.2} className='w-full space-y-4 text-gray-700 text-sm lg:te xt-lg'>
                            <p>
                                Lips are one of the most sensual features of the face. Adding soft layers of colour can naturally enhance their shape and restore confidence.                            </p>
                            <p>
                                Lips play a key role in maintaining a youthful, healthy appearance — without the need for daily lip makeup. As time passes, lips can lose volume, definition, and colour, and the border of your smile may start to fade. Permanent makeup can help restore youthful definition and bring back the vibrancy of your lips.                            </p>
                            <p>
                                Every lip treatment includes a consultation, the treatment session, and a follow-up review (small additional fee).                            </p>
                        </FadeInScale>
                    </div>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={aquarelle}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Aquarelle</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> £390
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                A soft, natural tint of colour is applied throughout the lips, providing a subtle wash of definition without harsh borders or outlines. This technique is perfect for those with lighter lips who desire a fresh, natural look.
                            </p>
                            <p className='text-sm mb-6 text-gray-700'>
                                Note: This is a lip blush technique
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results typically last around  <span className='font-semibold italic'>1 - 3 years</span></li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
                <div className="pt-4 lg:pt-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Full Lips</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> £450
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                This technique offers full colour saturation for a high-definition, "lipstick" effect with a beautifully defined border. Perfect for those looking for a bold, long-lasting lip enhancement that doesn’t require daily touch-ups.
                            </p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results last approximately <span className='font-semibold italic'>2 - 5+ years</span></li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={IMG_4773}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={threed_lip}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>3D Lips</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> £450
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                This semi-permanent technique adds shades of your desired colour to "optically volumize" the lips.
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results last approximately <span className='font-semibold italic'>2 - 5+ years</span></li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
            </div>
            <div id="eye-treatments">
                <div className="pt-12 lg:pt-28 pb-6 lg:pb-12 px-4 lg:px-20 bg-primary">
                    <div className='mx-auto max-w-7xl gap-8 lg:gap-16'>
                        <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                            <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                                Eye Treatments
                            </h2>
                            <div className='w-full h-0.5 bg-main'></div>
                        </FadeInScale>
                        <FadeInScale delay={0.2} className='w-full space-y-4 text-gray-700 text-sm lg:te xt-lg'>
                            <p>
                                Definition on the eyes plays a critical part in keeping a youthful appearance - from a lash line to a bold 'makeup' eyeliner. Depending on the eye shape different styles of eyeliner can be created to give the illusion of bigger eyes, fuller lashes and natural definition. All treatments are bespoke and individually designed for each client so if you are unsure on what is best for you, Elle will guide you.                            </p>
                            <p>
                                All liner treatments include a consultation, treatment day, and a second review session (small fee).
                            </p>
                        </FadeInScale>
                    </div>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.1} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Classic Eyeliner</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 2 hours | <span className='font-semibold'>Cost of procedure:</span> £300
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                Very subtle eyeliner naturally creates the illusion of thicker lashes. Only through the natural lash line. Works well on everyone!                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results typically last around <span className='font-semibold italic'>5 years</span></li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={classic_eyeliner}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={flick_eyeliner}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Eyeliner with Flick</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> £350
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                Through and slightly beyond/above the lash line, intensify your eyes giving a soft perfectly applied eyeliner. Cute little flicks with a sharp edge.
                            </p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results typically last around <span className='font-semibold italic'>5 years</span></li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Shaded</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> £350
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                Soft pixelated shading across the outer lid, above the lash line to create hazy results and natural makeup effect.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision Appointment <span className='font-semibold italic'>(4 to 8 weeks) - £50</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(12 to 18 months) - £250</span></li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Results typically last around <span className='font-semibold italic'>5 years</span></li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={shaded_eyeliner}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>

            </div>

            <div id="cosmetic-treatments">
                <div className="pt-12 lg:pt-28 pb-6 lg:pb-12 px-4 lg:px-20 bg-primary">
                    <div className='mx-auto max-w-7xl gap-8 lg:gap-16'>
                        <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                            <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                                Cosmetic Treatments
                            </h2>
                            <div className='w-full h-0.5 bg-main'></div>
                        </FadeInScale>
                        <FadeInScale delay={0.2} className='w-full space-y-4 text-gray-700 text-sm lg:te xt-lg'>
                            <p>
                                Cosmetic procedures offer subtle yet impactful enhancements that restore confidence and refine natural beauty. From permanent makeup that defines features to scar camouflage that blends imperfections, each treatment is tailored to suit individual needs.                            </p>
                        </FadeInScale>
                    </div>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={poster2}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold mb-3'>Scar Camouflage and Re-Pigmentation</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>
                            <p className='italic mb-4'>Scars can impact your confidence and self-esteem - but scar camouflage offers a solution.</p>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 3 hours | <span className='font-semibold'>Cost of procedure:</span> From £200 depending on the size of the scar
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                This advanced technique involves implanting skin-tone pigments into the scar, helping it blend seamlessly with the surrounding skin. There is no downtime after treatment; however, the treated area may appear red and slightly raised for a few weeks. We recommend planning your sessions accordingly, especially around important events or holidays.
                            </p>
                            <h3 className='text-lg font-semibold mb-2'>We specialize in:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Areola & Nipple Pigmentation</li>
                                <li>Trauma & Surgical Scars, including breast uplift, reconstructive scars, facelifts, BBL, liposuction, and self-harm scars</li>
                                <li>Vitiligo Coverage</li>
                                <li>Skin Graft Re-Pigmentation</li>
                                <li>Facial Feature Restoration, such as cleft lip correction and vermillion border restoration</li>
                            </ul>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Must be scheduled between 4-8 weeks after the initial appointment</li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
                <div className="pt-4 lg:pt-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Beauty Mark</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 15 to 30 mins | <span className='font-semibold'>Cost of procedure:</span> From £50
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                Permanent makeup beauty mark service involves tattooing a small, natural-looking dot on the skin to enhance facial features or mimic the look of a real beauty mark.
                            </p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Must be scheduled between 4-8 weeks after the initial appointment</li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={beauty_mark}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={medicalneedling}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Medical Needling</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Discussed during consultation | <span className='font-semibold'>Cost of procedure:</span> £200
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                Medical Needling is an advanced treatment that uses medical-grade equipment to stimulate collagen, elastin, and melanocyte activity in damaged skin. It promotes the four stages of tissue repair—coagulation, inflammation, regeneration, and maturation—for targeted, effective healing.
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Benefits include:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Smoothing raised, textured scars</li>
                                <li>Lifting depressed scars</li>
                                <li>Supporting natural re-pigmentation</li>
                            </ul>
                            <h3 className='mb-2 text-sm'>There’s no downtime, but treated areas may appear red and slightly raised for several weeks. Plan sessions around important events.</h3>
                            <h3 className='text-lg font-semibold mb-2'>This procedure is ideal for:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Scars & burns – softens and relaxes scar tissue</li>
                                <li>Stretch marks – visibly improves texture and tone</li>
                            </ul>
                            <h3 className='text-lg font-semibold italic mb-2'>Note: Results can vary from person to person.</h3>

                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Some scars may require multiple sessions for optimal results. If this is the case, sessions will be spaced 6 to 8 weeks apart to allow for proper healing and tissue regeneration between treatments.</li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
            </div>

            <div id="facials">
                <div className="pt-12 lg:pt-28 pb-6 lg:pb-12 px-4 lg:px-20 bg-primary">
                    <div className='mx-auto max-w-7xl gap-8 lg:gap-16'>
                        <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                            <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                                Facial Treatments
                            </h2>
                            <div className='w-full h-0.5 bg-main'></div>
                        </FadeInScale>
                        <FadeInScale delay={0.2} className='w-full space-y-4 text-gray-700 text-sm lg:te xt-lg'>
                            <p>
                                Welcome to the ultimate in personalised care, where the latest in facial treatments are designed to enhance your natural beauty.                            </p>
                            <p>
                                At Grace, we combine expertise with a touch of luxury, offering a selection of advanced facials that are tailored to suit your individual skin needs. While Grace offers a variety of treatments, these advanced facials are the ones that truly make a noticeable difference to the skin.                            </p>
                            <p>
                                Whether you're looking to address specific concerns or simply indulge in a rejuvenating experience, We’ve curated a collection of treatments that prioritize both relaxation and visible results.                            </p>

                            <p>All facials are fully customisable, so if you'd like to swap or add an extra step, just let us know!</p>
                        </FadeInScale>
                    </div>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto overflow-hidden'>
                            <video
                                ref={videoRef}
                                src={video03}
                                poster={poster3}
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
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Hydrating</h2>

                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>
                            <p className='italic mb-4'>This luxurious treatment works on multiple levels to purify, hydrate, and restore your skin’s natural glow. Using advanced techniques like ultrasound and manual extractions, this facial provides a thorough cleanse while infusing your skin with antioxidants and hydration.</p>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 90 mins | <span className='font-semibold'>Cost of procedure:</span> £130 (Add dermaplaining - £30)
                            </p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>This procedure can be done every <span className='font-semibold italic'>5 weeks</span></li></ul>
                        </div>
                    </FadeInScale>
                    <div className='mx-auto max-w-7xl bg-secondary py-4 lg:py-10 px-4 lg:px-12'>
                        <FadeInScale delay={0.1}>
                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                Experience the ultimate rejuvenation with our Hydrating Facial Treatment, specifically designed to deeply cleanse the skin, addressing not only general impurities but also more stubborn concerns like millia, comedones, and blackheads.                                </p>
                            <p className='text-sm mb-6 text-gray-700'>To further enhance the skin’s rejuvenation, we incorporate medical-grade LED light therapy, targeting specific skin concerns</p>
                            <p className='text-sm mb-6 text-gray-700'>Over the course of 90 minutes, you can unwind, drift into a state of relaxation, and wake up with smooth, polished, and plump skin.</p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Steps Breakdown:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Cleansing: A deep cleanse to remove dirt, oils, and makeup, ensuring a fresh base.</li>
                                <li>Exfoliation: Gentle exfoliation to remove dead skin cells, revealing brighter, smoother skin.</li>
                                <li>Steam: Steam to open pores, allowing for a more effective extraction process.</li>
                                <li>Extractions: Manual and mechanical extractions to clear stubborn impurities, including blackheads, comedones, and millia.</li>
                                <li>Dermaplaning (optional): For an added layer of exfoliation and velus hair removal, ensuring a perfectly smooth surface.</li>
                                <li>ZO Stimulator Peel: A mild chemical peel that helps improve skin texture, brightness, and reduce the appearance of fine lines, acne, and pigmentation. It also stimulates collagen production for long-term skin health.</li>
                                <li>Targeted Mask: A mask chosen to address your specific skin concerns, such as acne, dryness, or dullness.</li>
                                <li>Antioxidant Infusion: A nourishing blend of antioxidants to combat free radicals, boosting the skin’s protection and hydration.</li>
                                <li>LED Light Therapy: Medical-grade LED therapy to enhance skin healing, reduce inflammation, and stimulate collagen production, leaving your skin rejuvenated and glowing.</li>
                            </ul>
                            <p className='text-sm mb-6 text-gray-700'>This treatment leaves your skin feeling not only deeply cleansed but hydrated and glowing, perfect for anyone looking to refresh and restore their complexion.</p>

                        </FadeInScale>
                    </div>
                </div>
                <div className="pt-4 lg:pt-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Microneedling (Skinpen)</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> Up to 2 hours and 30 mins | <span className='font-semibold'>Cost of procedure:</span> From £180 (Add neck - £50, decollate - £70, hands - £50)
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                Discover the power of Skin Pen Microneedling, a highly effective and advanced treatment that promotes skin regeneration and rejuvenation. Known for its remarkable anti-aging benefits, this procedure stimulates your skin’s natural healing process, improving the appearance of fine lines, wrinkles, and scars. Using fine needles, Skin Pen creates tiny, controlled micro-injuries that encourage collagen and elastin production, leaving your skin looking smoother, firmer, and more youthful. Ideal for tackling various skin concerns, including uneven texture, large pores, and stretch marks, this treatment will leave you with rejuvenated, glowing skin. This non-invasive, highly effective treatment is perfect for anyone seeking to turn back the clock, making it an exceptional choice for those looking for an anti-aging solution.</p>

                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto overflow-hidden'>
                            <img
                                src={IMG_8684}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
                <div className='mx-auto max-w-7xl bg-secondary py-4 lg:py-10 px-4 lg:px-12'>
                    <FadeInScale>
                           <h3 className='text-lg font-semibold mb-2'>Treatment Steps Breakdown:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Cleansing: The skin is thoroughly cleansed to remove any impurities and prepare it for the treatment.</li>
                                <li>Exfoliation: Gentle exfoliation to remove dead skin cells, revealing brighter, smoother skin.</li>
                                <li>Extractions: Manual and mechanical extractions to clear stubborn impurities, including blackheads, comedones, and millia.</li>
                                <li>Dermaplaning (optional): For an added layer of exfoliation and velus hair removal, ensuring a perfectly smooth surface.</li>
                                <li>Numbing Cream: A topical numbing cream is applied to ensure maximum comfort during the procedure.</li>
                                <li>Microneedling: Using the Skin Pen device, tiny micro-needles are gently pressed into the skin, creating controlled micro-injuries that stimulate collagen production.</li>
                                <li>Calming Mask: After microneedling, a calming mask is applied to soothe the skin, reduce redness, and promote healing.</li>
                            </ul>
                            <h3 className='text-lg font-semibold mb-2'>Benefits of Skin Pen Microneedling:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Effective Anti-Aging Solution: Stimulates collagen and elastin production, reducing fine lines and wrinkles, and promoting firmer, younger-looking skin.</li>
                                <li>Improves Skin Texture: Reduces the appearance of scars, stretch marks, and large pores, leaving skin smooth and even.</li>
                                <li>Enhances Skin Radiance: Boosts overall skin tone and texture for a healthy, glowing complexion.</li>
                                <li>Minimal Downtime: After the treatment, your skin will be red for up to 3 days, and the first 24 hours may involve slight swelling. Following this, you may experience dryness or flakiness in certain areas, which is a normal and expected response. After this initial healing period, you will begin to notice a natural glow and improved firmness. The final results of the treatment will become fully visible after about one month.</li>
                            </ul>
                            <p className='text-sm mb-6 text-gray-700'>Skin Pen Microneedling is a powerful, long-lasting treatment that works wonders for those looking to fight the signs of aging and achieve smoother, more radiant skin</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Depending on individual skin concern this treatment can be done <span className='font-semibold italic'>every 2 or 4 weeks</span>. Each treatment can provide visible results, however for more impact course of <span className='font-semibold italic'> 3-6 sessions</span> might be recommended.</li>
                            </ul>
                    </FadeInScale>
                </div>
            </div>

            <div id="injectables">
                <div className="pt-12 lg:pt-28 pb-6 lg:pb-12 px-4 lg:px-20 bg-primary">
                    <div className='mx-auto max-w-7xl gap-8 lg:gap-16'>
                        <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                            <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                                Injectables
                            </h2>
                            <div className='w-full h-0.5 bg-main'></div>
                        </FadeInScale>
                        <FadeInScale delay={0.2} className='w-full space-y-4 text-gray-700 text-sm lg:te xt-lg'>
                            <p>
                                Injectables offer a subtle yet powerful way to rejuvenate the skin and soften signs of aging. Skin boosters deeply hydrate and improve overall skin texture by infusing hyaluronic acid and nutrients directly into the skin, leaving it smoother, plumper, and more radiant. Anti-wrinkle injections target fine lines and expression lines, relaxing specific muscles to create a refreshed, youthful appearance without altering natural expression. All treatments are bespoke and individually designed for each client, so if you're unsure which option best suits your needs, Elle will guide you.                            </p>

                        </FadeInScale>
                    </div>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={azzalure}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Anti Wrinkle</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 30 mins | <span className='font-semibold'>Cost of procedure:</span>  1 Area - £180, 2 Areas - £200, 3 Areas - £220
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>Anti-wrinkle injections, commonly known as Botox or botulinum toxin injections, are a popular solution for reducing the appearance of fine lines and wrinkles, especially in areas affected by repetitive facial expressions like the forehead and around the eyes. These injections temporarily relax the muscles responsible for creating wrinkles, resulting in smoother, more youthful-looking skin. </p>
                            <p className='text-sm mb-6 text-gray-700'>The injections target specific muscles in the face, blocking signals from the nerves that cause muscle contraction. This relaxation of the muscles softens the appearance of wrinkles and lines, helping to create a more refreshed and youthful appearance. The treatment is particularly effective for areas like the forehead, crow's feet, and frown lines.</p>
                            <p className='text-sm mb-6 text-gray-700'>This treatment been used for cosmetic and medical purposes for many years. While side effects are rare, mild swelling, bruising, or discomfort at the injection site are possible but typically temporary.</p>
                            <h3 className='text-lg font-semibold mb-2'>Alternative Treatments:</h3>
                            <p className='text-sm mb-6 text-gray-700'>For those seeking longer-lasting effects, treatments like polynucleotides or skin boosters may be more appropriate. These options help improve skin quality and can provide more enduring benefits beyond just wrinkle reduction.</p>
                            <p className='text-sm mb-6 text-gray-700'>If you're considering treatment, it’s essential to consult Elle to ensure the treatment is right for your skin and concerns.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Revision appointment will be booked <span className='font-semibold italic'> 2 weeks </span>after your visit. Results from anti-wrinkle injections typically up <span className='font-semibold italic'>3 months</span>. Individual factors, such as metabolism and lifestyle, can influence how long the effects last. After this period, muscle activity gradually returns, and follow-up treatments are usually necessary to maintain the smooth look.</li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
                <div className="pt-4 lg:pt-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Profhilo</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 30 mins | <span className='font-semibold'>Cost of procedure:</span>1st session - £230, 2nd session (after 4 weeks) - £200
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>Profhilo is a ground-breaking injectable treatment that enhances skin hydration, elasticity, and overall skin quality. By stimulating the production of collagen and elastin, it helps rejuvenate the skin, leaving it firmer, smoother, and glowing with vitality.</p>
                            <p className='text-sm mb-6 text-gray-700'>Profhilo is an advanced skin treatment designed to improve hydration, firmness, and elasticity. Unlike traditional dermal fillers that add volume, Profhilo works by delivering a unique form of hyaluronic acid deep into the skin. This encourages the natural production of collagen and elastin, leading to smoother, more youthful-looking skin. Many people choose Profhilo as a natural and subtle solution to combat the signs of ageing or fatigue.</p>
                            <p className='text-sm mb-6 text-gray-700'>It is ideal for areas where skin has lost its elasticity or appears dull. The most common treatment areas include the face and neck. Profhilo is often recommended for clients who want to enhance areas of their skin’s appearance without resorting to invasive procedures.</p>
                            <p className='text-sm mb-6 text-gray-700'>To achieve the best results, most clients require two Profhilo treatments, spaced around four weeks apart. The benefits, including improved skin texture, hydration, and radiance, typically last for up to six months. For those looking to maintain their youthful glow, regular follow-up treatments can help keep the skin looking fresh and vibrant throughout the year.</p>
                            <p className='text-sm mb-6 text-gray-700'>Profhilo offers a natural, non-invasive way to restore skin vitality. It’s an excellent option for anyone seeking a rejuvenated appearance with minimal downtime.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Second session must be scheduled <span className='font-semibold italic'>after 4 weeks</span> from the first appointment</li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={Profhilo}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={Jalupro}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Jalupro</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 45 mins | <span className='font-semibold'>Cost of procedure:</span> 1 session - £180, Course of 3 sessions - £450
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                Jalupro Classic is a skin booster treatment that combines amino acids and hyaluronic acid to enhance hydration, elasticity, and skin quality. It rejuvenates tired, dull skin, providing a natural glow and reducing fine lines. It is a great procedure for prevention.</p>

                            <h3 className='text-lg font-semibold mb-2'>Benefits include:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Deep hydration and smoother skin</li>
                                <li>Improved elasticity and firmness</li>
                                <li>Improved fine lines and wrinkles</li>
                                <li>Natural results</li>
                            </ul>
                            <p className='text-sm mb-6 text-gray-700'>Side effects include mild and temporary, including redness, swelling, bruising, or tenderness at the injection site. Serious side effects are rare.</p>
                            <p className='text-sm mb-6 text-gray-700'>Jalupro Classic is an effective way to improve skin quality with minimal downtime, offering a youthful, radiant appearance.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Typically, <span className='font-semibold italic'>3 sessions spaced 2-4 weeks</span> apart are recommended for optimal results</li>
                                <li>Results usually last up to <span className='font-semibold italic'>6 months</span> depending on individual factors</li>
                                <li>Yearly Maintenance <span className='font-semibold italic'>(18 months to 3 years) - £300</span></li>
                                <li>Maintenance treatments are advised <span className='font-semibold italic'>every 6 to 12 months</span> to sustain results</li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
                <div className="pt-4 lg:pt-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Lumi Eyes</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 30 mins | <span className='font-semibold'>Cost of procedure:</span> £160
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>Lumi Eyes is a specialized eye treatment designed to rejuvenate the delicate skin around the eyes. It combines a unique blend of ingredients to reduce dark circles, puffiness, and fine lines, leaving the eye area refreshed and revitalized.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Second session must be scheduled <span className='font-semibold italic'>after 4 weeks</span> from the first appointment</li>
                            </ul>
                            <h3 className='text-lg font-semibold mb-2'>Benefits include:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Reduces dark circles and puffiness</li>
                                <li>Smooths fine lines around the eyes</li>
                                <li>Improves skin elasticity and firmness</li>
                                <li>Brightens and revitalizes the eye area</li>
                            </ul>
                            <p className='text-sm mb-6 text-gray-700'>Side effects are rare but may include mild redness, swelling, or bruising at the treatment site, which typically resolve within a few days.</p>
                            <p className='text-sm mb-6 text-gray-700'>Lumi Eyes is an effective, non-invasive treatment to refresh and brighten the eye area, offering noticeable improvements with minimal downtime.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Typically, <span className='font-semibold italic'>3 sessions spaced 2-4 weeks</span> apart are recommended for optimal results</li>
                                <li>To maintain results, touch-up treatments <span className='font-semibold italic'>every 6 to 12 months</span> are advised</li>
                                <li>Results can last <span className='font-semibold italic'>up to 6 months</span>, depending on individual skin type and lifestyle</li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={Lumi_Eyes}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={Ejal40}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Ejal40</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 30 mins | <span className='font-semibold'>Cost of procedure:</span> £150
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>Ejal 40 is an advanced skin booster designed to improve skin quality, elasticity, and hydration using high molecular weight hyaluronic acid. This bio-revitalisation treatment works by stimulating the skin’s natural regeneration process, enhancing collagen production and restoring firmness from within. Ideal for addressing early signs of aging, fine lines, and dullness, Ejal 40 leaves the skin smoother, brighter, and more supple. This treatment can be performed on face and neck.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>For best results, two sessions are recommended, spaced four weeks apart.</li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
            </div>

            <div id="beauty-services">
                <div className="pt-12 lg:pt-28 pb-6 lg:pb-12 px-4 lg:px-20 bg-primary">
                    <div className='mx-auto max-w-7xl gap-8 lg:gap-16'>
                        <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                            <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                                Beauty Services
                            </h2>
                            <div className='w-full h-0.5 bg-main'></div>
                        </FadeInScale>
                        <FadeInScale delay={0.2} className='w-full space-y-4 text-gray-700 text-sm lg:te xt-lg'>
                            <p>
                                Beauty services offer a versatile way to enhance your features—whether it's a flawless makeup look for a special event or treatments like lash lifts and brow laminations that define and shape for weeks. HD Brows, along with lash and brow tinting, add natural depth and balance for a more polished appearance. With results that can last from a single day to several weeks, each service is adapted to suit your lifestyle and preferences. Elle will help you choose the right combination to bring out your best features with ease and confidence.                            </p>

                        </FadeInScale>
                    </div>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-[600px] lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={makeup}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Makeup</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> from 60 mins | <span className='font-semibold'>Cost of procedure:</span> £50
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                At Grace, makeup is approached with a less-is-more philosophy—prioritising luminous skin, soft definition, and the kind of effortless beauty that enhances rather than hides. Whether you're preparing for a relaxed day event, a glamorous evening, or a special occasion like a wedding, the makeup is always tailored to feel like you—just elevated. Elle can craft the entire look based on her signature natural style, or work with your ideas and inspirations to bring a shared vision to life.  It’s makeup designed to feel comfortable, look timeless, and photograph beautifully.
                            </p>
                            <p className='text-sm mb-6 text-gray-700'>Note: This service can also be provided at your chosen location for added comfort and convenience; a travel fee will apply and is discussed individually during booking. </p>
                            <p className='text-sm mb-6 text-gray-700'>Makeup pricing varies depending on the day and time of your appointment: £50 for bookings Monday to Friday between 9:00 AM and 4:00 PM, and £80 for appointments after 4:00 PM or on Saturdays.</p>
                        </div>
                    </FadeInScale>
                </div>
                <div className="pt-4 lg:pt-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>HD Brows</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 1 hour | <span className='font-semibold'>Cost of procedure:</span> £45
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                HD Brows is a comprehensive brow treatment that combines precision and artistry to create perfectly sculpted, natural-looking brows tailored to your face. The process begins with professional brow mapping to measure and design the ideal shape for your unique features. This is followed by careful trimming and shaping of the brow hairs, and a customised tint selected to complement your skin tone and hair colour. To finish, expert makeup is applied around the brows, including a fresh, clean underline that highlights and defines your shape for a polished look. The result is fuller, perfectly groomed brows that enhance your natural beauty Results last upto a month.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>To maintain good results recommended  <span className='font-semibold italic'>every 4 weeks</span></li>
                            </ul>
                            <p>Note: Patch test required minimum 24 hours before this treatment.</p>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={IMG_5516}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
                <div className="py-4 lg:py-10 px-4 lg:px-20">
                    <FadeInScale delay={0.2} className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row'>
                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-[450px] lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden'>
                            <img
                                src={IMG_9689}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tr-xl lg:rounded-br-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Brow Shape</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 30 mins | <span className='font-semibold'>Cost of procedure:</span> £35
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>Brow shaping at Grace is a precise and tailored treatment designed to frame your face and enhance your natural features. Using professional brow mapping techniques, Elle carefully measures and outlines the ideal brow shape suited to your facial structure. Unwanted hair is removed through gentle plucking for clean, defined lines, while dermaplaning around the brow area smooths the skin and enhances the overall finish. The result is a polished, balanced brow that complements your look effortlessly.</p>
                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>To maintain good results recommended <span className='font-semibold italic'>every 4 weeks.</span></li>
                            </ul>
                        </div>
                    </FadeInScale>
                </div>
                <div className="pt-4 lg:pt-10 px-4 lg:px-20">
                    <FadeInScale delay={0.3} className='mx-auto max-w-7xl flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 text-main flex flex-col bg-secondary p-4 lg:p-10 lg:rounded-tl-xl lg:rounded-bl-xl'>
                            <div className='flex justify-between items-start mb-6'>
                                <h2 className='text-2xl md:text-3xl lg:text-5xl font-serif italic font-semibold'>Lash Lift</h2>
                                <a href='https://www.facebook.com/khanhtran.tonnu' target='_blank' className='border border-main text-main px-6 py-2 text-sm uppercase tracking-widest hover:bg-main hover:text-[#f7f4f0] whitespace-nowrap transition duration-300'>
                                    Book Now
                                </a>
                            </div>

                            <p className='text-sm mb-4'>
                                <span className='font-semibold'>Duration:</span> 75 mins | <span className='font-semibold'>Cost of procedure:</span> £60
                            </p>

                            <h3 className='text-lg font-semibold mb-2'>Treatment Details:</h3>
                            <p className='text-sm mb-6 text-gray-700'>
                                The Lash Lift treatment enhances your natural lashes by lifting and curling them for a beautifully open-eyed look. This service includes a lash tint to deepen colour and add extra definition, with results lasting up to 3 months. Clients can choose between a strong curl for a dramatic effect or a gentler lift for a more natural appearance. A patch test is required at least 24 hours before the treatment to ensure safety. During the procedure, which lasts about one hour, it’s the perfect opportunity to relax and enjoy a little “lash nap,” so clients should be comfortable keeping their eyes closed throughout.</p>                            <h3 className='text-lg font-semibold mb-2'>Revision Appointment:</h3>
                            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4'>
                                <li>Recommended to leave <span className='font-semibold italic'>minimum 6 weeks</span> in between treatments, however results can last <span className='font-semibold italic'><span className='font-semibold italic'>every 4 weeks</span></span></li>
                            </ul>
                        </div>

                        {/* Right Section: Image */}
                        <div className='w-full lg:w-2/5 relative h-[300px] lg:h-auto lg:rounded-tr-xl lg:rounded-br-xl overflow-hidden'>
                            <img
                                src={IMG_4359_2}
                                alt="Close-up of Ombre eyebrow treatment results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </FadeInScale>
                </div>
            </div>

        </div>
    )
}

export default Treatments;