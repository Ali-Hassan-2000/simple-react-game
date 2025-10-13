const ZombieFightersListItems = (props) => {
    return(
        <li> 
        <img src={props.img} alt={props.name} /> <br />
        {props.name} <br />
        {props.price} <br />
        {props.strength} <br />
        {props.agility} 
        </li>
    )
};

export default ZombieFightersListItems;