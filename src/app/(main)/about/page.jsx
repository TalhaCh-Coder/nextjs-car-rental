import AboutHeader from "@/components/aboutComponents/AboutHeader";
import OurMission from "@/components/aboutComponents/OurMission";
import OurTeam from "@/components/aboutComponents/OurTeam";
import SuccessStory from "@/components/aboutComponents/SucessStory";

function About() {
  return (
    <>
      <div className="overflow-hidden">
        <AboutHeader/>
        <OurMission/>
        <OurTeam/>
        <SuccessStory/>
      </div>
    </>
  );
}

export default About;
