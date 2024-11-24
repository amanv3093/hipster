import { motion } from "framer-motion";
import LaptopImg from "../../assets/laptop-main.webp";
import HollowCircle from "../../assets/hollow-circle.webp";
import Ladder from "../../assets/ladder.webp";
import codeImg from "../../assets/group-21.webp";
import round from "../../assets/round-1-01.webp";
import blackLadder from "../../assets/ladder-back-circle.webp";
import whiteBall from "../../assets/white-ball.webp";
import slantCircle from "../../assets/slant-circle.webp";
import group45 from "../../assets/group-45.webp";
import ballChess from "../../assets/ball-chess.webp";
import cone from "../../assets/cone.webp";
import greenCircle from "../../assets/slant-green-circle.webp";
function RightSection() {
  return (
    <div className="relative flex items-center justify-center flex-1">
      {/* Laptop Animation */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="md:relative md:block hidden z-50 xl:right-[3rem] xl:top-0 top-[-3rem] "
      >
        <img
          src={LaptopImg}
          alt="Laptop display"
          className="xl:h-[15rem] lg:h-[12rem] h-[10rem]  "
        />
      </motion.div>

      {/* Hollow Circle Background */}
      <motion.div
        initial={{ rotateX: 0, rotateY: 0 }}
        // animate={{
        //   rotateX: [0, -185],
        //   rotateY: [0, 100],
        // }}
        // transition={{
        //   duration: 7, // Total duration for one full rotation cycle
        //   repeat: Infinity, // Infinite looping
        //   repeatType: "loop", // Smooth looping
        //   ease: "easeInOut", // Smooth transitions
        // }}
        className="absolute xl:block hidden  top-[10rem] left-[3rem] transform-style[preserve-3d] z-10  "
      >
        <img
          src={HollowCircle}
          alt="Hollow circle decoration"
          className="h-[16rem] w-[22rem] -rotate-[185deg]"
        />
      </motion.div>
      {/* ballChess*/}
      <motion.div
        animate={{
          rotate: [0, 360], // Rotate 360 degrees
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute md:block hidden   xl:top-[10rem]  xl:left-[5rem]  bottom-[9rem]  left-[2rem] z-0 "
      >
        <img src={ballChess} alt="ballChess" className="xl:h-[5rem] h-[4rem]" />
      </motion.div>

      <img
        src={cone}
        alt="cone"
        className="absolute md:block hidden xl:top-[2rem]  xl:left-[14rem] md:top-[26px]  md:left-[2rem] top-[7px]  left-[7rem]  z-10"
      />
      <img
        src={greenCircle}
        alt="greenCircle"
        className="absolute md:block hidden xl:top-[1rem]  xl:left-[12rem]  md:top-[2rem] md:left-[1rem] top-[2rem] left-[6rem] z-0"
      />

      <img
        src={group45}
        alt="group45"
        className="absolute md:block hidden xl:top-[11rem]  xl:left-[0rem] top-[17rem] left-[6rem] z-20 xl:h-[70px] h-[60px] "
      />

      {/* Ladder */}
      <img
        src={Ladder}
        alt="Ladder"
        className="absolute  bottom-[3rem] right-[1rem] z-30 xl:block hidden "
      />
      <img
        src={codeImg}
        alt="codeImg"
        className="absolute md:block hidden xl:top-[1rem] xl:right-[11rem]  xl:h-[5rem] h-[4rem] -top-[2rem] right-[6rem]  z-40"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute md:block hidden xl:top-[-3rem] xl:right-[23rem] top-[-3rem] right-[12rem]"
      >
        <img src={round} alt="codeImg" className=" xl:h-[8rem] h-[7rem] " />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute md:block hidden xl:top-[-4px]  xl:right-[5rem] -top-[3rem] right-[0rem] z-0"
      >
        <img
          src={blackLadder}
          alt="blackLadder"
          className=" xl:h-[10rem] h-[8rem] "
        />
      </motion.div>
      <img
        src={whiteBall}
        alt="whiteBall"
        className="absolute md:block hidden xl:bottom-[11rem]  xl:right-[13rem] bottom-[7rem]  right-[8rem] z-0 xl:h-[88px] h-[70px]"
      />
      <motion.div
        animate={{
          x: [0, 300, 0, 0, 0],

          // Rotation: Clockwise while moving right, counterclockwise while moving left
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{
          duration: 10, // Total duration of one cycle
          repeat: Infinity, // Repeat infinitely
          repeatType: "loop", // Loop the animation
          ease: "easeInOut", // Smooth transitions
        }}
        className="absolute md:block hidden bottom-[-3rem] left-[5rem] z-0"
      >
        <img
          src={blackLadder}
          alt="blackLadder"
          className="xl:h-[11rem] h-[7rem]"
        />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360], // Rotate 360 degrees
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute md:block hidden xl:-bottom-[4rem] xl:right-[7rem] -bottom-[2rem] right-0 transform-style[preserve-3d] z-10"
      >
        <img
          src={slantCircle}
          alt="slantCircle"
          className="xl:h-[14rem] xl:w-[14rem] h-[10rem] w-[10rem] rotate-[360deg]"
        />
      </motion.div>
    </div>
  );
}

export default RightSection;
