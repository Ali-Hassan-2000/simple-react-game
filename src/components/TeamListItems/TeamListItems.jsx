import App from '../../App.jsx';

const TeamListItems = (props) => {
    return(
        <li> 
        <img src={props.img} alt={props.name} /> <br />
        name: {props.name} <br />
        price: ${props.price} <br />
        strength: {props.strength} <br />
        agility: {props.agility}

        <button className="remove-button" onClick={() => props.handleRemoveFighter(props.id)}
        >Remove</button>
        </li>
    )
};

export default TeamListItems;