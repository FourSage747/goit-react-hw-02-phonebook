export const ContactsList = ({id, name, number, handDelete}) => {
    return (
        <li>{name}: {number} <button type="button" onClick={()=>handDelete(id)}>Delete</button></li>
    )
}