import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              <ContactItem contact={contact} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
