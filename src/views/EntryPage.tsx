import Lottie from "react-lottie";
import animationData from "../assets/animation.json";
import { Play } from "lucide-react";
import "./EntryPage.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function EntryPage({
  onEntry,
}: {
  onEntry: (value: boolean) => void;
}) {
  return (
    <div className="entry-container">
      <p className="entry-title">Piranja Tube</p>
      <p className="entry-subtitle">Cover Songs by TechPiranja</p>
      <div className="lottie-wrapper">
        <Lottie options={defaultOptions} />
      </div>
      <button onClick={() => onEntry(true)} className="entry-button">
        <Play className="play-icon" />
        Let's play 'em!
      </button>
    </div>
  );
}
