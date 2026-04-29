"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = async () => {
      try {
        await video.play();
      } catch {
        setReady(false);
      }
    };

    void play();
  }, []);

  return (
    <div className="absolute inset-0 bg-ink">
      <Image
        src={siteConfig.videoPoster}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover object-[55%_50%] transition-opacity duration-700 lg:object-[50%_42%] ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        className={`hero-video-media absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={siteConfig.videoPoster}
        onCanPlay={() => setReady(true)}
        onLoadedData={() => setReady(true)}
        aria-hidden="true"
      >
        <source src={siteConfig.videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
