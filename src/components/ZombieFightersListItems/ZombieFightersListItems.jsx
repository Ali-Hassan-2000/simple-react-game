import App from '../../App.jsx';

const ZombieFightersListItems = (props) => {
    return(
        <li> 
        <img src={props.img} alt={props.name} /> <br />
        {props.name} <br />
        {props.price} <br />
        {props.strength} <br />
        {props.agility} 

        <button onClick={() => props.handleAddFighter({
            id: props.id, 
            name: props.name, 
            price: props.price,
            strength: props.strength, 
            agility: props.agility, 
            img: props.img})}
        >Add</button>
        
        </li>
    )
};

export default ZombieFightersListItems;