import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import video from './../../videos/video.mp4'
import {Button} from '../ButtonElement';
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
                    Hi There!You are at the right place.
                </HeroH1>
                <HeroP>
                    We ensure premium and most error free services for you and your company via providing some smart software. 
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
