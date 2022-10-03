import React from 'react';

import { WholeContainer } from './AppStyle';
import Navbar from './components/common/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/dashboard/mainPage/mainPage';
import SearchBar from './components/common/search/searchPage';
import Trend from './components/dashboard/trendingPage/trendingPage';
import CreatePage from './components/dashboard/createPage/createPage';
import ReadPage from './components/common/readPage/readpage';

function App() {
  return (
    <WholeContainer>
      <Navbar />
      <Routes>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/trendingPage" element={<Trend />} />
        <Route path="/createPage" element={<CreatePage />} />
        <Route path="/readpage"element={<ReadPage />}/>
      </Routes>
    </WholeContainer>
  );
}

export default App;
