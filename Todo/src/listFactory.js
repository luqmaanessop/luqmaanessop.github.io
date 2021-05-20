function listFactory(title) {
  return {
    title: title,
    items: [],
    getItems: function () {
      return items
    },
    getTitle: function () {
      return title
    }
  }
}

export { listFactory }
