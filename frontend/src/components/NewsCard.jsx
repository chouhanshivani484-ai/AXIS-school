function NewsCard({ news = {} }) {
  return (
    <article className="news-card">
      <div className="news-card-top">
        <span className="news-category">
          {news.category || "School News"}
        </span>

        <span className="news-date">
          {news.date || "Recently"}
        </span>
      </div>

      <h3>{news.title || "AXIS School News"}</h3>

      <p>
        {news.excerpt ||
          "Stay updated with the latest announcements, achievements and activities at AXIS School."}
      </p>

      <button
        type="button"
        className="news-read-more"
        onClick={() => news.onRead?.(news)}
      >
        Read More →
      </button>
    </article>
  );
}

export default NewsCard;