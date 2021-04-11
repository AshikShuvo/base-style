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
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover'>
                        discover
                    </SidebarLink>
                    <SidebarLink to='services'>
                        services
                    </SidebarLink>
                    <SidebarLink to='signup'>
                        signup
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtnRoute to='/signin'>
                        Sign in
                    </SidebarBtnRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
