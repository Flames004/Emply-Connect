localStorage.clear()
const employees = [
  {
    id: 1,
    name: "Ravi",
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        title: "Project Documentation",
        description:
          "Complete the documentation for the project to ensure all processes, workflows, and requirements are clearly recorded.",
        date: "2024-11-16",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fixes for Login Module",
        description:
          "Identify and resolve issues in the login module to ensure a smooth user authentication process.",
        date: "2024-11-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Pull Request Review",
        description:
          "Thoroughly review the team's pull requests to ensure quality code and adherence to project standards.",
        date: "2024-11-14",
        category: "Code Review",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Workflow Diagram Drafting",
        description:
          "Draft a comprehensive workflow diagram to visualize and improve the team's processes and operations.",
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
        title: "UI Design for Dashboard",
        description:
          "Create an intuitive and visually appealing user interface for the dashboard to enhance user experience.",
        date: "2024-11-14",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Payment Gateway Testing",
        description:
          "Test the integration of the payment gateway to ensure it functions correctly and handles transactions securely.",
        date: "2024-11-13",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Design Assets for Marketing",
        description:
          "Prepare high-quality design assets for the marketing team to use in upcoming campaigns and promotional materials.",
        date: "2024-11-11",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Product Brainstorming",
        description:
          "Collaborate with the team to brainstorm innovative ideas for the development of a new product.",
        date: "2024-11-19",
        category: "Strategy",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "User Survey Feedback Analysis",
        description:
          "Analyze the feedback gathered from user surveys to identify key areas for improvement in the product.",
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
        title: "Database Schema Update",
        description:
          "Update the database schema to accommodate new application requirements while maintaining data integrity.",
        date: "2024-11-12",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Presentation Preparation",
        description:
          "Prepare a professional and engaging presentation for the client to showcase the project's progress and goals.",
        date: "2024-11-18",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Query Optimization",
        description:
          "Optimize the database queries to improve the system's performance and reduce response time.",
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
        title: "Team Meeting",
        description:
          "Organize and conduct a team meeting to discuss progress, address concerns, and align on upcoming tasks.",
        date: "2024-11-17",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Server Optimization",
        description:
          "Analyze and optimize the server response time to ensure faster performance and better scalability.",
        date: "2024-11-15",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Monthly Report Preparation",
        description:
          "Prepare a detailed monthly performance report to summarize key achievements and areas of improvement.",
        date: "2024-11-20",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team-Building Activities",
        description:
          "Plan and organize team-building activities to strengthen team cohesion and improve morale.",
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
        title: "Unit Testing for Features",
        description:
          "Develop and execute unit tests for new features to ensure functionality and catch potential bugs early.",
        date: "2024-11-13",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Competitor Analysis",
        description:
          "Conduct a comprehensive analysis of competitors' strategies to identify opportunities and threats in the market.",
        date: "2024-11-10",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Legacy Code Refactoring",
        description:
          "Refactor legacy code modules to enhance maintainability, readability, and overall system performance.",
        date: "2024-11-15",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Backup Script Creation",
        description:
          "Develop a reliable script for automating system backups to ensure data security and recovery options.",
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
    email: "admin@me.com",
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