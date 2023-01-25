import { useState } from "react";
import api from "../../services/api";

const WorkspaceForm = ({ userId }) => {
    const [name, setName] = useState("");
    const [priority, setPriority] = useState("");
    const [icon, setIcon] = useState("");
    const handleSubmit = async (e) => {
        await api.post('workspace', { name, userId, priority, icon });
    }

    return (

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                <h5 className="text-xl mb-4 font-medium text-gray-900 dark:text-white">New Workspace</h5>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input onChange={(e) => { setName(e.target.value) }} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="icons" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select onChange={(e) => { setIcon(e.target.value) }} id="icons" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected hidden>Choose the icon</option>
                        <option value="normal">Normal</option>
                        <option value="health">Health</option>
                        <option value="pet">Pet</option>
                        <option value="work">Work</option>
                        <option value="sport">Sport</option>
                        <option value="social">Social</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="countries" onChange={(e) => { setPriority(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected hidden>Choose the priority</option>
                        <option value="High">High</option>
                        <option value="Normal">Normal</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
            </form>
        </div>
    );
}

export default WorkspaceForm;