import Servicedescriptioncard from "./Servicedescriptioncard";

function Business() {


    const business_solutions = [
        {
            id: 0,
            title: "Process Optimization",
            description: "Streamlining workflows and processes to improve efficiency and drive business productivity.",
        },
        {
            id: 1,
            title: "Project Management",
            description: "Providing tools and strategies to help plan, execute, and deliver projects on time and within budget.",
        },
        {
            id: 2,
            title: "Market Analysis",
            description: "Conducting in-depth market research to help businesses identify opportunities and stay ahead of competition.",
        },
    ];
    
    

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Business Solutions</h2>
                    <p className="font-light text-black sm:text-xl ">Transforming brands through innovative design solutions that create lasting impressions and drive business success.</p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {business_solutions.map((item) => (
                        <Servicedescriptioncard key={item.id} title={item.title} description={item.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Business
