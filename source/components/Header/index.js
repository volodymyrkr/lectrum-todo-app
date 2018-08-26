import React, {Component} from 'react';
import TasksFilter from "../TasksFilter";

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Планировщик задач</h1>
                <TasksFilter/>
            </div>
        );
    }
}

export default Header;
