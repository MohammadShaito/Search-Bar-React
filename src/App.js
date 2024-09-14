// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import Articles from './components/articles';

const App = () => {
  const [search, setSearch] = useState('');

  const articles = [
    {
      header: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "Oct 09, 2018",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, impedit, incidunt eum, asperiores quod consequatur unde sapiente aut voluptatibus pariatur culpa repellat nobis vero architecto illum. Accusamus perferendis obcaecati commodi?"
    },
    {
      header: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "May 15, 2019",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse provident suscipit quae omnis fugit. Est provident unde nobis optio officiis reprehenderit consequatur dicta, mollitia soluta aperiam recusandae impedit illum laborum!"
    }
  ];

  return (
    <div>
      <h1>Text Search</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <Articles articles={articles} search={search} />
    </div>
  );
};

export default App;
