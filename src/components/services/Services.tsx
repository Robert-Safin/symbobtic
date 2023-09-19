import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="flex flex-row px-6 space-x-10 md:space-x-40 mb-20">
        <h1 className="serviceHeader font-inter">services</h1>
        <div className="flex flex-col lg:flex-row justify-between w-full pr-6">
          <div>
            <h1 className="serviceHeader mb-3 underline hover:text-highlight hover:decoration-highlight decoration-4">
              brand design
            </h1>
            <p className="text mb-[6px] hover:text-highlight">brand strategy</p>
            <p className="text mb-[6px] hover:text-highlight">
              brand & rebranding
            </p>
            <p className="text mb-[6px] hover:text-highlight">logo design</p>
            <p className="text mb-[6px] hover:text-highlight">
              visual identity
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              packaging design
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              corporate identity
            </p>
          </div>

          <div>
            <h1 className="serviceHeader mb-3 mt-8 lg:mt-0 underline hover:text-highlight hover:decoration-highlight decoration-4">
              brand design
            </h1>
            <p className="text mb-[6px] hover:text-highlight">brand strategy</p>
            <p className="text mb-[6px] hover:text-highlight">
              brand & rebranding
            </p>
            <p className="text mb-[6px] hover:text-highlight">logo design</p>
            <p className="text mb-[6px] hover:text-highlight">
              visual identity
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              packaging design
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              corporate identity
            </p>
          </div>

          <div>
            <h1 className="serviceHeader mb-3 mt-8 lg:mt-0 underline hover:text-highlight hover:decoration-highlight decoration-4">
              brand design
            </h1>
            <p className="text mb-[6px] hover:text-highlight">brand strategy</p>
            <p className="text mb-[6px] hover:text-highlight">
              brand & rebranding
            </p>
            <p className="text mb-[6px] hover:text-highlight">logo design</p>
            <p className="text mb-[6px] hover:text-highlight">
              visual identity
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              packaging design
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              corporate identity
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/img/satalite.png"
          width={1000}
          height={1000}
          alt=""
          className="-z-10 absolute object-cover
          h-[420px] w-full -right-20
          md:h-[700px] md:-right-72
          lg:w-[790px] lg:right-0
          "
        />
        <h1 className="quoteHeader px-4 absolute top-14 left-6 md:top-20">
          Technology is the wizard`s wand that turns today`s dreams into {""}
          <span className="relative">
            <span>tomorrow`s {""}</span>
            <div className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-8 md:bottom-2
            "/>
          </span>
          <span className="relative">
            <span>realities.</span>
            <div className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-8 md:bottom-2
            "/>
          </span>
        </h1>
        <p
          className="quoteText absolute top-[300px] right-10 max-w-[50px]
        md:top-[500px] md:right-24
        "
        >
          Leon C. Megginson
        </p>
      </div>
    </>
  );
};

export default Services;
