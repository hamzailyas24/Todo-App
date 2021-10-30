import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/tasks';

export default function getTasks() {

    return axios.get(apiUrl);

}

export default function addTask(task) {

    return axios.post(apiUrl, task);

}

export default function updateTask(task) {

    return axios.put(apiUrl + '/' + id, task);

}

export default function deleteTask(id) {
    
    return axios.delete(apiUrl + '/' + id);
    
}