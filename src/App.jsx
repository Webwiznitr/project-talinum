import React from 'react'
import BannerHead from './components/BannerHead'
import Faq from './pages/FAQs/Faq'
import FAQPage from './pages/FAQs/FAQPage'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Faq/>} />
          <Route path='/FAQPage' element={<FAQPage/>} />
        </Routes>
      </Router>
    </div>

  )
}

export default App