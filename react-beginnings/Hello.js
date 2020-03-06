class Hello extends React.Component{
  render() {
    let {to, from} = this.props
    return (
      <h1>Hello, to {to} from {from}!</h1>
    )
  }
}