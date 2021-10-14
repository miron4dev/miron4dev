import React from "react";
import Contact from "../models/Contact";

interface ContactData {
  contacts: Contact[]
  email: string,
}

const ContactData = ({ contacts, email }: ContactData) => (
  <div className="d-block">
    <div className="contact-data">
      <ul className="row p-0 list-unstyled">
        {contacts.map(it => (
          <li key={it.name} className="col contact">
            <a target="_blank" href={it.url}
               rel="noopener noreferrer" title={`Open ${it.name} Profile`}>
              <img src={it.logo} alt={it.name} height="24"/>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <p>
      <a href={`mailto:${email}`} title="Send an e-mail" className="mb-0">
        {email}
      </a>
    </p>
  </div>
);

export default ContactData;
