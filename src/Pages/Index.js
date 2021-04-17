import React, { useState } from 'react'
import HeroSection from '../components/HeroSection/Index';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/Index';
import Navbar from '../components/Navbar/Index'
import Projects from '../components/Projects/Index';
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    return (
        <>
             <Sidebar isOpen={isOpen} toggle={toggle}/>
             <Navbar  toggle={toggle}/>
             <HeroSection/>
             <InfoSection {...homeObjOne}/>
             <InfoSection {...homeObjTwo}/>
            <Projects/>
            
        </>
    )
}

export default Home
