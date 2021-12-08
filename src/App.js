import Header from './components/Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {FeedbackProvider} from './context/FeedbackContext'
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm'
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage'


function App() {

    return(
    <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" exact element={
                        <>
                            <FeedBackForm />
                            <FeedBackStats />
                            <FeedBackList  />
                        </>
                    }>
                    </Route> 

                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    </FeedbackProvider>
    )
}

export default App;