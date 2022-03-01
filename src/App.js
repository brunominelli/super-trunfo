import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Search from './components/Search';

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
      cardDeck: [],
      cardFilter: [],
      cardNameFilter: '',
      cardRareFilter: 'todas',
      cardTrunfoFilter: false,
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
    const { cardDeck } = this.state;
    this.setState({
      hasTrunfo: cardDeck.some((card) => card.cardTrunfo),
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
      cardDeck,
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
      cardDeck: [...cardDeck, saveCard],
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
    const { cardDeck } = this.state;
    const buttonState = cardDeck
      .filter(({ cardName }) => cardName !== deleteCardName);
    this.setState({
      cardDeck: buttonState,
    }, () => this.checkHasTrunfo());
  }

  onReadSearchInput = ({ target }) => {
    const { cardDeck } = this.state;
    const valueLowerCase = target.value.toLowerCase();
    const searchNameResult = cardDeck.filter(({ cardName }) => {
      const cardNameLowerCase = cardName.toLowerCase();
      return cardNameLowerCase.includes(valueLowerCase);
    });
    this.setState({
      cardFilter: searchNameResult,
      cardNameFilter: target.value,
    });
  }

  onReadSearchSelect = ({ target }) => {
    const { cardDeck } = this.state;
    const valueLowerCase = target.value.toLowerCase();
    const searchRareResult = cardDeck.filter(({ cardRare }) => {
      const cardRareLowerCase = cardRare.toLowerCase();
      return cardRareLowerCase.includes(valueLowerCase);
    });
    const cardRareNameResult = searchRareResult
      .filter(({ cardRare }) => cardRare === target.value);
    this.setState({
      cardFilter: cardRareNameResult,
      cardRareFilter: target.value,
    });
  }

  onReadSearchCheckbox = ({ target }) => {
    const { cardDeck } = this.state;
    const searchTrunfoResult = cardDeck
      .filter(({ cardTrunfo }) => cardTrunfo === target.checked);
    this.setState({
      cardFilter: searchTrunfoResult,
    });
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
      cardDeck,
      hasTrunfo,
      cardFilter,
      cardNameFilter,
      cardRareFilter,
      cardTrunfoFilter,
    } = this.state;

    return (
      <>
        <Header />
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
          <h1 className="title">Todas as cartas</h1>
          <Search
            onReadSearchInput={ this.onReadSearchInput }
            onReadSearchSelect={ this.onReadSearchSelect }
            onReadSearchCheckbox={ this.onReadSearchCheckbox }
            cardNameFilter={ cardNameFilter }
            cardRareFilter={ cardRareFilter }
            cardTrunfoFilter={ cardTrunfoFilter }
          />
          <article className="card-container">
            <section className="row">
              { (cardFilter.length
                || cardNameFilter
                || cardRareFilter !== 'todas'
                || cardTrunfoFilter
                ? cardFilter : cardDeck)
                .map((card, index) => (<Deck
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
                />))}
            </section>
          </article>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
