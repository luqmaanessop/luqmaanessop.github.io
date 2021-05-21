function listFactory(title) {
  return {
    title: title,
    items: [],
    getItems: function () {
      return items
    },
    getTitle: function () {
      return title
    },
    addItem: function(item) {
      items.push(item);
      return items;
    }
  }
}

export { listFactory }
