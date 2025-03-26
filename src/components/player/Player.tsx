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
  return (
    <div
      style={{
        background: "#222",
        boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
        padding: "20px 20px",
        borderRadius: 20,
        width: 220,
      }}
    >
      <img
        src={image}
        className="logo"
        alt="Cover Image"
        style={{ width: "100%", height: "100%", borderRadius: 20, padding: 0 }}
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
        <p style={{ fontSize: 14, margin: 0, color: "#777" }}>{artist}</p>
      </div>
      <AudioControls audio={song} />
    </div>
  );
}
