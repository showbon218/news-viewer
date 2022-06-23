import React from "react";
import { Route } from "react-router-dom";
import NewsPage from './pages/NewsPage' ;

const App = () => {
  return(
    <div>
        (<Route path='/' component={NewsPage}/>
    </div>
  )
}

export default App;






/*import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);


  return(
    <div>
      <Categories category = {category} onSelect = {onSelect}/>
      <NewsList category = {category} />
    </div>
  )
}

export default App;
*/
