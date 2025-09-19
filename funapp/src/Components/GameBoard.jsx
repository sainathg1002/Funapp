// import Card from './Card';
// import './GameBoard.css'; // For grid layout

// function GameBoard({ topics, onCardClick, revealedTopics }) {
//   return (
//     <div className="game-board">
//       {topics.map((topic, index) => (
//         <Card
//           key={topic} // Using topic as key is safe since they are unique
//           topic={topic}
//           isRevealed={revealedTopics.includes(topic)}
//           onClick={() => onCardClick(topic)}
//         />
//       ))}
//     </div>
//   );
// }

// export default GameBoard;

// src/components/GameBoard.jsx

import Card from './Card';
import './GameBoard.css';

function GameBoard({ topics, onCardClick, revealedTopics, lastWrongTopic,isError, isCelebration }) {
  return (
    <div className={`game-board ${isCelebration ? 'celebrating' : ''}`}>
      {topics.map((topic) => (
        <Card
          key={topic}
          topic={topic}
          isRevealed={revealedTopics.includes(topic)}
          onClick={() => onCardClick(topic) }
          isError={lastWrongTopic === topic}
          isCelebration={isCelebration}
        />
      ))}
    </div>
  );
}

export default GameBoard;



// src/components/GameBoard.jsx

// import Card from './Card';
// import './GameBoard.css';

// function GameBoard({ topics, onCardClick, revealedTopics, isError, isCelebration }) {
//   return (
//     <div className={`game-board ${isCelebration ? 'celebrating' : ''}`}>
//       {topics.map((topic) => (
//         <Card
//           key={topic}
//           topic={topic}
//           isRevealed={revealedTopics.includes(topic)}
//           onClick={() => onCardClick(topic)}
//           isError={isError}
//           isCelebration={isCelebration} // Pass celebration state
//         />
//       ))}
//     </div>
//   );
// }

// export default GameBoard;