import ChatIcon from "./ChatIcon";
import Header from "./Header";
import ProblemSolver from "./ProblemSolver";
import RightSection from "./RightSection";

function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-[rgb(1,43,46)] to-[rgb(0,99,97)] min-h-screen w-full">
      <Header />
      <div className="md:px-[5rem] md:py-[3rem] px-[2rem] py-[1rem] flex relative">
        <ProblemSolver />
        <RightSection />
      </div>
      <div className="">
        <ChatIcon />
      </div>
    </div>
  );
}

export default HeroSection;
