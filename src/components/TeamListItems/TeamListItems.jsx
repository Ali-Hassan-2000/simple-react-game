import App from '../../App.jsx';

const TeamListItems = (props) => {
    return(
        <li> 
        <img src={props.img} alt={props.name} /> <br />
        {props.name} <br />
        {props.price} <br />
        {props.strength} <br />
        {props.agility}

        <button onClick={() => props.handleRemoveFighter(props.id)}
        >Remove</button>
        </li>
    )
};

export default TeamListItems;