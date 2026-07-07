import { useState } from 'react'
import PersonalDetails from './components/PersonalDetails'
import Socials from './components/Socials'
import Modal from './components/Modal'
import './App.css'
import NavBar from './components/NavBar'
import About_Me from './components/About_Me'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='Portfolio'>
        <section className='static-section'>
          {/* personal details */}
          <PersonalDetails onOpenModal={() => setIsModalOpen(true)}/>
          <Socials />
        </section>
        
        <section className='scroll-section'>
          <NavBar>
            {/* this will be static */}
            {/* jobs and skills, projects, interests */}
          </NavBar>
          <div className='resume'>
            <About_Me />
            {/* relevant jobs */}
            {/* transferable skills */}
            {/* projects */}
            {/* interests */}
          </div>
        </section>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}/>
      )}
    </>
  )
}

export default App
