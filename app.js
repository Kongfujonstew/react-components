var GroceryList = () => (
  <div>
  <h1>My To Do List</h1>
  <ToDoList todos={['yellow ledbetter', 'instate lovesong', 'h']}/>
  </div>
);

var ToDoList = (props) => (
  <div>
  <ul>ListItems:

    var todos = props.todos;
    <li>{props.todos[0]}</li> 
    <li>{props.todos[1]}</li> 
    <GroceryListItem todo={props.todos[2]}/> 

  </ul>
  </div>

)

var GroceryListItem = (props) => (
  <li>{props.todo}</li>


)
ReactDOM.render(<GroceryList />, document.getElementById("app"));


