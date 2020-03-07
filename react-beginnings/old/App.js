class App extends React.Component {
  render() {
    return (
      <div>
      <Hello to="Paul" from="Ringo" favorite_foods={["pizza", "cake", "Edamame"]}/>
      <Hello to="Chic" from="Correa" favorite_foods={["rice", "beans", "chicpeas"]}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, root)