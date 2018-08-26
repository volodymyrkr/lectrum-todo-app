import React, {Component} from 'react';
import Task from "../Task";

class TasksList extends Component {
    render() {
        return (
            <div>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </div>
        );
    }
}

export default TasksList;
