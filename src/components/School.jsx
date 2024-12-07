import Servicedescriptioncard from "./Servicedescriptioncard";

function School() {

    const school_services = [
        {
            id: 0,
            title: "Thesis/Dissertation",
            description: "Usually shorter and less rigorous than postgraduate theses. Focuses on practical research or a specific topic.",
        },
        {
            id: 1,
            title: "Capstone Project",
            description: "Common in professional or technical programs. Involves solving real-world problems or creating tangible products.",
        },
        {
            id: 2,
            title: "Internship/Practicum Report",
            description: "For applied fields such as engineering, business, or healthcare. Requires reports based on hands-on experience.",
        },
    ];

    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Education Services</h2>
                    <p className="font-light text-black sm:text-xl ">Empowering the next generation through innovative educational solutions that simplify learning and drive success.</p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {school_services.map((item) => (
                        <Servicedescriptioncard key={item.id} title={item.title} description={item.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default School