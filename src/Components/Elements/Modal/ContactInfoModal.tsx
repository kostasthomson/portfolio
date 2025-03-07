import { FormEvent, useState, useRef } from 'react';
import FormModalWrapper from './FormModalWrapper';
import ModalTitle from './ModalTitle';
import FormModalInput from './FormModalInput';
import { AlertTypes } from '../../../Types';

function ContactInfoModal({
  open,
  submitAction,
  onClose,
  showAlert,
}: {
  open: boolean;
  submitAction: (name: string, email: string) => void;
  onClose: () => void;
  showAlert: (
    message: string,
    type: AlertTypes.AlertType,
    duration?: number
  ) => void;
}) {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const contactNameRef = useRef(null);
  const contactEmailRef = useRef(null);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const resetValues = () => {
    setContactName('');
    setContactEmail('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (contactName === '') {
      showAlert('Please provide your contact name', 'error');
      if (contactNameRef.current)
        (contactNameRef.current as HTMLInputElement).focus();
      return;
    }
    if (contactEmail === '' || !isValidEmail(contactEmail)) {
      let alertMessage = '';
      if (contactEmail === '')
        alertMessage = 'Please provide your contact email';
      else alertMessage = 'Please provide a valid contact email';
      showAlert(alertMessage, 'error');
      if (contactEmailRef.current)
        (contactEmailRef.current as HTMLInputElement).focus();
      return;
    }
    submitAction(contactName, contactEmail.replace('.', '_'));
    resetValues();
    onClose();
  };

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    resetValues();
    onClose();
  };

  if (!open) return;

  return (
    <FormModalWrapper
      onSubmit={handleSubmit}
      onReset={handleReset}
      onClose={onClose}
      className="gap-8 bg-background"
    >
      <ModalTitle
        title="Personal information"
        description="Please provide your contact information"
      />
      <FormModalInput
        ref={contactNameRef}
        className="bg-darkAccent text-accent"
        type="text"
        label="name"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
      />
      <FormModalInput
        ref={contactEmailRef}
        className="bg-darkAccent text-accent"
        type="text"
        label="email"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
      />
    </FormModalWrapper>
  );
}

export default ContactInfoModal;
