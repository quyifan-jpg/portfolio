import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Yifan Qu <br />
          A Software Developer <br />
        </SectionTitle>
        <SectionText>
        I'm a fourth-year undergrad specializing in Computer Science at the UofT who is passionate about continuously learning and contributing to innovative devices and cutting-edge technology.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;