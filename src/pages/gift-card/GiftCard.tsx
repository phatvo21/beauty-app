import React, { useRef, useState } from 'react'
import FadeInScale from '../../components/animations/FadeInScale.js'
import video07 from '../../assets/videos/video07.mp4';

const GiftCard = () => {
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
        <div className='mx-auto max-w-7xl gap-8 lg:gap-16 text-main my-20'>
            <FadeInScale delay={0.1} className='w-full flex items-center gap-4 mb-10'>
                <h2 className='text-3xl lg:text-4xl font-semibold italic whitespace-nowrap'>
                    Give the Gift of Beauty
                </h2>
                <div className='w-full h-0.5 bg-main'></div>
            </FadeInScale>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'>
                <FadeInScale delay={0.2} className='w-full lg:w-1/2 space-y-4 text-gray-700 text-sm lg:text-lg'>
                    <p>Grace Gift Cards are available starting from £50.
                        You can pick up a physical card directly at our store.
                        During holiday seasons, we also offer limited-edition, themed gift card packaging to make your present even more special.
                        Please contact us in advance to receive the best service.
                    </p>                </FadeInScale>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <FadeInScale className='relative aspect-[3/4] lg:aspect-[3/4] h-[400px] lg:h-[500px]'>
                        <video
                            ref={videoRef}
                            src={video07}
                            // poster={poster}
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
                                <div className="w-14 h-14 bg-white/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
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
            </div>
        </div>
    )
}

export default GiftCard