import React from 'react'
import ThemeContextProvider from './ contexts/ThemeContext';

import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
