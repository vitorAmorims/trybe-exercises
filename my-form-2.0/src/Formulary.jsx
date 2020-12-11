import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Formulary.css'
import Nome from './Nome';
import Email from './Email';
import Cpf from './Cpf';
// import Endereco from './Endereco';
import { add } from "./actions";
import store from "./store/store";

class Formulary extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: "",
      email: "",
      cpf: "",
    };
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { nome } = this.state;
    const { email } = this.state;
    const { cpf } = this.state;
    const { add } = this.props;
    return (
      <div>
        <h1>Cadastro de curriculum</h1>
        <form className="form" method="get">
          <fieldset className="field">
            <Nome value={nome} handleChange={this.handleChange} />
            <Email value={email} handleChange={this.handleChange} />
            <Cpf value={cpf} handleChange={this.handleChange} />
            <button type="submit" onClick={() => add(nome, email, cpf)}>Adicionar</button>
          </fieldset>
          <fieldset></fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = { add }

export default connect(null, mapStateToProps)(Formulary);

