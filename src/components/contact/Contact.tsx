import Link from "next/link";

const Contact = () => {
  return (
    <div className="my-20 px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="secondaryHeader mb-10">contact us</h1>
        <div className="flex space-x-8">
          <Link
            href="#"
            className="text underline hover:decoration-highlight hover:text-highlight
            transition-all delay-0 duration-500
            "
          >
            facebook
          </Link>
          <Link
            href="#"
            className="text underline hover:decoration-highlight hover:text-highlight
            transition-all delay-0 duration-500
            "
          >
            instagram
          </Link>
          <Link
            href="#"
            className="text underline hover:decoration-highlight hover:text-highlight
            transition-all delay-0 duration-500
            "
          >
            linkedin
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-8">
        <input
          type="text"
          placeholder="Email Address"
          className="border-b bg-opacity-0 bg-black py-2 placeholder:text-ghostGray text-white"
        />
        <input
          type="text"
          placeholder="How did you find us?"
          className="border-b bg-opacity-0 bg-black py-2 placeholder:text-ghostGray text-white"
        />
        <input
          type="text"
          placeholder="Budget"
          className="border-b bg-opacity-0 bg-black py-2 placeholder:text-ghostGray text-white"
        />
        <input
          type="text"
          placeholder="First and Last name"
          className="border-b bg-opacity-0 bg-black py-2 placeholder:text-ghostGray text-white"
        />
      </div>
      <div className="hidden md:block w-full h-[1px] bg-white mt-24" />
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 md:justify-between">
        <div className="flex flex-col my-8 space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="appearance-none border p-2 checked:bg-highlight"
            />
            <p className="text">
              By checking this box you authorize us to the {""}
              <span className="underline">
                processing of your personal data
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="appearance-none border p-2 checked:bg-highlight"
            />
            <p className="text">Subscribe to our newsletter</p>
          </div>
        </div>
        <button className="border text w-[211px] py-6 px-10 rounded-full h-fit hover:border-none hover:bg-highlight transition-all duration-500 delay-0">
          submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
