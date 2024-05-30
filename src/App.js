import React, { useRef } from 'react';

const ExampleForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    console.log('Form submitted with values:', { name, email });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>

      <input type="text" name="name" placeholder='name' required />
      <input type="email" name="email" placeholder='email' required />

      <button type="submit" data-testid='submit'>Submit</button>

    </form>
  );
};

export default ExampleForm;