import ListItem from './ListItem';

export default function PhoneBookList({ contact, onDeleteContact }) {
  //console.log(contact)
  return (
    <div>
      <h2>Phone List of friends</h2>
      <ul>
        {contact.map(({ name, number, id }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
}
