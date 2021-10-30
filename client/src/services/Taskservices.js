import axios from "axios";

const apiUrl = "http://localhost:8080/api/tasks";

function getTasks() {
  return axios.get(apiUrl);
}

function addTask(task) {
  return axios.post(apiUrl, task);
}

function updateTask(task) {
  return axios.put(apiUrl + "/" + id, task);
}

function deleteTask(id) {
  return axios.delete(apiUrl + "/" + id);
}

export default { addTask, getTasks, updateTask, deleteTask };

