import "./hero.css";

const Todo = () => {
  return (
    <>
    <section>
        <h1>Tasks for today</h1>
        <ul id="container">
            <li>Drink water</li>
            <li>Train</li>
            <li>Wash the dishes</li>
        </ul>
    </section>
    <section>
        <input type="text" id="input-field" />
        <button type="button" onclick= "add()">Add task</button>
    </section>
    </>
  );
};

export default Todo;
