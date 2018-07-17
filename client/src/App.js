import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // getTasks = getTasks.bind
  }

  componentDidMount() {
    this.getTasks();
    this.getBlockers();
    this.getUsers();
  }

  getTasks() {
    fetch('/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks: tasks }))
      .catch(err => console.log(err));
  }

  getBlockers() {
    fetch('/blockers')
      .then(res => res.json())
      .then(blockers => this.setState({ blockers: blockers }))
      .catch(err => console.log(err));
  }

  getUsers() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }))
      .catch(err => console.log(err))
  }

  postTask(data) {
    fetch('/tasks', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  updateTask(data) {
    fetch('/tasks', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  postBlocker(data) {
    fetch('/blockers', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div class="ui three column grid">
          <div class="column">Not Started
            <div class="ui cards">
              {this.state.tasks && this.state.tasks.map((task) => (
                <div class="card">
                <div class="content">
                  <div class="header">{task.title}</div>
                  <div class="description">
                    {task.description}
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
          <div class="column">Not Started
          </div>
          <div class="column">Not Started
          </div>
        </div>
        {/* <div class="ui three column grid">
          <div class="row">
            <div class="column">Not Started

              {this.state.tasks && this.state.tasks.map((task) => (
                <div class="row">
                  <div class="card">
                    <div class="content">
                      <div class="header">{task.title}</div>
                      <div class="description">
                        {task.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="column">In Progress</div>
            <div class="column">Complete</div>
          </div>
        </div> */}

        {/* {this.state.tasks && this.state.tasks.map(task => (
          <div key={task.id}>
            {task.title} - {task.description}
            {this.state.blockers && this.state.blockers.map(blocker => {
              if (blocker.task_id === task.id) {
                return (
                  <div>
                    {blocker.title} - {blocker.description}
                  </div>
                )
              }
            }
            )}
          </div>
        ))
        } */}
      </div>
    );
  }
}

export default App;
