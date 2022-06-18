import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levelsEnum';
import { Task } from '../../models/taskClass'
import TaskComponent from '../pure/task'; 
import '../../styles/task.css'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example1', 'Ddescription1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // we update the state of the componnet with the new list of task and it will update the iteration 
        // of the tasks in order to show the task update
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Deleted this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task){
            console.log('Added this Task', task);
            const index = tasks.indexOf(task);
            const tempTasks = [...tasks];
            tempTasks.push(task);
            setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                        return (
                                            <TaskComponent
                                                key={index}
                                                task={task}
                                                complete={completeTask}
                                                remove={deleteTask}>
                                            </TaskComponent> 
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};

export default TaskListComponent;
