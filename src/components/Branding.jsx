import Servicedescriptioncard from "./Servicedescriptioncard";

function Branding() {

    const branding_services = [
        {
            id: 0,
            title: "Logo Design",
            description: "Crafting unique and memorable logos that reflect your brand's identity and leave a lasting impression.",
        },
        {
            id: 1,
            title: "Brand Strategy",
            description: "Developing effective brand strategies to ensure consistency, relevance, and emotional connection with your audience.",
        },
        {
            id: 2,
            title: "Marketing Collaterals",
            description: "Designing visually appealing marketing materials such as brochures, flyers, and social media graphics to elevate your brand presence.",
        },
    ];
    

    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Design & Branding</h2>
                    <p className="font-light text-black sm:text-xl ">Transforming brands through innovative design solutions that create lasting impressions and drive business success.</p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {branding_services.map((item) => (
                        <Servicedescriptioncard key={item.id} title={item.title} description={item.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Branding