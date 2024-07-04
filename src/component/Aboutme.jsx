import React, { useEffect, useState } from 'react';
import pic1 from '../assets/20240517_143946.jpg';

const Aboutme = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const updateTimeAndDay = () => {
      const now = new Date();
      const timeUTC = now.toUTCString().split(' ')[4];
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDay = daysOfWeek[now.getUTCDay()];

      setCurrentTime(timeUTC);
      setCurrentDay(currentDay);
    };

    updateTimeAndDay();
    const intervalId = setInterval(updateTimeAndDay, 1000); // Update time and day every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="bg-background py-5">
      <div className="flex items-center container mx-auto">
        <div className="grid md:grid-cols-7 grid-cols-1">
          <div className="col-span-2 md:order-2 order-1 flex justify-center md:justify-start">
            <img 
              src={pic1} 
              alt="Slack Profile" 
              className="rounded-full" 
              data-testid="slackProfilePicture" 
            />
          </div>
          <div className="md:col-span-3 md:col-start-2 md:order-1 order-2 break-words flex flex-col mx-5 align-middle justify-center h-full">
            <h1 className="text-white text-6xl text-center md:text-left font-[400]">About Me</h1>
            <h1 className="text-white text-center md:text-left md:pt-4">
              My name is Golden. I am a skilled web developer with a Bachelor of Science
              degree in Computer Science. With a solid foundation in both
              theoretical and practical aspects of computing, I excel in
              creating dynamic and responsive web applications. Combining
              technical proficiency with a keen eye for design.
            </h1>
            <div className="text-white text-center md:text-left md:pt-4">
              <p>
                Slack Display Name: <span data-testid="slackDisplayName">Goldyn</span>
              </p>
              <p>
                Current Time in UTC: <span data-testid="currentTimeUTC">{currentTime}</span>
              </p>
              <p>
                Current Day of the Week: <span data-testid="currentDay">{currentDay}</span>
              </p>
              <p>
                Slack Email: <span data-testid="slackEmail">nwaezegolden2002@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
