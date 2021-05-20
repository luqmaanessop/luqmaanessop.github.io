function listItemFactory(title, description, dueDate, priority, notes, status) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
    status: status,
    getTitle: function () {
      return title
    },
    getDescription: function () {
      return description
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
