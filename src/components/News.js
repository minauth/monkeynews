import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./Search";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState(props.category);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    console.log(query);
    props.setProgress(10);
    const url = `https://gnews.io/api/v4/search?country=${props.country}&q=${query}&apikey=${props.apiKey}&lang=ru&page=${page}&max=${props.max}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - CosmoNews`;
    updateNews();
    // eslint-disable-next-line
  }, [query]);

  const fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/search?country=${
      props.country
    }&q=${query}&apikey=${props.apiKey}&page=${page + 1}&max=${props.max}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="mt-4">
      <Search setQuery={setQuery} setPage={setPage} />
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.image}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    source={element.source.news}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  max: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  max: PropTypes.number,
  category: PropTypes.string,
};

export default News;
