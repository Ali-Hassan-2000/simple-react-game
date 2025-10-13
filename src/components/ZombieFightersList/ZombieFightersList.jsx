import ZombieFightersListItems from '../ZombieFightersListItems/ZombieFightersListItems.jsx';

const ZombieFightersList = (props) => {
    return(
        <ul>
            {props.fighters.map((player, idx) => (
                <ZombieFightersListItems
                    key = {idx} 
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

export default ZombieFightersList;