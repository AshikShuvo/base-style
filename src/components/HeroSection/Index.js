import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import video from './../../videos/video.mp4'
import {Button} from '../ButtonElement';
import Type from 'typewriter-effect'
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video}  type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Hi, I am <strong>Ashik Ahmmed Shuvo</strong>
                </HeroH1>
                <HeroP>
                    I Love <Type
                        options={{
                            strings: [
                              "JavaScript",
                              "To Play with JavaScript Base Library or Framework",
                              "Problem Solving ",
                              "To Visualize Ideas Through Codding",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                          }}
                        />
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover}onMouseLeave={onHover} primary='true' dark='true'>
                        GetStarted {hover?<ArrowForward/>:<ArrowRight/>}

                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
