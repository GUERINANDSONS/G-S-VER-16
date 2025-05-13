const recalculateSchedule = () => {
  const updated = [...projects[projectId]].map(task => ({ ...task })); // deep copy
  for (let i = 0; i < updated.length; i++) {
    if (i === 0) {
      const start = new Date(updated[i].startDate);
      updated[i].endDate = format(addDays(start, updated[i].duration), 'yyyy-MM-dd');
    } else {
      const prevEnd = new Date(updated[i - 1].endDate);
      const start = addDays(prevEnd, 1);
      updated[i].startDate = format(start, 'yyyy-MM-dd');
      updated[i].endDate = format(addDays(start, updated[i].duration), 'yyyy-MM-dd');
    }
  }

  const newProjects = { ...projects, [projectId]: updated };
  setProjects(newProjects);
};
