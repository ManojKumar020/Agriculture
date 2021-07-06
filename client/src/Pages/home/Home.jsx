import './home.css';
import Header from "../../components/header/Header";
import Homeposts from"../../components/homeposts/Homeposts";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {

    return (
        <> 
          <Header/>
          <div className='home'>
              <Homeposts/>
              <Sidebar/>            
          </div>
          
        </>
    )
}

export default Home
