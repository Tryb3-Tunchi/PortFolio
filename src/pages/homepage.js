const HomePage = () => {
  return (
    <div>
      <div id="Home" className=" mt-28 w-10/12 m-auto">
        <p className="font-mono my-4 text-xl"> Hi, my name is</p>
        <p className="my-4  text-5xl font-extrabold " >Obinna Tochukwu.</p>
        <p className="my-3 text-4xl font-extrabold font-sans text-gray-600">I build things for the web.</p>
        <p className="my-8 text-lg text-gray-400">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at <u className="text-red-300">Upstatement</u>.
        </p>
        <button className=" border-2 rounded-md p-4  hover:shadow-lg hover:shadow-red-300 sh">
          check out my course!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
