import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import moment from 'moment';

const TasksList = ({ tasks, stats }) => {

    const [viewAll, setViewAll] = useState(true);

    const navigate = useNavigate();
    const now = Date();

    const doneTask = async (task) => {
        await api.patch(`task/${task.id}`, { done: !task.done });
    }

    const deleteTask = async (task) => {
        await api.delete(`task/${task.id}`);
    }

    return (
        <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Tasks - {`${stats.countDone}/${stats.count}`}</h5>
                <button onClick={() => { setViewAll(!viewAll) }} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    {!viewAll ? <AiFillEye fontSize={26} className="text-blue-600 dark:text-blue-500" /> : <AiFillEyeInvisible fontSize={26} className="text-blue-600 dark:text-blue-500" />}
                </button>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!viewAll ? '' : tasks.map((task) => {
                        return (
                            <li key={task.id} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={() => { doneTask(task) }} type="checkbox" checked={task.done} />
                                    </div>
                                    <div className="flex-1 min-w-0">

                                        {task.done ? <p className="text-sm font-medium text-gray-900 truncate dark:text-white"><s>{task.title}</s></p> : <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{task.title}</p>}

                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {task.description}
                                        </p>
                                        <p className={`text-sm font-semibold ${task.date != null ? moment(task.date).diff(moment(now)) < 0 ? 'text-red-500 truncate dark:text-red-400' : 'text-gray-500 truncate dark:text-gray-400' : ''}`}>
                                            {task.date != null ? moment(task.date).format('MM/DD/YYYY') : ''}
                                        </p>
                                    </div>
                                    <div className="flex min-w-0">
                                        <BsFillTrashFill fontSize={20} onClick={() => { deleteTask(task) }} className="text-blue-600 dark:text-blue-500 cursor-pointer" />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>

    );
}

export default TasksList;