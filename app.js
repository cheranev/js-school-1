const toDoList = {
  list: [],
  createNewTask: function (newItems) {
    this.list.push(newItems);
  },
  removeTaskById: function (deleteId) {
    const indexOfObject = this.list.findIndex((object) => {
      return object.id === deleteId;
    });
    if (indexOfObject !== null) {
      this.list.splice(indexOfObject, 1);
    }
  },
  updateTitleAndPriority: function (idToUpdate, newTitle, newPriority) {
    const itemIndex = this.list.findIndex((x) => x.id == idToUpdate);

    if (itemIndex === -1) {
      throw new Error("Invalid index for update value");
    } else {
      let item = this.list[itemIndex];
      item.title = newTitle;
      item.priority = newPriority;

      this.list[itemIndex] = item;
    }
  },
  sortToDoList: function () {
    this.list.sort((a, b) => {
      return a.priority - b.priority;
    });
  },
};
toDoList.createNewTask({
  title: "Выкинуть мусор",
  id: 1,
  priority: 2,
});

toDoList.createNewTask({
  title: "Погулять",
  id: 2,
  priority: 3,
});

toDoList.createNewTask({
  title: "Помыть посуду",
  id: 3,
  priority: 1,
});

toDoList.removeTaskById(3);
toDoList.sortToDoList();
toDoList.updateTitleAndPriority(1, "title", "Сделать уроки");
console.log(toDoList.list);
