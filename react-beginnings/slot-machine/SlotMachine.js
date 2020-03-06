class SlotMachine extends React.Component{

  render() {
    const matching = this.props.row.every(item => item === this.props.row[0])
    return (
      <div>
        <h1>Slot Machine Time!</h1>
        <p>{this.props.row}</p>
        <p>{ matching ? "You Win!" : "You Lost!" }</p>
      </div>
    )
  }
}