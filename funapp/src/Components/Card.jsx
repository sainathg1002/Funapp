// import './Card.css'; // For card styling

// function Card({ topic, isRevealed, onClick }) {
//   const cardClass = `card ${isRevealed ? 'revealed' : ''}`;

//   return (
//     <div className={cardClass} onClick={onClick}>
//       <span>{topic}</span>
//     </div>
//   );
// }

// export default Card;


// src/components/Card.jsx





import './Card.css';

function Card({ topic, isRevealed, onClick, isError,isCelebration }) {
  const cardClass = `card ${isRevealed ? 'revealed' : ''} ${isError ? 'error' : ''} ${isCelebration ? 'celebrating' : ''}`;

  return (
    <div
      className={cardClass}
      onClick={onClick}
      role="button"
      aria-pressed={isRevealed}
      aria-label={isRevealed ? `${topic} revealed` : `hidden topic`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <span>{topic}</span>
    </div>
  );
}

export default Card;



// src/components/Card.jsx

// import './Card.css';

// function Card({ topic, isRevealed, onClick, isError, isCelebration }) {
//   const cardClass = `card ${isRevealed ? 'revealed' : ''} ${isError ? 'error' : ''} ${isCelebration ? 'celebrating' : ''}`;

//   return (
//     <div className={cardClass} onClick={onClick}>
//       <span>{topic}</span>
//     </div>
//   );
// }

// export default Card;