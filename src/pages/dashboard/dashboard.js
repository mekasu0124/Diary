// import modules
import { useEffect, useState } from "react";
import { useAuth } from '../hooks/authContext';
import { useNavigate } from "react-router-dom";

/*
A panel component is a screen within a screen.
On the home page, there are two panel components.
One panel component shows the user's previous entries.
This is a page within a page as this can easily be changed
into a route in the App.js and it'll become it's own page.
The second panel component is the New Entry component. Again,
it can also be given it's own route in App.js and turned into
it's own page
*/


// import panel components
import PreviousEntries from "../../components/panel/home/previousEntries";
import NewEntry from "../../components/panel/home/newEntry";

// import individual components
import TitleBar from "../components/individual/titleBar";


export default function Dashboard() {
  /*
  The screen does not automatically pull the user from the
  authContext.js file therefore we use the useEffect hook
  from react to refresh who the current logged in user is
  based off the authContext file's currently stored local
  user as the screen initially renders. If the user does
  not exist, or it errors on loading the user's data,
  we re-route the user to login again.
  */
  const [currentUser, setCurrentUser] = useState(null);
  
  const user = useAuth();
  const navigate = useNavigate('');

  useEffect(() => {
    if (user && user.username) {
      setCurrentUser(user);
    }
  }, [user, setCurrentUser, navigate]);

  // remove once development of screen is complete
  const tempEntries = [
    {
      id: 1,
      title: 'Exploring the Cosmos',
      details: 'The universe is vast and mysterious, filled with galaxies, stars, and planets. Exploring space has been a dream of humanity, and through telescopes and spacecraft, we continue to learn about the cosmos, uncovering the secrets of black holes, supernovae, and distant galaxies.',
      date: '2023-10-01',
      time: '10:00:00 AM'
    },
    {
      id: 2,
      title: 'The History of Computing',
      details: 'From the invention of the abacus to the modern era of quantum computing, the evolution of computing has transformed human society. Each breakthrough, from the ENIAC to personal computers, reflects our ingenuity and need for progress.',
      date: '2023-10-02',
      time: '11:15:00 AM'
    },
    {
      id: 3,
      title: 'Sustainable Energy Solutions',
      details: 'As climate change accelerates, the need for sustainable energy solutions has become paramount. Innovations in solar, wind, and hydroelectric energy are paving the way for a greener future, reducing our reliance on fossil fuels.',
      date: '2023-10-03',
      time: '01:30:00 PM'
    },
    {
      id: 4,
      title: 'The Beauty of Marine Life',
      details: 'Oceans cover over 70% of Earth and are home to a diverse range of life forms. From vibrant coral reefs to mysterious deep-sea creatures, marine ecosystems are critical to the planet’s health, offering food and oxygen while regulating the climate.',
      date: '2023-10-04',
      time: '09:45:00 AM'
    },
    {
      id: 5,
      title: 'Advances in Medicine',
      details: 'Medical science has made remarkable strides, from the discovery of antibiotics to cutting-edge gene therapy. These advancements are increasing life expectancy and improving the quality of life for millions worldwide.',
      date: '2023-10-05',
      time: '02:00:00 PM'
    },
    {
      id: 6,
      title: 'The Art of Storytelling',
      details: 'Storytelling has been a cornerstone of human culture for millennia, shaping our understanding of the world. Whether through oral traditions, literature, or films, stories have the power to educate, entertain, and inspire.',
      date: '2023-10-06',
      time: '10:30:00 AM'
    },
    {
      id: 7,
      title: 'The Importance of Mental Health',
      details: 'Mental health is as important as physical health, influencing how we think, feel, and act. Recognizing and addressing mental health issues is crucial for fostering resilience, improving relationships, and achieving a balanced life.',
      date: '2023-10-07',
      time: '03:45:00 PM'
    },
    {
      id: 8,
      title: 'The Role of Technology in Education',
      details: 'Technology is revolutionizing education by making learning more accessible and personalized. Tools like online courses, virtual classrooms, and educational apps are breaking down barriers and empowering students worldwide.',
      date: '2023-10-08',
      time: '08:15:00 AM'
    },
    {
      id: 9,
      title: 'The Evolution of Art',
      details: 'Art has evolved through the centuries, reflecting changes in society, culture, and technology. From cave paintings to digital art, each era brings new forms of expression and mediums to explore.',
      date: '2023-10-09',
      time: '01:15:00 PM'
    },
    {
      id: 10,
      title: 'Climate Change Challenges',
      details: 'The impacts of climate change are undeniable, with rising temperatures, extreme weather events, and melting ice caps. Addressing these challenges requires collective action and innovative solutions at local, national, and global levels.',
      date: '2023-10-10',
      time: '12:00:00 PM'
    },
    {
      id: 11,
      title: 'The Power of Music',
      details: 'Music transcends language and culture, serving as a universal form of expression. It has the ability to evoke emotions, tell stories, and bring people together, making it an integral part of human life.',
      date: '2023-10-11',
      time: '04:30:00 PM'
    },
    {
      id: 12,
      title: 'The Impact of Social Media',
      details: 'Social media has transformed how we connect, communicate, and share information. While it has created opportunities for global connectivity, it also poses challenges like misinformation and privacy concerns.',
      date: '2023-10-12',
      time: '09:00:00 AM'
    },
    {
      id: 13,
      title: 'The Wonders of Space Exploration',
      details: 'Humanity’s exploration of space continues to push boundaries, from landing on the moon to exploring Mars. These missions deepen our understanding of the universe and inspire the next generation of scientists and explorers.',
      date: '2023-10-13',
      time: '10:45:00 AM'
    },
    {
      id: 14,
      title: 'The Significance of Biodiversity',
      details: 'Biodiversity is vital for maintaining ecosystem balance and resilience. Protecting diverse species ensures the stability of our environment, which is essential for agriculture, medicine, and overall human well-being.',
      date: '2023-10-14',
      time: '11:30:00 AM'
    },
    {
      id: 15,
      title: 'The Future of Artificial Intelligence',
      details: 'AI is reshaping industries with applications in healthcare, finance, and beyond. While it offers immense potential, ethical considerations and societal impacts must be addressed to ensure it benefits humanity.',
      date: '2023-10-15',
      time: '02:15:00 PM'
    },
    {
      id: 16,
      title: 'The Dynamics of Global Trade',
      details: 'Global trade connects nations and drives economic growth, but it also brings challenges like trade imbalances and disputes. Understanding these dynamics is key to fostering fair and sustainable trade policies.',
      date: '2023-10-16',
      time: '03:30:00 PM'
    },
    {
      id: 17,
      title: 'The Science of Nutrition',
      details: 'Nutrition science explores how food affects health and well-being. By understanding the nutrients in our diet, we can make informed choices that support a healthy lifestyle and prevent chronic diseases.',
      date: '2023-10-17',
      time: '08:45:00 AM'
    },
    {
      id: 18,
      title: 'The Importance of Community',
      details: 'Communities provide support, shared identity, and a sense of belonging. Strengthening community ties is essential for social cohesion and collective well-being, especially in an increasingly digital world.',
      date: '2023-10-18',
      time: '12:45:00 PM'
    },
    {
      id: 19,
      title: 'The Evolution of Transportation',
      details: 'Transportation has come a long way, from horse-drawn carriages to electric cars and high-speed trains. Innovations continue to improve efficiency, reduce environmental impact, and connect people worldwide.',
      date: '2023-10-19',
      time: '09:30:00 AM'
    },
    {
      id: 20,
      title: 'The Value of Lifelong Learning',
      details: 'Learning doesn’t stop after formal education. Lifelong learning fosters personal growth, adaptability, and intellectual curiosity, enabling individuals to thrive in an ever-changing world.',
      date: '2023-10-20',
      time: '10:00:00 AM'
    }
  ];

  if (!currentUser && currentUser.username) {
    return navigate('/auth/login');
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <TitleBar
        props={{
          imgPath: '/images/app-icon.jpeg',
          title: "Welcome, User!",
          subTitle: "We're Happy To Have You Aboard",
        }} />

      <div className="flex flex-row items-center justify-center w-full flex-1 tracking-widest">
        <PreviousEntries
          props={{
            entries: tempEntries, // change to actual user entries once development complete
          }} />

        <NewEntry />
      </div>
    </div>
  );
};
