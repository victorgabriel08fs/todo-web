import { useEffect, useState } from 'react';
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading';
import UserForm from '../../../components/UserForm';
import UsersList from '../../../components/UsersList';
import api from '../../../services/api';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [list, setList] = useState(true);
    var style = [];
    style['linkStyleCurrent'] = "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group";
    style['textStyleCurrent'] = "w-5 h-5 mr-2 text-blue-600 dark:text-blue-500";
    style['linkStyleNotCurrent'] = "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group";
    style['textStyleNotCurrent'] = "w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300";
    const getUsers = async () => {
        await api.get('user').then((response) => {
            const data = response.data;
            setUsers(data);
        });
        setLoading(false);
    }

    useEffect(() => {
        getUsers();
    }, [users]);

    return (
        <>
            <nav className="flex px-5 py-3 mb-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <AiFillHome fontSize={20} className="mr-2 text-blue-600 dark:text-blue-500" /> Home
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="mr-2">
                        <button onClick={() => { if (!list) { setList(!list) } }} className={list ? style['linkStyleCurrent'] : style['linkStyleNotCurrent']}>
                            <BsListTask className={list ? style['textStyleCurrent'] : style['textStyleNotCurrent']} />Users
                        </button>
                    </li>
                    <li className="mr-2">
                        <button onClick={() => { if (list) { setList(!list) } }} className={!list ? style['linkStyleCurrent'] : style['linkStyleNotCurrent']} aria-current="page">
                            <AiOutlinePlus className={!list ? style['textStyleCurrent'] : style['textStyleNotCurrent']} />Create
                        </button>
                    </li>
                </ul>
            </div>
            {list ? (loading ? <Loading /> : <UsersList users={users} />) : <UserForm />}
        </>


    );
}

export default UsersPage;