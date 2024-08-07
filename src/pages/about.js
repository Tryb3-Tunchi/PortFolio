import { CiUser } from "react-icons/ci";

import { CgProfile } from "react-icons/cg";

const About = () => {
  return (
    <div id="Home" className=" mt-28 w-5/6 m-auto">
      <ol className="list-decimal list-inside text-xl">
        <li className="text-4xl my-10 font-extrabold ">About Me</li>
      </ol>
      <div>
        {/* <p className="animate-none">< CiUser /> <TiAdjustBrightness /></p>
         */}

        <p className="text-lg text-gray-500 mb-8 ">
          Hello! My name is Tochukwu and I enjoy creating things that live on
          the internet. My interest in web development started back in 2022 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
          <div className="">
            <p className="my-4 text-gray-800">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="flex justify-between mx-2 mt-2 md:w-4/6">
              <ul className="list-disc list-inside">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
              <ul className="list-disc list-inside mr-10 ">
                <li>TypeScript</li>
                <li>TailwindCss</li>
                <li>NextJs</li>
              </ul>
            </div>
          </div>
        </p>
        <div>
          <p className="overflow-hidden py-6 m-auto hover:scale-110 transition-transform ease-in-out shadow hover:shadow-lg w-1/4">
            {" "}
            <CgProfile />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
