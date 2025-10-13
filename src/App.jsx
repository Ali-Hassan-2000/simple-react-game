import './App.css';

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
      <div className="app">
        <header className="app-header">
          <h1 className="title">🧟 Zombie Fighters</h1>  

          <div className="stats-container">
            <div className="stat-card">
              <span className="stat-label">Money</span>
              <span className="stat-value money">${money}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Team Strength</span>
              <span className="stat-value strength">{totalStrength}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Team Agility</span>
              <span className="stat-value agility">{totalAgility}</span>
            </div>
          </div>
        </header>

        <div className="main-content">
          <section className="team-section">
            <h2 className="section-title">Your Team</h2>
            {team.length === 0 ? (
              <div className="empty-state">
              <p>Pick some team members to start fighting zombies!</p>
              </div>
              ) : ''}
              
              <TeamList 
                fighters={team} 
                handleRemoveFighter={handleRemoveFighter} 
              />
          </section>
          
          <div className="message">{message}</div>
          
          <section className="fighters-section">
            <h2 className="section-title">Available Fighters</h2>
            <ZombieFightersList 
              fighters={zombieFighters} 
              handleAddFighter={handleAddFighter}
            />
          </section>
        </div>

      </div>

    </>
  );
}

export default App;
