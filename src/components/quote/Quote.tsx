import Image from "next/image";

const Quote = () => {
  return (
    <div className="relative mb-20">
      <div className="lg:flex lg:justify-start">
      <Image
        src="/quote.png"
        width={1000}
        height={1000}
        alt=""
        className="w-full h-[420px] md:h-[590px] object-cover lg:w-[720px]"
      />

      </div>
      <h1 className="quoteHeader top-24 absolute right-6 z-10 text-right max-w-[330px] md:max-w-[900px] lg:left-20">
        Man cannot discover new oceans unless he has the courage to {""}
        <span className="relative">
          lose {""}
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-2 md:bottom-2"
          />
        </span >
        <span className="relative">
          sight {""}
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-2 md:bottom-2"
          />
        </span>
        <span className="relative">
          of {""}
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-2 md:bottom-2"
          />
        </span>
        <span className="relative">
          the {""}
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-2 md:bottom-2"
          />
        </span>
        <span className="relative">
          shore.
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-2 md:bottom-2"
          />
        </span>
        <span>
          <div />
        </span>
      </h1>
      <p className="text bottom-6 left-6 absolute z-10">Arthur C. Clarke</p>
    </div>
  );
};

export default Quote;
