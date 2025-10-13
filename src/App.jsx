import { useState } from "react";

import ZombieFightersList from './components/ZombieFightersList/ZombieFightersList.jsx';
import TeamList from './components/TeamList/TeamList.jsx';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);


  const [message, setMessage] = useState(""); // I added this State to display the message

  // take all the items in the list then calculate the total
  const totalStrength = team.reduce((acc, player) => acc + player.strength, 0);
  const totalAgility = team.reduce((acc, player) => acc + player.agility, 0);
  {/* ------------------------Set states-------------------------------- */}

   const handleAddFighter = (id) => {
    
    zombieFighters.forEach((player) => {
      if (player.id === id) {

        if (money >= player.price) {
          setTeam([...team, player]); //add the fighter to team first then remove it from the array
          
          setMoney(money - player.price);  
          
          setMessage(`Added ${player.name} to your team!`);
          
          setZombieFighters(zombieFighters.filter(player => player.id !== id));
       
        } else{
          setMessage("Not enough money");
        }
      }
    })

    // Clear the message after 2 seconds
    setTimeout(() => {setMessage("")}, 2000);
  };

  const handleRemoveFighter = (id) => {
    
    team.forEach((player) => {
      if (player.id === id) {

        setZombieFighters([...zombieFighters, player]); //remove the fighter from team
        
        setMoney(money + player.price);
        
        setMessage(`removed ${player.name} from your team!`);
        
        setTeam(team.filter(player => player.id !== id));
      }
    })

    // Clear the message after 2 seconds
    setTimeout(() => {setMessage("")}, 2000);
  };

  {/* ------------------------Function states-------------------------------- */}


  {/* ------------------------Return-------------------------------- */}
  return (
    <>
      <h1>Zombie Fighters</h1>
      
      <h3>Money: {money}</h3>
      <h3>Team Strenght: {totalStrength}</h3>
      <h3>Team agility: {totalAgility}</h3>
      
      <h3>Team</h3>
      <TeamList 
        fighters={team} 
        handleRemoveFighter={handleRemoveFighter}
      />

      <h4>{team.length === 0 ? 'Pick some team members' : '' }</h4>

      <div className="message">{message}</div>
      <h3>Fighters</h3>
      <ZombieFightersList 
        fighters={zombieFighters} 
        handleAddFighter={handleAddFighter}
      />

    </>
  );
}

export default App;
