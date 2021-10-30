import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField } from "@material-ui/core";

import { Checkbox, Button } from "@material-ui/core";

import "./App.css";

class App extends Tasks {
  state = { tasks: [], currentTask: "" };

  render() {
    const { tasks } = this.state;

    return (
      <div className="App flex">
        <Paper className="container" elevation={3}>
          <div className="Heading"> TO-DO APPLICATION </div>

          <form
            onSubmit={this.handleSubmit}
            className="flex"
            style={{ margin: "15px 0" }}
          >
            <TextField
              value={this.state.currentTask}
              style={{ width: "80px" }}
              size="small"
              variant="outlined"
              required={true}
              onChange={this.handleChange}
              placeholder="Enter To-Do Here"
            />

            <Button type="submit" variant="oulined" color="primary">
              Add Todo
            </Button>
          </form>

          <div>
            {tasks.map((task) => (
              <Paper key={task._id} className="flex task_container">
                <Checkbox
                  checked={task.completed}
                  onClick={() => this.handleUpdate(task._id)}
                  color="primary"
                />

                <div className={task.completed ? "task line_through" : "task"}>
                  {task.task}
                </div>

                <Button
                  onClick={() => this.handleDelete(task._id)}
                  color="secondary"
                >
                  Delete
                </Button>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;