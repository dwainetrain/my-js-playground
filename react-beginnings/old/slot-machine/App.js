class App extends React.Component {
  render() {
    return (
      <div>
      <h3></h3>
      <SlotMachine row={["🦑", "🦑", "🦑"]} />
      <SlotMachine row={["🐡","🦀","🦑"]}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, root)