const Plan = () => {
  return (
    <div className="w-full relative pl-20 my-20 pr-6 mb-52">
      <div className="absolute w-[32px] left-6 top-4 h-[1px] bg-white md:top-6"/>
      <div className="hidden md:block absolute w-[calc(100vw-570px)] right-6 top-4 h-[1px] bg-white md:top-6"/>
      <h1 className="secondaryHeader mb-8">we plan for the future.</h1>
      <h1 className="text mb-24 max-w-[200px] md:max-w-[400px]">
        In chaotic moments, language and communication can make all the
        difference. There are our {""}
        <div className="relative inline-block">
          5 pillars.
          <div className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight md:h-3" />
        </div>
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-center">
          <h1 className="numberHeader w-28 md:w-48">01</h1>
          <h1 className="text w-28 md:w-48">
            Design content as if you were inspiring the {""}
            <span className="relative text">
              future
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
          </h1>
        </div>

        <div className="flex items-center">
          <h1 className="numberHeader w-28 md:w-48">02</h1>
          <h1 className="text w-28 md:w-48">
            <span className="relative text">
              Value
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            {""} those who read and enjoy your content.
          </h1>
        </div>

        <div className="flex items-center">
          <h1 className="numberHeader w-28 md:w-48">03</h1>
          <h1 className="text w-28 md:w-48">
            Use a {""}
            <span className="relative text">
              human
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            {""} voice, not a tone of voice.
          </h1>
        </div>

        <div className="flex items-center">
          <h1 className="numberHeader w-28 md:w-48">04</h1>
          <h1 className="text w-28 md:w-48">
            Uphold {""}
            <span className="relative text">
              ethics {""}
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            <span className="relative text">
              and
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            <span className="relative text">
              values.
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
          </h1>
        </div>

        <div className="flex items-center">
          <h1 className="numberHeader w-28 md:w-48">05</h1>
          <h1 className="text w-28 md:w-48">
            Guide actions, solve problems and {""}
            <span className="relative text">
              change
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            <span className="relative text">
              {""} lives.
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="absolute w-[calc(100vw-48px)]  h-[1px] bg-white right-6 -bottom-20"/>

    </div>
  );
};

export default Plan;
