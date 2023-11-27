import React from 'react';
import './HomePage.css';

const HomePage = () => {
 
  const sportsData = [
    {
      id: 1,
      name: 'Swimming',
      description: 'Learn about swimming events and techniques.',
      
      schedule: 'View Swimming Schedule', // Example schedule link
      athletes: [
        { id: 101, name: 'Michael Phelps', country: 'USA', achievements: '23 Gold Medals' },
        // Add more athletes
      ],
    },
    {
      id: 2,
      name: 'Gymnastics',
      description: 'Explore gymnastics disciplines and performances.',
      imageUrl: 'https://via.placeholder.com/150',
      schedule: 'View Gymnastics Schedule', // Example schedule link
      athletes: [
        { id: 201, name: 'Simone Biles', country: 'USA', achievements: '4 Gold Medals' },
        // Add more athletes
      ],
    },
    // Add more sports data...
  ];

  return (
    <div className="home">
      <h1>Welcome to the Olympic Games</h1>
      <p>Explore various sports and events</p>
      <div className="sports-list">
      <img src="/olympicgames.jpeg" alt="Olympic Games" />
      <p>Olympic Games, athletic festival that originated in ancient Greece and was revived in the late 19th century. Before the 1970s the Games were officially limited to competitors with amateur status, but in the 1980s many events were opened to professional athletes. Currently, the Games are open to all, even the top professional athletes in basketball and football (soccer). The ancient Olympic Games included several of the sports that are now part of the Summer Games program, which at times has included events in as many as 32 different sports. In 1924 the Winter Games were sanctioned for winter sports. The Olympic Games have come to be regarded as the world’s foremost sports competition.</p>
      <h1>Origins</h1>
      <p>
Just how far back in history organized athletic contests were held remains a matter of debate, but it is reasonably certain that they occurred in Greece almost 3,000 years ago. However ancient in origin, by the end of the 6th century BCE at least four Greek sporting festivals, sometimes called “classical games,” had achieved major importance: the Olympic Games, held at Olympia; the Pythian Games at Delphi; the Nemean Games at Nemea; and the Isthmian Games near Corinth. Later, similar festivals were held in nearly 150 cities as far afield as Rome, Naples, Odessus, Antioch, and Alexandria.

Of all the games held throughout Greece, the Olympic Games were the most famous. Held every four years between August 6 and September 19, they occupied such an important place in Greek history that in late antiquity historians measured time by the interval between them—an Olympiad. The Olympic Games, like almost all Greek games, were an intrinsic part of a religious festival. They were held in honour of Zeus at the sacred site Olympia by the city-state of Elis in the northwestern Peloponnese. The first Olympic champion listed in the records was Coroebus of Elis, a cook, who won the sprint race in 776 BCE. Notions that the Olympics began much earlier than 776 BCE are founded on myth, not historical evidence. According to one legend, for example, the Games were founded by Heracles, son of Zeus and Alcmene.</p>
<h1>Events</h1>
<p>The Summer Games and the Winter Games include different sports that fit the different seasons. There are individual and team events for men and for women. Some events are held indoors, others outdoors.

The Summer Games have a wider variety of events than the Winter Games. The most popular events at the Summer Games include gymnastics, swimming, and track and field. Other events include baseball, basketball, boxing, cycling, diving, judo, sailing, soccer, softball, volleyball, water polo, weight lifting, and wrestling.

All the sports of the Winter Games are played on snow or ice. Ice skating and skiing are crowd favorites. Skating events include graceful figure-skating competitions as well as speed-skating races. Ice hockey is a popular team event. The biathlon combines skiing and shooting. The Winter Games also include high-speed races on sleds called bobsleds and luges.

The list of Olympic events can change. Sometimes popular new sports are added to the Games. In the late 1900s, for example, mountain biking, beach volleyball, and windsurfing became events at the Summer Games. Snowboarding was added to the Winter Games. In addition, women athletes now compete in sports that were once considered men’s events. Two such events are weight lifting and wrestling.</p>
        {sportsData.map((sport) => (
          <div key={sport.id} className="sport-card">
           
            <h2>{sport.name}</h2>
            <img src="/sport.jpeg" alt="sports Games" />
            <p>{sport.description}</p>
            {/* <a href={`/${sport.id}/details`} className="schedule-link">{sport.schedule}</a> */}
            <h3>Athletes:</h3>
            <ul>
              {sport.athletes.map((athlete) => (
                <li key={athlete.id}>
                  <strong>{athlete.name}</strong> ({athlete.country}) - {athlete.achievements}
                </li>
              ))}
            </ul>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
