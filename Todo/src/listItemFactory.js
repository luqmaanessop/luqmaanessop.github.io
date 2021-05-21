function listItemFactory(title, notes, dueDate, priority, status) {
  return {
    title: title,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
    status: status,
    getTitle: function () {
      return title
    },
    getDueDate: function () {
      return dueDate
    },
    getPriority: function () {
      return priority
    },
    getNotes: function () {
      return notes
    },
    getStatus: function () {
      return status
    }
  }
}

export { listItemFactory }
