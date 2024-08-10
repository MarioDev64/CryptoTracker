import React from 'react';
import avatar from '../assets/avatar.jpg'

const About: React.FC = () => {
  return (
        <div className="flex flex-wrap justify-center items-center max-w-[85%] mx-auto bg-white">
            <div className="max-w-[400px] w-full mb-6 md:mb-0">
                <figure className="max-w-lg mx-auto mt-6">
                    <img className="h-auto max-w-full rounded-lg" src={avatar} alt="Mario Torres profile image" />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">CryptoTracker Application Developer</figcaption>
                </figure>
            </div>

            <div className="max-w-[540px] text-center md:text-left">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-2">About me</h2>
                <h5 className="text-lg md:text-xl font-medium text-gray-900 mb-5">
                    Highly Skilled <span className="text-blue-600">Software Developer</span> &#128526;
                </h5>
                <p className="text-gray-600 text-justify leading-6 tracking-wide ml-2">
                    Mario Junior Torres Perez, known as MarioDev64 on GitHub, is a seasoned developer from the Dominican Republic with over 6 years of experience. He is dedicated to continuously learning new skills and enhancing his existing knowledge. His GitHub repositories showcase a variety of projects, including a wish list application, a weather forecasting app, and numerous web development projects. Based in Santo Domingo, Mario is an active contributor to open-source initiatives.
                </p>
            </div>
        </div>
        
   
  );
}

export default About;
