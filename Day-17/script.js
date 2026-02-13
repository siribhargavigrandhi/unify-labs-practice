// ---------------- MOCK DATABASE ----------------

let studentProjects = [
  { name: "AI Chatbot", status: "Completed" },
  { name: "E-Commerce App", status: "Pending" },
  { name: "Portfolio Website", status: "Completed" },
  { name: "Data Tool", status: "Pending" }
];

const expenses = [5000, 3000, 4500, 2500];

// ---------------- REDUCE (Total Budget) ----------------

const totalBudget = expenses.reduce((sum, val) => sum + val, 0);
document.getElementById("totalBudget").textContent = "₹" + totalBudget;

// ---------------- DISPLAY TASKS ----------------

function displayTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = `${task.name} (${task.status})`;
    taskList.appendChild(li);
  });

  updateChart();
}

// ---------------- FILTER FUNCTIONS ----------------

function showAll() {
  displayTasks(studentProjects);
}

function showCompleted() {
  const completed = studentProjects.filter(
    t => t.status === "Completed"
  );
  displayTasks(completed);
}

function showPending() {
  const pending = studentProjects.filter(
    t => t.status === "Pending"
  );
  displayTasks(pending);
}

// ---------------- ADD NEW TASK ----------------

function addTask() {
  const name = document.getElementById("taskName").value;
  const status = document.getElementById("taskStatus").value;

  if (name.trim() === "") {
    alert("Enter a task name!");
    return;
  }

  studentProjects.push({ name, status });

  document.getElementById("taskName").value = "";

  displayTasks(studentProjects);
}

// ---------------- MAP (Example: Tax Calculation) ----------------

const prices = [1000, 1500, 2000];
const pricesWithTax = prices.map(p => p + p * 0.18);
console.log("Prices with tax:", pricesWithTax);

// ---------------- CHART.JS ----------------

let chart;

function updateChart() {
  const completedCount = studentProjects.filter(
    t => t.status === "Completed"
  ).length;

  const pendingCount = studentProjects.filter(
    t => t.status === "Pending"
  ).length;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [{
      label: "Task Status",
      data: [completedCount, pendingCount],
      backgroundColor: ["#4caf50", "#ff9800"]
    }]
  };

  if (chart) {
    chart.data = data;
    chart.update();
    return;
  }

  const ctx = document.getElementById("taskChart").getContext("2d");

  chart = new Chart(ctx, {
    type: "pie",
    data: data
  });
}

// ---------------- INITIAL LOAD ----------------

displayTasks(studentProjects);
