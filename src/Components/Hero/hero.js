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
        Words about how I may help employers with my awesome Ninja hacking
        skills.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
