import React from 'react';

const Articles = ({ articles, search }) => {
  const filterArticles = (articles, query) => {
    if (!query){
         return articles;
    } 
    return articles.filter(article =>
      article.header.toLowerCase().includes(query.toLowerCase()) ||
      article.body.toLowerCase().includes(query.toLowerCase())
    );
  };
  const highlightText = (text, query) => {
    if (!query){
         return text;
    }
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    if (index === -1) return text;

    return (
      <>
        {text.slice(0, index)}
        <mark>{text.slice(index, index + query.length)}</mark>
        {text.slice(index + query.length)}
      </>
    );
  };

  // Filtered articles based on the search query
  const filteredArticles = filterArticles(articles, search);

  return (
    <div>
      <p>{filteredArticles.length} posts found.</p>
      {filteredArticles.map(article => (
        <div key={article.id}>
          <h2>{highlightText(article.header, search)}</h2>
          <p><i>{article.date}</i></p>
          <p>{highlightText(article.body, search)}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
