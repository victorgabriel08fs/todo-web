import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsFillTrashFill, BsListTask } from 'react-icons/bs';
import { Link } from "react-router-dom";
import api from "../../services/api";

const UsersList = ({ users }) => {

    const [viewAll, setViewAll] = useState(true);

    const deleteUser = async (user) => {
        await api.delete(`user/${user.id}`);
    }

    return (

        <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Users</h5>
                <button onClick={() => { setViewAll(!viewAll) }} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    {!viewAll ? <AiFillEye fontSize={26} className="text-blue-600 dark:text-blue-500 cursor-pointer" /> : <AiFillEyeInvisible fontSize={26} className="text-blue-600 dark:text-blue-500 cursor-pointer" />}
                </button>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!viewAll ? '' : users.map((user) => {
                        return (
                            <li key={user.id} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/54713041?v=4" alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {user.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>
                                    <Link to={`/tasks/${user.id}`}><BsListTask fontSize={26} className="text-blue-600 dark:text-blue-500 cursor-pointer" /></Link>
                                    <div className="flex min-w-0">
                                        <BsFillTrashFill fontSize={20} onClick={() => { deleteUser(user) }} className="text-blue-600 dark:text-blue-500 cursor-pointer" />
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

export default UsersList;