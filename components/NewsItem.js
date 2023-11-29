import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            className="card-img-top"
            src={
              !imageUrl
                ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/volcanic-eruptions-110804606-16x9_0.jpg?VersionId=xOfRfAzEmtjoC5yD9Zr0qSIpaS1_yEVB"
                : imageUrl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-title">
              <h5>{title}</h5>{" "}
              <span
                class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
                style={{ left: "90%", zIndex: "1" }}
              >
                {source}
              </span>
            </p>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
