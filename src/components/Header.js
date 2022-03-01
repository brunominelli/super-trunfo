import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Super Trunfo - Magos & Feiticeiros</h1>
        <nav className="nav">
          <button type="button" className="button">Regras</button>
          <button type="button" className="button">Sobre o Projeto</button>
          <a href="https://obrunominelli.github.io" className="button">Contato</a>
        </nav>
      </header>
    );
  }
}

export default Header;
