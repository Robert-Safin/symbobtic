


const Footer = () => {
  return (
    <div className="px-6 ">
      <div className="w-full h-[1px] bg-white"/>
      <div className="flex justify-between my-4">
        <h1 className="blogText underline hover:text-highlight hover:decoration-highlight">Symbobtic | Copyright 2023</h1>
        <div className="flex space-x-1 md:space-x-6">
          <p className="blogText underline hover:text-highlight hover:decoration-highlight">Privacy Policy</p>
          <p className="blogText underline hover:text-highlight hover:decoration-highlight">Cookie Policy</p>
          <p className="blogText underline hover:text-highlight hover:decoration-highlight">Aggiorna preferenze cookie</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
