import React from "react";
import Contact from "@models/Contact";
import * as styles from "./ContactData.module.less";

type ContactData = {
  contacts: Contact[];
  email: string;
}

const ContactData = ({ contacts, email }: ContactData) => (
  <div>
    <div className={styles.contactData}>
      <ul>
        {contacts.map(it => (
          <li key={it.name} className={styles.contact}>
            <a target="_blank" href={it.url}
               rel="noopener noreferrer" title={`Open ${it.name} Profile`}>
              <img src={it.logo} alt={it.name} height="24" />
            </a>
          </li>
        ))}
      </ul>
    </div>
    <p>
      <a href={`mailto:${email}`} title="Send an e-mail">
        {email}
      </a>
    </p>
  </div>
);

export default ContactData;
