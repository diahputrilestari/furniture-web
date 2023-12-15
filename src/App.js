import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Furniture from './components/Furniture'
import Category from './components/Category'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Furniture />
        <Category />
    </div>
  );
}

export default App;
