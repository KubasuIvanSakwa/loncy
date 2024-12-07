import Servicecard from "./Servicecard"

function Servicestab() {
    const services = [
        {
            id: 0, 
            name: 'Education Services', 
            url: 'services/education',
            description: "We create tailored educational solutions, helping students with custom school projects and enhancing their learning experience."
        },
        {
            id: 1, 
            name: 'Business Solutions', 
            url: 'services/business',
            description: "We offer innovative business solutions, designed to streamline processes and drive growth, whether for startups or established companies."
        },
        {
            id: 2, 
            name: 'Design and Branding', 
            url: 'services/branding',
            description: "Our design and branding services help businesses stand out with impactful visuals and creative strategies that resonate with their audience."
        },
    ]
    

    return (


        <div className="grid mt-8 mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            {services.map((item) => (
                <figure key={item.id} className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <figcaption className="flex items-center justify-center ">
                        <Servicecard title={item.name} desc={item.description} url={item.url}/>
                    </figcaption>
                </figure>
            ))}
            
        </div>
    )
}

export default Servicestab