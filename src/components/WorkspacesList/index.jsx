import { useEffect, useState } from "react";
import { AiFillAlert, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BsFillTrashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { TbWaveSawTool } from 'react-icons/tb';
import { GrDocumentText } from 'react-icons/gr';
import { BiCameraMovie } from 'react-icons/bi';
import api from "../../services/api";
import moment from 'moment';
import { icons } from "react-icons";
import { MdMapsHomeWork, MdPets, MdSportsBar, MdSportsVolleyball } from "react-icons/md";

const WorkspacesList = ({ workspaces }) => {

    const [viewAll, setViewAll] = useState(true);

    const navigate = useNavigate();
    const now = Date();

    const icon = (iconName) => {
        switch (iconName) {
            case 'health':
                return <TbWaveSawTool fontSize={20} className="text-blue-600 dark:text-blue-500" />;
            case 'pet':
                return <MdPets fontSize={20} className="text-blue-600 dark:text-blue-500" />
            case 'work':
                return <GrDocumentText fontSize={20} className="text-blue-600 dark:text-blue-500" />;
            case 'sport':
                return <MdSportsVolleyball fontSize={20} className="text-blue-600 dark:text-blue-500" />;
            case 'social':
                return <MdSportsBar fontSize={20} className="text-blue-600 dark:text-blue-500" />;
            case 'entertainment':
                return <BiCameraMovie fontSize={20} className="text-blue-600 dark:text-blue-500" />;
            default:
                return <MdMapsHomeWork fontSize={20} className="text-blue-600 dark:text-blue-500" />;
        }
    }

    const priorityColor = (priorityName) => {
        switch (priorityName) {
            case 'High':
                return 'text-red-600 dark:text-red-500';
            case 'Low':
                return 'text-green-600 dark:text-green-500'
            default:
                return 'text-yellow-600 dark:text-yellow-500';
        }
    }

    const doneWorkspace = async (workspace) => {
        await api.patch(`workspace/${workspace.id}`, { done: !workspace.done });
    }

    const deleteWorkspace = async (workspace) => {
        await api.delete(`workspace/${workspace.id}`);
    }

    return (
        <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Workspaces</h5>
                <button onClick={() => { setViewAll(!viewAll) }} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    {!viewAll ? <AiFillEye fontSize={26} className="text-blue-600 dark:text-blue-500" /> : <AiFillEyeInvisible fontSize={26} className="text-blue-600 dark:text-blue-500" />}
                </button>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!viewAll ? '' : workspaces.map((workspace) => {
                        return (
                            <li key={workspace.id} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    {icon(workspace.icon)}
                                    <div className="flex-1 min-w-0">
                                        <Link to={`/tasks/${workspace.id}`} relative={`tasks/${workspace.id}`} ><p className="text-md font-medium text-gray-900 truncate dark:text-white">{workspace.name}</p></Link>
                                    </div>
                                    {workspace.priority} <AiFillAlert fontSize={20} className={priorityColor(workspace.priority)} />
                                    <div className="flex min-w-0">
                                        <BsFillTrashFill fontSize={20} onClick={() => { deleteWorkspace(workspace) }} className="text-blue-600 dark:text-blue-500 cursor-pointer" />
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

export default WorkspacesList;