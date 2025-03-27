import "./App.css";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import EntryPage from "./views/EntryPage";
import MusicPlayerPage from "./views/MusicPlayerPage";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div>
      <AnimatePresence mode="wait">
        {showMain ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MusicPlayerPage />
          </motion.div>
        ) : (
          <motion.div
            key="entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EntryPage onEntry={setShowMain} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
