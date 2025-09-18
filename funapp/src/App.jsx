// import { useState, useEffect } from 'react';
// import GameBoard from './components/GameBoard';
// import './App.css'; // For overall page styling

// // A simple Fisher-Yates shuffle algorithm to randomize card order
// const shuffleArray = (array) => {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const allTopics = ['HTML', 'CSS', 'JavaScript', 'React', 'Databases', 'API', 'Git', 'Deployment', 'Security'];

// function App() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [shuffledTopics, setShuffledTopics] = useState([]);
//   const [revealedTopics, setRevealedTopics] = useState([]);

//   // Initialize and reset the game
//   const resetGame = () => {
//     setCurrentStep(0);
//     setRevealedTopics([]);
//     setShuffledTopics(shuffleArray([...allTopics]));
//   };

//   // Run on first render to set up the initial game board
//   useEffect(() => {
//     resetGame();
//   }, []);

//   // Handle a card click
//   const handleCardClick = (topic) => {
//     // If the card is already correctly selected, do nothing
//     if (revealedTopics.includes(topic)) {
//       return;
//     }

//     // Check if the selected topic is the correct one in the sequence
//     if (topic === allTopics[currentStep]) {
//       // Correct move: Add the topic to the revealed list
//       const newRevealed = [...revealedTopics, topic];
//       setRevealedTopics(newRevealed);
//       setCurrentStep(currentStep + 1);

//       // Check for win condition
//       if (newRevealed.length === allTopics.length) {
//         alert('Congratulations! You mastered the roadmap!');
//         resetGame();
//       }
//     } else {
//       // Incorrect move: Reset the game
//       alert(`Oops! You picked the wrong topic. Starting over.`);
//       resetGame();
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Web Dev Roadmap Game</h1>
//       <p>Click the topics in the correct order to win! (HTML - CSS - ...)</p>
//       <GameBoard
//         topics={shuffledTopics}
//         onCardClick={handleCardClick}
//         revealedTopics={revealedTopics}
//       />
//       <button onClick={resetGame}>Reset Game</button>
//     </div>
//   );
// }

// export default App;




// src/App.jsx

import { useState, useEffect } from 'react';
import GameBoard from './Components/GameBoard';
import Celebration from './Components/Celebration';
import sunImage from './assets/sunimg.webp';
import './App.css'; 

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const allTopics = ['HTML', 'CSS', 'JavaScript', 'React', 'Databases', 'API', 'Git', 'Deployment', 'Security'];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [shuffledTopics, setShuffledTopics] = useState([]);
  const [revealedTopics, setRevealedTopics] = useState([]);
  const [lastWrongTopic, setLastWrongTopic] = useState(null);
  const [isWon, setIsWon] = useState(false);
  const [theme, setTheme] = useState('light');

  const resetGame = () => {
    setCurrentStep(0);
    setRevealedTopics([]);
    setShuffledTopics(shuffleArray([...allTopics]));
  };

  useEffect(() => {
    resetGame();
  }, []);

  const handleCardClick = (topic) => {
    if (revealedTopics.includes(topic)) {
      return;
    }

    if (topic === allTopics[currentStep]) {
      const newRevealed = [...revealedTopics, topic];
      setRevealedTopics(newRevealed);
      setCurrentStep(currentStep + 1);

      if (newRevealed.length === allTopics.length) {
        // Show celebration overlay instead of alert
        setIsWon(true);

        // Auto-reset after a short delay so user can enjoy the celebration
        setTimeout(() => {
          setIsWon(false);
          resetGame();
        }, 2400);
      }
    } else {
      // Incorrect move: indicate wrong card (vibration) but keep card positions
      setLastWrongTopic(topic);
      // Clear revealed progress and reset step
      setRevealedTopics([]);
      setCurrentStep(0);
  // no blocking alert; visual vibration will indicate wrong pick

      // Clear the wrong-topic marker after animation completes (~600ms)
      setTimeout(() => setLastWrongTopic(null), 600);
    }
  };

  return (
    <div className={`app-container ${theme === 'dark' ? 'theme-dark' : ''}`}>
      <h1>Web Dev Roadmap Game</h1>
      <h4>Click the topics in the correct order to win! (HTML - CSS - ...)</h4>
      <GameBoard
        topics={shuffledTopics}
        onCardClick={handleCardClick}
        revealedTopics={revealedTopics}
        lastWrongTopic={lastWrongTopic}
      />
      {isWon && (
        <Celebration onClose={() => {
          setIsWon(false);
          resetGame();
        }} />
      )}
      <button onClick={resetGame}>Reset Game</button>
      <img
        src={sunImage}
        className={`bottom-left-image ${theme === 'dark' ? 'rotated' : ''}`}
        alt="Sun"
        role="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      
    </div>
  );
}

export default App;





// src/App.jsx

// import { useState, useEffect } from 'react';
// import GameBoard from './components/GameBoard';
// import './App.css';

// const shuffleArray = (array) => {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const allTopics = ['HTML', 'CSS', 'JavaScript', 'React', 'Databases', 'API', 'Git', 'Deployment', 'Security'];

// function App() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [shuffledTopics, setShuffledTopics] = useState([]);
//   const [revealedTopics, setRevealedTopics] = useState([]);
//   const [isError, setIsError] = useState(false);
//   const [isCelebration, setIsCelebration] = useState(false); // New state for celebration

//   const resetGame = () => {
//     setCurrentStep(0);
//     setRevealedTopics([]);
//     setShuffledTopics(shuffleArray([...allTopics]));
//   };

//   useEffect(() => {
//     resetGame();
//   }, []);

//   const handleCardClick = (topic) => {
//     if (revealedTopics.includes(topic)) {
//       return;
//     }

//     if (topic === allTopics[currentStep]) {
//       const newRevealed = [...revealedTopics, topic];
//       setRevealedTopics(newRevealed);
//       setCurrentStep(currentStep + 1);

//       if (newRevealed.length === allTopics.length) {
//         // Trigger the celebration effect
//         setIsCelebration(true);
//         setTimeout(() => {
//           setIsCelebration(false); // Turn off celebration state
//           resetGame();
//         }, 1500); // Duration of the celebration animation
//       }
//     } else {
//       setIsError(true);
//       setTimeout(() => {
//         setIsError(false);
//         resetGame();
//       }, 800);
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Web Dev Roadmap Game</h1>
//       <p>Click the topics in the correct order to win! (HTML - CSS - ...)</p>
//       <GameBoard
//         topics={shuffledTopics}
//         onCardClick={handleCardClick}
//         revealedTopics={revealedTopics}
//         isError={isError}
//         isCelebration={isCelebration} // Pass celebration state to GameBoard
//       />
//       <button onClick={resetGame}>Reset Game</button>
//     </div>
//   );
// }

// export default App;