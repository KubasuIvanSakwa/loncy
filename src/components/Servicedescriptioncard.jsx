
function Servicedescriptioncard({ title, description}) {

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-black">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    service
                </span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{title}</a></h2>
            <p className="mb-5 font-light text-black">{description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                </div>
            </div>
        </article>
    )
}

export default Servicedescriptioncard