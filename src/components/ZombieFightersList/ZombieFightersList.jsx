import ZombieFightersListItems from '../ZombieFightersListItems/ZombieFightersListItems.jsx';

const ZombieFightersList = (props) => {
    return(
        <ul>
            {props.fighters.map((player, idx) => (
                <ZombieFightersListItems
                    key = {idx}
                    id ={player.id} 
                    img = {player.img}
                    name = {player.name}
                    price = {player.price}
                    strength = {player.strength}
                    agility = {player.agility} 

                    handleAddFighter={props.handleAddFighter} 
                />
            ))}
        </ul>
    )
}

export default ZombieFightersList;