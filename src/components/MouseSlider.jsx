import { useState, useRef, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function MouseSlider({ images, name }) {
  const [value, setValue] = useState(50);
  const [hover, setHover] = useState(false);
  const barRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setActive(Math.floor(images.length / 2));
  }, [images]);

  const updatePosition = (clientX) => {
    const rect = barRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setValue(percent);
    setActive(Math.floor((percent / 100) * images.length));
  };

  // Hover or move mouse
  const handleMouseMove = (e) => {
    if (isDragging || hover) updatePosition(e.clientX);
  };

  // Touch move
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    if (touch) updatePosition(touch.clientX);
  };

  // Start drag
  const handleStart = (e) => {
    setIsDragging(true);
    setHover(true);
    if (e.type === "touchstart") updatePosition(e.touches[0].clientX);
  };

  // End drag
  const handleEnd = () => {
    setIsDragging(false);
    setHover(false);
    setValue(50);
    setActive(Math.floor(images.length / 2));
  };

  // Hover enter/leave
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
    setValue(50);
    setActive(Math.floor(images.length / 2));
  };

  return (
    <div className="relative w-full select-none my-10 lg:my-30">
      <div
        className="flex gap-1 lg:gap-2 w-full h-60 md:h-80 lg:h-h100 content-center my-2 select-none"
        ref={barRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <PhotoProvider>
          {images.map((src, i) => (
            <div
              key={i}
              className={`flex-shrink-0 h-full ${
                i === active
                  ? "flex-initial"
                  : "flex-1 brightness-70 opacity-30"
              } transition-all duration-300 ease-out`}
            >
              <PhotoView key={i} src={src}>
                <img
                  src={src}
                  alt={`img-${i + 1}`}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </PhotoView>
            </div>
          ))}
        </PhotoProvider>
      </div>
      <div className="rounded-lg md:rounded-2xl border-2 border-zinc-500/25 py-1 md:py-3 px-5 my-1 md:my-4 mb-4 md:mb-20">
        {name}
      </div>

      {/* Slider dot */}
      <div
        className={`absolute -bottom-6 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 transition-transform ${
          isDragging ? "scale-110" : ""
        }`}
        style={{ left: `calc(${value}% - 4px)` }}
        onTouchStart={handleStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      />
    </div>
  );
}
