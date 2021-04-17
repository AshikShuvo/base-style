import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarWrapper, SideBtnWrap,SidebarBtnRoute, SidebarMenu } from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80}
                     onClick={toggle}
                    to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink 
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80}
                     onClick={toggle}
                    to='tools'>
                        Tools
                    </SidebarLink>
                    <SidebarLink 
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80}
                     onClick={toggle}
                    to='projects'>
                        Projects
                    </SidebarLink>
                    {/* <SidebarLink 
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         onClick={toggle}
                         offset={-80}
                    to='signup'>
                        signup
                    </SidebarLink> */}
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarBtnRoute to='/signin'>
                        Sign in
                    </SidebarBtnRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
