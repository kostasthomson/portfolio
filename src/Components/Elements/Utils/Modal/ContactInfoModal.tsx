import { FormEvent, useState, useRef } from 'react';
import FormModalWrapper from './FormModalWrapper';
import ModalTitle from './ModalTitle';
import FormModalInput from './FormModalInput';

function ContactInfoModal({
  open,
  submitAction,
  onClose,
}: {
  open: boolean;
  submitAction: (name: string, email: string) => void;
  onClose: () => void;
}) {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactNameError, setContactNameError] = useState('');
  const [contactEmailError, setContactEmailError] = useState('');
  const contactNameRef = useRef(null);
  const contactEmailRef = useRef(null);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const resetValues = () => {
    setContactName('');
    setContactEmail('');
    setContactNameError('');
    setContactEmailError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (contactName === '') {
      setContactNameError('Please provide your contact name');
      if (contactNameRef.current)
        (contactNameRef.current as HTMLInputElement).focus();
      return;
    }
    if (contactEmail === '') {
      setContactEmailError('Please provide your contact email');
      if (contactEmailRef.current)
        (contactEmailRef.current as HTMLInputElement).focus();
      return;
    } else if (!isValidEmail(contactEmail)) {
      setContactEmail('');
      setContactEmailError('Please provide a valid contact email');
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

  return (
    open && (
      <FormModalWrapper
        onSubmit={handleSubmit}
        onReset={handleReset}
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
          placeholder={contactNameError}
        />
        <FormModalInput
          ref={contactEmailRef}
          className="bg-darkAccent text-accent"
          type="text"
          label="email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          placeholder={contactEmailError}
        />
      </FormModalWrapper>
    )
  );
}

export default ContactInfoModal;
