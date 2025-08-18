import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroVideoPoster from '@/assets/hero-video-poster.jpg';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="videos/video-teste.png"
        >
          <source src="videos/video-teste.png" type="video/mp4" />
          <img 
            src="videos/video-teste.png"
            alt="Clatt Hotel Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;