localStorage.clear()
const employees = [
  {
    id: 1,
    name: "Ravi",
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        title: "Task 1",
        description: "Complete the project documentation.",
        date: "2024-11-16",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Fix bugs in the login module.",
        date: "2024-11-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Review pull requests from the team.",
        date: "2024-11-14",
        category: "Code Review",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Draft a new workflow diagram.",
        date: "2024-11-18",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 0 },
  },
  {
    id: 2,
    name: "Priya",
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        title: "Task 1",
        description: "Design the UI for the dashboard.",
        date: "2024-11-14",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Test the payment gateway integration.",
        date: "2024-11-13",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Prepare design assets for marketing.",
        date: "2024-11-11",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Brainstorm ideas for the new product.",
        date: "2024-11-19",
        category: "Strategy",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 5",
        description: "Analyze feedback from user surveys.",
        date: "2024-11-12",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 2, failed: 1 },
  },
  {
    id: 3,
    name: "Arjun",
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        title: "Task 1",
        description: "Update the database schema.",
        date: "2024-11-12",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Prepare a presentation for the client.",
        date: "2024-11-18",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Optimize database queries.",
        date: "2024-11-15",
        category: "Optimization",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 0, failed: 1 },
  },
  {
    id: 4,
    name: "Neha",
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        title: "Task 1",
        description: "Conduct team meeting.",
        date: "2024-11-17",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Optimize the server response time.",
        date: "2024-11-15",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Prepare the monthly performance report.",
        date: "2024-11-20",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Organize team-building activities.",
        date: "2024-11-22",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 2, failed: 0 },
  },
  {
    id: 5,
    name: "Karan",
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        title: "Task 1",
        description: "Write unit tests for new features.",
        date: "2024-11-13",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Analyze competitors' market strategies.",
        date: "2024-11-10",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Refactor legacy code modules.",
        date: "2024-11-15",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Create a script for automated backups.",
        date: "2024-11-18",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
];

const admin = [
  {
    id: 1,
    name: "Suman",
    email: "admin@example.com",
    password: "1234",
  },
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}