import App from '../../App.jsx';

const ZombieFightersListItems = (props) => {
    return(
        <li> 
        <img src={props.img} alt={props.name} /> <br />
        name: {props.name} <br />
        price: ${props.price} <br />
        strength: {props.strength} <br />
        agility: {props.agility} 

        <button className="remove-button" onClick={() => props.handleAddFighter(props.id)}
        >Add</button>
        </li>
    )
};

export default ZombieFightersListItems;