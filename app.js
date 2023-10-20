let todoItems = [];

function toDoListObject() {
  let objectListToDo = {
    title: this.title,
    id: this.id,
    priority: this.priority,
  };
  function createNewTask(obTitle, obId, obPriority) {
    objectListToDo.title = obTitle;
    objectListToDo.id = obId;
    objectListToDo.priority = obPriority;
    todoItems.push(objectListToDo);
    objectListToDo = {};
  }
  function removeTaskById(deleteId) {
    const indexOfObject = todoItems.findIndex((object) => {
      return object.id === deleteId;
    });
    todoItems.splice(indexOfObject, 1);
  }
  function updateTitleAndPriority(idToUpdate, newTitle, newPriority) {
    let itemIndex = todoItems.findIndex((x) => x.id == idToUpdate);

    let item = todoItems[itemIndex];
    item.title = newTitle;
    item.priority = newPriority;

    todoItems[itemIndex] = item;
  }
  function sortToDoList() {
    todoItems.sort((a, b) => {
      return a.priority - b.priority;
    });
  }
  createNewTask("Task number 3", 3, 123);
  createNewTask("Task number 1", 1, 12);
  createNewTask("Task number 2", 2, 14);
  createNewTask("Task number 3", 3, 15);
  removeTaskById(1);
  updateTitleAndPriority(2, "New Task name", 3);
  sortToDoList();
}
toDoListObject();

console.log(todoItems);
