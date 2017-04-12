var GroceryList = () => (
  <div>
    <ul>My To Do List
      {['yellow ledbetter', 'instate lovesong', 'h'].map(item =>
        <GroceryListItem item={item} />

      )}
    </ul>
  </div>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  };

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
    <li
      style={style}
      onClick={this.onListItemClick.bind(this)}
      >{this.props.item}
    </li>
    );
  }

}



ReactDOM.render(<GroceryList />, document.getElementById("app"));


