// eslint-disable-next-line import/prefer-default-export
export const setPage = (page) => ({ type: 'SET_PAGE', payload: page });

export const setArticlesForPage = (articles) => ({ type: 'SET_ARTICLES_FOR_PAGE', payload: articles });

export const setArticlesLoading = () => ({ type: 'SET_ARTICLES_LOADING' });

export const setErrGetArtForPage = () => ({ type: 'ERROR_GET_ARTICLES_FOR_PAGE' });

export const getArticlesForPage = (page) => async (dispatch) => {
  dispatch(setArticlesLoading());
  let skippedArticles = 0;
  if (page > 1) {
    skippedArticles = 5 * (page - 1);
  }
  let resp = await fetch(`https://conduit.productionready.io/api/articles?limit=5&offset=${skippedArticles}`);
  if (resp.ok) {
    resp = await resp.json();
    dispatch(setArticlesLoading());
    dispatch(setArticlesForPage(resp.articles));
  } else {
    dispatch(setArticlesLoading());
    dispatch(setErrGetArtForPage());
  }
};
