// Arrays to keep track of each task's state
function newTask(title, details) {
  ;
  const task = {
    taskTitles: title,
    taskComplete: false,
    taskDetails: details,
    logTaskState: function() {

      console.log(`${this.taskTitles} has${this.taskComplete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      this.taskComplete = true;
    }

  };
  return task;
}

// function newTask(title, details) {
//   taskTitles.push(title);
//   taskDetails.push(details);
//   taskComplete.push(false);
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "it sucks"); // task 0
const task2 = newTask("Do Laundry", "it sucks less"); // task 1
const tasks = [task1, task2]
console.log(tasks)
task1.logTaskState();
task1.completeTask();
task1.logTaskState();
task2.completeTask();
task2.logTaskState();
