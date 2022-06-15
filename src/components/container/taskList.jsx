import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levelsEnum';
import { Task } from '../../models/taskClass'
import TaskComponent from '../pure/task'; 
import '../../styles/task.css'

const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
