import React from 'react';
import FadeInScale from '../../components/animations/FadeInScale.js';

// Import videos from assets
import video1 from '../../assets/videos/share/video.mp4';
import video2 from '../../assets/videos/share/video1.mp4';
import video3 from '../../assets/videos/share/video2.mp4';
import video4 from '../../assets/videos/share/video3.mp4';
import video5 from '../../assets/videos/share/video4.mp4';

const VIDEOS = [
  { id: 1, src: video1, title: 'Video 1' },
  { id: 2, src: video2, title: 'Video 2' },
  { id: 3, src: video3, title: 'Video 3' },
  { id: 4, src: video4, title: 'Video 4' },
  { id: 5, src: video5, title: 'Video 5' },
];

const VideoCard: React.FC<{ video: typeof VIDEOS[0] }> = ({ video }) => {
  const getVideoType = (src: string) => {
    if (src.includes('.mp4')) return 'video/mp4';
    if (src.includes('.MOV') || src.includes('.mov')) return 'video/quicktime';
    return 'video/mp4';
  };

  return (
    <FadeInScale className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full pb-[56.25%] h-[240px] lg:h-[300px] bg-black rounded-lg overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls
          preload="metadata"
          playsInline
        >
          <source src={video.src} type={getVideoType(video.src)} />
          Your browser does not support the video tag.
        </video>
      </div>
    </FadeInScale>
  );
};

const Videos: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-main sm:text-5xl">
            Our Videos
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Watch our latest videos and treatments.
          </p>
        </div>
        <hr className='mb-8 border-gray-200'/>
        
        {VIDEOS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-secondary border border-gray-200 rounded-lg">
            <p className="text-lg text-gray-500">
              Không có video nào lúc này.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;

