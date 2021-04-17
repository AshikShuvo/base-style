import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MobileIcon, NaBtnLink, Nav, NavbarContainer, NavBtn, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll';
const Navbar = ({toggle}) => {
  const [scrollNav,setScrollNav]=useState(false);
  const changeNav=()=>{
    if(window.scrollY>=80){
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  } 
  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[])
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
    return (
        <>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to={'/'} onClick={toggleHome}>
                        ME
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                    <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                        <NavLinks 
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          
                        to='about'>About</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks  smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}to='tools'>Tools</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks  smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}to='projects'>Projects</NavLinks>
                      </NavItem>
                      {/* <NavItem>
                        <NavLinks  smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}to='signup'>signup</NavLinks>
                      </NavItem> */}
                  </NavMenu>
                  {/* <NavBtn>
                      <NaBtnLink to='signin'>Sign in</NaBtnLink>
                  </NavBtn> */}

              </NavbarContainer>
          </Nav>  
        </>
    )
}

export default Navbar
