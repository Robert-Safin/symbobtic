const About = () => {
  return (
    <div className="relative">
      <div className="absolute h-[1px] w-20 bg-white left-6 top-4" />
      <div className="hidden md:block absolute h-[1px] w-[calc(100vw-24px-700px)] bg-white right-6 top-4" />

      <div className="flex flex-col ml-20 my-20 md:my-40 px-10 max-w-[700px]">
        <h1 className="secondaryHeader mb-8">
          the big things, like the small ones, <br /> everything fascinates us.
        </h1>

        <p className="text mb-4 max-w-[500px]">
          every day we have the ambition to
          <span className="underline decoration-highlight decoration-4">
            {""} simplify complexity.
          </span>
        </p>

        <p className="text mb-4 max-w-[500px]">
          we don`t provide standard answers for just any problem, but only the
          solution designed specifically for you.
        </p>
        <p className="text mb-4 max-w-[500px]">
        we believe in ideas that can embrace a strategic vision.
        </p>
        <p className="text mb-4 max-w-[500px]">
          we pledge our actions and execute with unwavering follow-through.
        </p>
      </div>
      <div className="absolute h-[1px] w-[calc(100vw-56px)] right-8 bg-white -bottom-10" />
    </div>
  );
};

export default About;
