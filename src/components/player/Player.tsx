import { useRef, useState } from "react";
import AudioControls from "./AudioControls";

export default function Player({
  image,
  title,
  artist,
  song,
}: {
  image: string;
  title: string;
  artist: string;
  song: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        background: "#1D1927",
        boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
        padding: "20px",
        borderRadius: 10,
        width: 220,
      }}
    >
      {/* Image container with fixed aspect ratio */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%", // creates a square
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt="Cover Image"
          onLoad={() => setImageLoaded(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 10,
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </div>
      <div style={{ padding: "15px 0" }}>
        <p
          style={{
            maxWidth: 300,
            fontWeight: 600,
            fontSize: 16,
            margin: 0,
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: 14, margin: 0, color: "#645476" }}>{artist}</p>
      </div>
      <AudioControls audio={song} audioRef={audioRef} />
    </div>
  );
}
