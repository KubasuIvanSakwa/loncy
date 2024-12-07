import Aboutfooter from "../components/Aboutfooter"
import student from '../assets/student.jpeg'
import workers from '../assets/workers.jpeg'

function About() {

    return (
        <section>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg text-black sm:text-lg ">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">Fueling innovation for startups and Students</h2>
                        <p className="mb-4 font-light text-black">
                        Streamline your projects with a unified and collaborative platform. Connect tasks seamlessly across tools and integrate data from various project management and software solutions, providing your teams with enriched context to address tasks, issues, and updates efficiently. Perfect for IT support, operations, and beyond!
                        </p>
                        <p className="mb-4 font-medium text-black">Provide exceptional service experiences quickly—without the complexity of traditional solutions. Streamline development processes, reduce manual work, and deploy updates effortlessly. Perfect for startups and dynamic teams.</p>
                    </div>
                </div>
            </section>

            <hr className="w-48 h-1 mx-auto my-4 bg-black/30 border-0 rounded md:my-10"></hr>

            <section className="bg-white">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-black sm:text-lg ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Making school projects easier and more efficient—so you can focus on what matters!</h2>
                        <p className="mb-4 text-black">We are strategists, designers, and developers—innovators and problem solvers. Small enough to keep school projects simple and quick, yet capable of delivering the results you need at the pace you want.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src={student} alt="student picture" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src={workers} alt="office content 2" />
                    </div>
                    </div>
            </section>

            <hr className="w-48 h-1 mx-auto my-4 bg-black/30 border-0 rounded md:my-10"></hr>
            <Aboutfooter />
        </section>
    )
}

export default About