import React from 'react';
import {ButtonListItem} from '../contactForm/ContactFormStyles';
import {ContactListItemContainer} from './ContactListItemStyles';
import PropTypes from 'prop-types';


export default function ContactListItem({ contactName, contactNumber, deleteContact }) {
    return (
        <ContactListItemContainer>
            <p className="contactListItemText">
                {contactName}: {contactNumber}
            </p>
            <ButtonListItem type="button" onClick={deleteContact}>
            Delete
            </ButtonListItem>
            </ContactListItemContainer>
    )
}

ContactListItem.propTypes = {
    contactName: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
};

