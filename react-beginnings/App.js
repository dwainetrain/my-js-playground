class App extends React.Component {
  render() {
    return (
      <div>
      <Hello to="Paul" from="Ringo"/>
      <Hello to="Chic" from="Correa"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, root)