import App from '../../App.jsx';

const ZombieFightersListItems = (props) => {
    return(
        <li> 
        <img src={props.img} alt={props.name} /> <br />
        {props.name} <br />
        {props.price} <br />
        {props.strength} <br />
        {props.agility} 

        <button onClick={() => props.handleAddFighter(props.id)}
        >Add</button>
        </li>
    )
};

export default ZombieFightersListItems;