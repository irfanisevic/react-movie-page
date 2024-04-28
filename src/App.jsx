import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import Trending from "./components/Trending";
import "./style/landingpage.css";
import SuperHero from './components/SuperHero';

function App() {
    return (
    <div>
    {/* intro section */}
    <div className="myBG">
      
      <NavigationBar />
      <Intro />
    </div>
    {/* end of intro */}

    {/* trending section */}
    <div className="trending">
      <Trending />
    </div>
    {/* end of trending session */}

      <div className="superhero">
        <SuperHero />
      </div>

    </div>
  )
}

export default App
