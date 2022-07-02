import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I am Shivam Sharma, a Full Stack Web developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web development since 2021. I enjoy creating beautifully designed, intuitive and functional websites.
        </p>

        <br />

        <p className="text-xl">
        I also love Data Structure and algorthims. I Enjoy Doing this along with building web Application. I am Always energetic and eager to learn new skills, motivated & always coming up with innovative ideas. Feel Free to reach out to me
        </p>
      </div>
    </div>
  );
};

export default About;
