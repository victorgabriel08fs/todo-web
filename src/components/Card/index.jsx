import react from 'react';

const Card = (props) => {
    return <div key={props.key} className=''>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className="mb-2 text-9xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h1>
            <div className='flex flex-row justify-between'>
                {props.contents.map((content) => {
                    return (
                        <p className="font-normal px-5 text-gray-700 dark:text-gray-400">{content}</p>)
                })}
            </div>
        </a>
        <br />
    </div>
}

export default Card;