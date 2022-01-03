import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../Styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

// const data = [
//   { number: 20, text: "Open Source Projects" },
//   { number: 1000, text: "Students" },
//   { number: 1900, text: "Github Followers" },
//   { number: 5000, text: "Github Stars" },
// ];

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Resume</SectionTitle>
    {/* <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}
  </Section>
);

export default Accomplishments;
