import './Celebration.css';

function Celebration({ onClose }) {
  return (
    <div className="celebration-overlay">
      <div className="celebration-card">
        <h2>Congratulations!</h2>
        <p>You mastered the roadmap 🎉</p>
        <button onClick={onClose}>Play again</button>
      </div>
      {/* simple floating confetti dots */}
      <div className="confetti confetti-1" />
      <div className="confetti confetti-2" />
      <div className="confetti confetti-3" />
      <div className="confetti confetti-4" />
      <div className="confetti confetti-5" />
    </div>
  );
}

export default Celebration;
