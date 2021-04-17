import React from 'react'
import Icon1 from '../../images/dashboard.svg'
import Icon2 from '../../images/search.svg'
import Icon3 from '../../images/movie.svg'
import { ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper } from './ProjectsElement'

const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
            <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>HRM ERP</ProjectsH2>
                    <ProjectsP>An Employee Management software in production</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Github Finder</ProjectsH2>
                    <ProjectsP>Here You Can Search And see git hub profile</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Breaking Bad</ProjectsH2>
                    <ProjectsP>A port folio Web site for breaking bad web series</ProjectsP>
                </ProjectsCard>

            </ProjectsWrapper>
            
        </ProjectsContainer>
    )
}

export default Projects
