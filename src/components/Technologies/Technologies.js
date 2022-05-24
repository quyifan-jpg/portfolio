import React from 'react';
import { DiFirebase, DiReact, DiZend,DiChrome,ImMobile } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { HiDeviceMobile } from "react-icons/hi";

import { AiOutlineNumber } from "react-icons/ai";
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiChrome size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js and Angular throught implementing social media app and internship Experiece
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Scala, Relational / Non-relational database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Neural network <br />
            Naive Bayes and Variable inference
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <HiDeviceMobile size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            Swift, Storyboard, React Native, <br />
            throught implementing a Healthy Lifestyle app <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineNumber size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Operating System</ListTitle>
          <ListParagraph>
          Experienced with File system, <br />
          Multithread message queue, crytography and <br />
          Cache system
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineNumber size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>High-level Algorithms</ListTitle>
          <ListParagraph>
          Solid understanding of algorithms including greedy algorithm, Dynamic Programmming and Linear Programming algorithm.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
