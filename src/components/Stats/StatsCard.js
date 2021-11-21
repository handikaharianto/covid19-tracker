import "./StatsCard.scss";

function StatsCard({ total, updates, statsName, icons }) {
  return (
    <article className="stats-card">
      <div className="stats-card__info">
        <p className="stats-card__name">{statsName}</p>
        <p className="stats-card__total">{total}</p>
      </div>
      <hr />
      <p className="stats-card__update">{updates}</p>
      <div className="stats-card__icons">{icons}</div>
    </article>
  );
}

export default StatsCard;
