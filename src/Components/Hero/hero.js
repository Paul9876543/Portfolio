import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../Styles/GlobalComponents";
import Button from "../../Styles/GlobalComponents/button";
import { LeftSection } from "./heroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, my name is <br />
        Paul Dodson <br />
        And I am a <span>Software Engineer</span>
      </SectionTitle>
      <SectionText>
        My life up till now has been a long learning experience preparing me for
        a journey into coding and software engineering. I began in the US Army
        where I learned teamwork, comradery, leadership, a hard work ethic with
        a "no quit attitude", among many other skills. After graduating from
        Yavapai College I opened my own business creating custom firearms where
        I learned how to work independently, honing my time management skills.
        My family and I had the opportunity to start a new adventure in Vermont
        and I had the opportunity to start a new adventure in coding.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
