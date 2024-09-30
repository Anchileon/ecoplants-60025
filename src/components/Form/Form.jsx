import React from 'react';

const Form = ({ handleChange, submit, formData, error }) => {
  return (
    <form onSubmit={submit} className="form-container">
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {error.name && <span className="error">{error.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {error.email && <span className="error">{error.email}</span>}
      </div>
      <button type="submit" className="submit-button">comprar</button>
    </form>
  );
};

export default Form;
