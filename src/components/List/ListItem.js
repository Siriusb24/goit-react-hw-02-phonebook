export default function ListItem({ name, number, id, onDeleteContact }) {
  console.log(id);
  return (
    <li>
      {name}:<span>{number}</span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
