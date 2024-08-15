import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Head from './Head.jsx'
import OurClass from './OurClass.jsx'
import OurTrainer from './OurTrainers.jsx'
import Purchase from './Purchase.jsx'
import Review from './Review.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head />
    <OurClass />
    <OurTrainer />
    <Purchase />
    <Review />
    <Contact />
    <Footer />
  </StrictMode>,
)
