import Accomplishments from "../Components/Accomplishments/accomplishments";
import BackgroundAnimation from "../Components/BackgroundAnimation/backgroundAnimation";
import Hero from "../Components/Hero/hero";
import Projects from "../Components/Projects/projects";
import Technologies from "../Components/Technologies/technologies";
import Timeline from "../Components/TimeLine/timeLine";
import { Layout } from "../Layout/layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
    </Layout>
  );
};

export default Home;
