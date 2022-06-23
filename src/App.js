import React from "react";
import { Route } from "react-router-dom";
import NeswPage from './pages/NeswPage' ;

const App = () => {
  return(
    <div>
        (과제)
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
