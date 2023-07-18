import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About Our Company
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              About the App
            </h3>
            <p className="text-gray-600">
              Simple weather app that provides real-time weather data according
              to cities. Users can search for a specific city and view detailed
              weather information, including temperature, humidity, wind speed,
              and more. The app utilizes the OpenWeatherMap API to fetch the
              latest weather data. Built using React JS and Tailwind CSS.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              About the Developer
            </h3>
            <p className="text-gray-600">
              Sanket Karki, a passionate software engineering student at
              Pokhara University. I have a strong interest in web development,
              particularly front-end technologies. My goal is to create
              user-friendly and visually appealing web applications that
              enhance the user experience. I constantly strive to expand my
              knowledge and stay up-to-date with the latest trends in web
              development.
            </p>
            <p className="text-gray-600">
              In addition to web development, I also enjoy exploring other areas
              of software engineering such as data structures, algorithms, and
              software design principles. I believe in continuous learning and
              improving my skills to deliver high-quality solutions.
            </p>
            <p className="text-gray-600">
              If you have any questions or would like to collaborate on an
              exciting project, feel free to reach out to me at
              sanketkarki@example.com. I'm always open to new opportunities and
              connecting with fellow developers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              At our company, our mission is to provide users with accurate and
              reliable weather information in a simple and intuitive manner.
              We believe that having access to real-time weather data empowers
              individuals to make informed decisions about their day-to-day
              activities, whether it's planning outdoor events, traveling, or
              staying prepared for changing weather conditions. Our goal is to
              deliver a seamless and enjoyable user experience while keeping
              the app lightweight and fast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
