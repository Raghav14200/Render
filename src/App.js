import { useEffect } from 'react';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Createsection from './Components/Createsection/Createsection';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Headsection from './Components/Headsection/Headsection';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {

  useEffect(()=>{
    const button=document.querySelectorAll('.fade-up');
    
    window.addEventListener('scroll',()=>{
      button.forEach(button =>{
        var top=button.getBoundingClientRect().top;
        var windowheight=window.innerHeight;

        var revealpoint=120;

        if(top < windowheight - revealpoint){
          button.classList.add('fade-animate');
        }else{
          button.classList.remove('fade-animate');
        }
      })
    })
  },[])
  return (
    <div className="App">
      <Headsection/>
      <Navbar/>
      <section id="createsection">
      <Createsection/>
      <Gallery/>
      </section>
      <Portfolio/>
      <section id="news">
        <News/>
      </section>
      <section id="contact">
        <Contacts/>
        <Footer/>
      </section>
    </div>
  );
}



export default App;
