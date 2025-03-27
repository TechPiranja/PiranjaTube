import Player from "../components/player/Player";
import coverPlaceholder from "../assets/Ithaca_Saga.webp";
import epicSong from "../assets/cover.mp3";
import goddessImage from "../assets/goddess.jpg";
import goddess from "../assets/goddess.mp3";

export default function MusicPlayerPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
        width: "100%",
      }}
    >
      <Player
        image={coverPlaceholder}
        title="Will you fall in love with me again"
        artist="EPIC: The Musical"
        song={epicSong}
      />
      <Player
        image={goddessImage}
        title="Goddess"
        artist="Laufey"
        song={goddess}
      />
    </div>
  );
}
