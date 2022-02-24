import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      saveButton: true,
    };
  }

  isEmpty = () => {
    const fields = ['cardName', 'cardDescription', 'cardImage', 'cardRare'];
    return fields.every((field) => {
      const check = this.state;
      return check[field];
    });
  }

  checkNumber = () => {
    const fields = ['cardAttr1', 'cardAttr2', 'cardAttr3'];
    const result = fields.every((field) => {
      const check = this.state;
      const minimum = 0;
      const maximum = 90;
      return check[field] >= minimum && check[field] <= maximum;
    });
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maximumValue = 210;
    const sum = (parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10)) <= maximumValue;
    return (result === true && sum === true);
  }

  setSaveButton = () => {
    const string = this.isEmpty();
    const number = this.checkNumber();
    this.setState({ saveButton: !(string && number) });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setSaveButton());
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      saveButton,
    } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <main className="container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ false }
            isSaveButtonDisabled={ saveButton }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
      </>
    );
  }
}

export default App;
