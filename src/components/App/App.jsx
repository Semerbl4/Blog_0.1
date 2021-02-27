import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { Alert } from 'antd';

import appStyle from './App.module.scss';

import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import Article from '../Article/Article';

import 'antd/dist/antd.css';
// import OpenedArticle from '../OpenedArticle/OpenedArticle'

const App = ({ articles, errorGetArticlesForPage }) => (
  <div className={appStyle.container}>
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route
        exact
        path={['/', '/articles']}
        render={() => {
          if (errorGetArticlesForPage) {
            return <Alert message="Ошибка" description="Не удалось получить статьи с сервера" type="error" showIcon />;
          }
          return <ArticleList />;
        }}
      />
      <Route
        exact
        path="/atricles/:slug"
        render={({ match }) => {
          const [selectedArticle] = articles.filter((el) => el.slug === match.params.slug);
          return (
            <Article
              createdAt={selectedArticle.createdAt}
              title={selectedArticle.title}
              favorited={selectedArticle.favorited}
              favoritesCount={selectedArticle.favoritesCount}
              tagList={selectedArticle.tagList}
              body={selectedArticle.body}
              author={selectedArticle.author}
              slug={selectedArticle.slug}
            />
          );
        }}
      />
    </BrowserRouter>
    {/* <OpenedArticle /> */}
  </div>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
  errorGetArticlesForPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.mainReducer.articles,
  errorGetArticlesForPage: state.errReducer.errorGetArticlesForPage,
});

export default connect(mapStateToProps)(App);
