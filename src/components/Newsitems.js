import React from "react";

const Newsitems = (props) => {
  const dateOptions = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  let { title, description, imageUrl, newsUrl, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2022/12/16/1600x900/IMG_2458_1664629129426_1671170726219_1671170726219.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">{new Date(date).toLocaleString('ru-RU', dateOptions)}</small>
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href={newsUrl}
            className="btn btn-sm btn-dark"
          >
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitems;
