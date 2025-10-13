import TeamListItems from '../TeamListItems/TeamListItems.jsx';

const TeamList = (props) => {
    return(
        <ul>
            {props.fighters.map((player, idx) => (
                <TeamListItems
                    key = {idx}
                    id ={player.id} 
                    img = {player.img}
                    name = {player.name}
                    price = {player.price}
                    strength = {player.strength}
                    agility = {player.agility} 
                />
            ))}
        </ul>
    )
}

export default TeamList;