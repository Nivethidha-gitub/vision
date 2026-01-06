interface VideoBackgroundProps {
  src?: string;
  fallbackImg?: string;
}

const VideoBackground = ({
  src = "/generated_videos/cinematic.mp4",
  fallbackImg = "/images/video-fallback.jpg",
}: VideoBackgroundProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video failed to load:", src);
    const videoEl = e.currentTarget;
    if (fallbackImg) {
      videoEl.style.display = "none";
      const imgEl = document.createElement("img");
      imgEl.src = fallbackImg;
      imgEl.alt = "Video background fallback";
      imgEl.className = "absolute top-0 left-0 w-full h-full object-cover";
      videoEl.parentElement?.appendChild(imgEl);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
      {/* Video element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onError={handleError}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Sorry, your browser does not support HTML5 video.
      </video>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50 z-[10]" />
    </div>
  );
};

export default VideoBackground;
