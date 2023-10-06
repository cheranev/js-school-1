let todoItems = [];

function addTask(id, title, priority) {
  const todo = {
    id,
    title,
    priority,
  };

  todoItems.push(todo);
  console.log(
    `Task with id "${id}"  and title "${title}" is succesfully added to ur ToDoList`
  );
}
function removeTask(id, todoList) {
  let i = 0;
  for (i in todoList) {
    if (Object.values(todoList)[i]["id"] == id) {
      delete todoList[i];
      console.log(`Task with id "${id}"  succesfully removed from ToDoList`);
      return;
    } else {
      continue;
    }
  }

  todoItems.filter((element) => {
    if (Object.keys(element).length !== 0) {
      return true;
    }

    return false;
  });
}

function changeNameOrPriorityTask(id, newTaskName, newPriority, todoList) {
  switch (newTaskName) {
    case null:
      break;
    default:
      for (i in todoList) {
        if (Object.values(todoList)[i]["id"] == id) {
          todoList[i]["title"] = newTaskName;
          todoList[i]["priority"] = newPriority;
          return;
        } else {
        }
      };
  }
}

// create more task
addTask(57, "asdasd", 65);
addTask(2, "toremove", 2);
addTask(1, "qweqwe", 3);
addTask(123, "dfgdfg", 2);
// remove task and remove empty objects
removeTask(57, todoItems);
const results = todoItems.filter((element) => {
  if (Object.keys(element).length !== 0) {
    return true;
  }

  return false;
});
// change name or priority by id
changeNameOrPriorityTask(1, "newTaskName", 12, results);

function sortToDoList(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}
// finally, sort todolist
results.sort(sortToDoList);

console.log(results);
