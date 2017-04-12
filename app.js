var GroceryList = () => (
  <div>
    <ul>My To Do List
      {['yellow ledbetter', 'instate lovesong', 'h'].map(item =>
        <GroceryListItem item={item} />

      )}
    </ul>
  </div>
);


var GroceryListItem = (props) => (
  <li>{props.item}</li>
);



ReactDOM.render(<GroceryList />, document.getElementById("app"));


