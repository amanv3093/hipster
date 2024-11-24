function ProblemSolver() {
  return (
    <div className="xl:max-w-[30%] md:max-w-[37%] max-w-[100%]">
      <h1 className="text-white  lg:text-[38px] text-[30px] font-normal lg:leading-[48px] leading-[36px]">
        Problem solvers equipped with the tools of design and tech
      </h1>
      <p className="text-[#ccc] text-lg my-[30px] leading-7">
        We are a digital agency based in Singapore that specialises in creating
        user-centric tech applications and platforms for businesses worldwide.
      </p>
      <button className="relative font-semibold text-base w-[160px] py-[13px] rounded-full hover:text-white hover:border-[#031a1b] bg-white overflow-hidden group">
        <span className="relative z-10">Contact us</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#031a1b] to-[#031a1b]  transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </button>
    </div>
  );
}

export default ProblemSolver;
