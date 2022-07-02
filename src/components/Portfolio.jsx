import React from "react";
import kfc from "../assets/portfolio/kfc.png";
import bluefly from "../assets/portfolio/bluefly.png";
import firefox from "../assets/portfolio/firefox.png";
import searchstar from "../assets/portfolio/searchstar.png";
import foodapp from "../assets/portfolio/foodapp.png";
import weatherapp from "../assets/portfolio/weatherapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: kfc,
      demoLink:"https://kfc-clone-masai.netlify.app/",
      codeLink:"https://github.com/optimizershivam/kfc_clone",
    },
    {
      id: 2,
      src: bluefly,
      demoLink:"https://stunning-stroopwafel-8b6ace.netlify.app/",
      codeLink:"https://github.com/optimizershivam/Bluefly-webapp",
    },
    {
      id: 3,
      src: firefox,
      demoLink:"https://capable-gecko-6d7ee1.netlify.app/",
      codeLink:"https://github.com/optimizershivam/firefox",
    },
    {
      id: 4,
      src: searchstar,
      demoLink:"https://searchstar-movie-app.netlify.app/",
      codeLink:"https://github.com/optimizershivam/",
    },
    {
      id: 5,
      src: foodapp,
      demoLink:"https://golden-horse-68ba4c.netlify.app/",
      codeLink:"https://github.com/optimizershivam/",
    },
    {
      id: 6,
      src: weatherapp,
      demoLink:"https://sparkling-cajeta-0d857b.netlify.app/",
      codeLink:"https://github.com/optimizershivam/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,codeLink,demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={demoLink}  target="_blank" rel="noreferrer">  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button></a>
                <a href={codeLink}  target="_blank" rel="noreferrer" >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
