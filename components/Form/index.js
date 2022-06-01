import React from "react";

// import { Container } from './styles';

function Form({ formName, method, event }) {
  return (
    <form onSubmit={method}>
      <input name={formName} onChange={event} />
      <button type="submit">Criar</button>
    </form>
  );
}

export default Form;
