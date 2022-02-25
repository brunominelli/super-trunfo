import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      saveButton: true,
      saveButtonState: [],
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
    return (result && sum);
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

  checkHasTrunfo = () => {
    const { saveButtonState } = this.state;
    this.setState({
      hasTrunfo: saveButtonState.some((card) => card.cardTrunfo),
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      saveButtonState,
    } = this.state;

    const saveCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState({
      saveButtonState: [...saveButtonState, saveCard],
    }, () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      saveButton: true,
    }, () => this.checkHasTrunfo()));
  };

  onDeleteButtonClick = ({ target }) => {
    const deleteCardName = target.value;
    const { saveButtonState } = this.state;
    const buttonState = saveButtonState
      .filter(({ cardName }) => cardName !== deleteCardName);
    this.setState({
      saveButtonState: buttonState,
    }, () => this.checkHasTrunfo());
  }

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
      saveButtonState,
      hasTrunfo,
    } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <main className="container">
          <article className="row">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
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
          </article>
          <h1>Todas as cartas</h1>
          <article className="card-container">
            { saveButtonState.map((card, index) => (
              <Deck
                key={ index }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                onDeleteButtonClick={ this.onDeleteButtonClick }
              />
            ))}
          </article>
        </main>
      </>
    );
  }
}

export default App;
