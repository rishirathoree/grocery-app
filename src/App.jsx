import Aside from "./Pages/Aside";
import "boxicons/css/boxicons.min.css";
import Home from "./Pages/Home";
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({once:false})

function App() {

  return (
    <>
      <div className="flex w-full h-screen">
        <Aside />
        <Home />
      </div>
    </>

  );
}

export default App;
