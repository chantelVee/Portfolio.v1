import { useState } from 'react'
import {useScroll, useMotionValueEvent, LayoutGroup} from "framer-motion";
import PersonalDetails from './components/PersonalDetails'
import Socials from './components/Socials'
import Modal from './components/Modal'
import './App.css'
import NavBar from './components/NavBar'
import About_Me from './components/About_Me'
import CareerHistory from './components/CareerHistory';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {scrollY} = useScroll();


  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 230 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 230 && isScrolled)  {
      setIsScrolled(false);
    }
  });

  return (
    <>
    <LayoutGroup>
      <div className='Portfolio'>
        <section className='static-section'>
          {/* personal details */}
          <PersonalDetails onOpenModal={() => setIsModalOpen(true)}/>
          <Socials />
        </section>
        
        <section className='scroll-section'>
          <NavBar isScrolled={isScrolled} />
            
          
          <div className='resume'>
            <About_Me isScrolled={isScrolled} />
            <CareerHistory />
            <Education />
            <Projects/>
            <Contact />
          </div>
        </section>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}/>
      )}
    </LayoutGroup>
      
    </>
  )
}

export default App
