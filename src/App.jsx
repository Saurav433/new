import Movie from "./Component/Movie"
import{BrowerRouter,Routes,Route} from "react-router-dom"
import About from "./Component/pages/About"
import Navbar from "./Component/Navigation/Navbar"
import Home from "./Component/pages/Home"
import Contact from "./Component/pages/Contact"
function App() {
  return (
    <>
    <BrowerRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/movie" element={<Movie/>}/>
    </Routes>
    </BrowerRouter>
    {/* <div className="grid grid-cols-4">
    <Movie title="Avengers" duration="2hrs 25min" date="2012"/>
    <Movie title="spider man" duration="2hrs 50min" date="2009"/>
    <Movie title="hami tinn bhai" duration="2hrs 5min" date="2011"/>
    <Movie title="Thor" duration="3hrs" director="Saurav G.C" date="2008"/>
    </div>  */}
    </>
  )
}
export default App
