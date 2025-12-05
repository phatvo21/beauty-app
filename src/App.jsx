import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Treatments from './pages/treatments/Treatments'
import Portfolio from './pages/portfolio/Portfolio'
import Review from './pages/review/Review'
import GiftCard from './pages/gift-card/GiftCard'
import TermsConditions from './pages/t&c/TermsConditions'
import Contact from './pages/contact/Contact'

import Videos from './pages/videos/Videos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="reviews" element={<Review />} />
          <Route path="giftcards" element={<GiftCard />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="contact" element={<Contact />} />

          {/* VIDEOS */}
          <Route path="videos" element={<Videos />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
