class Hello extends React.Component{
  render() {
    let {to, from, favorite_foods} = this.props
    return (
      <div>
        <h1>Hello, to {to} from {from}!</h1>
        <ul>
          {favorite_foods.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}