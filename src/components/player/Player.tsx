import { useRef } from "react";
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

  return (
    <div
      style={{
        background: "#1D1927",
        boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
        padding: "20px 20px",
        borderRadius: 10,
        width: 220,
      }}
    >
      <img
        src={image}
        className="logo"
        alt="Cover Image"
        style={{ width: "100%", height: "100%", borderRadius: 10, padding: 0 }}
      />
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
