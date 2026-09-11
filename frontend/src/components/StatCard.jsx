function StatCard({
  value = "0",
  label = "Total",
  icon = "📊",
  subtitle = "",
  change = "",
}) {
  return (
    <article className="stat-card">
      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-content">
        <p>{label}</p>

        <h3>{value}</h3>

        {subtitle && (
          <small>{subtitle}</small>
        )}

        {change && (
          <span className="stat-change">
            {change}
          </span>
        )}
      </div>
    </article>
  );
}

export default StatCard;