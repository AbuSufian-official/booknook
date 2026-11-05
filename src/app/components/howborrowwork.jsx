
import {
    FaBookOpen,
    FaSearch,
    FaCheckCircle,
    FaArrowRight,
} from "react-icons/fa";

const steps = [
    {
        id: 1,
        icon: <FaSearch />,
        title: "Explore Books",
        description:
            "Discover your favorite books from our growing collection of different categories.",
    },
    {
        id: 2,
        icon: <FaBookOpen />,
        title: "Borrow a Book",
        description:
            "Choose your favorite book and borrow it easily with just a few clicks.",
    },
    {
        id: 3,
        icon: <FaCheckCircle />,
        title: "Read & Return",
        description:
            "Enjoy your reading journey and return the book when you finish.",
    },
];

const HowBorrowingWorks = () => {
    return (
        <section className="bg-white px-4 py-16 md:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#027cd4]">
                        Simple & Easy
                    </span>

                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        How <span className="text-[#027cd4]">Borrowing</span> Works
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
                        Getting your favorite book has never been easier.
                        Follow these three simple steps and start reading today.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="group relative rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#027cd4] hover:shadow-xl"
                        >
                            {/* Step Number */}
                            <span className="absolute right-6 top-5 text-4xl font-bold text-blue-50">
                                0{step.id}
                            </span>

                            {/* Icon */}
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-[#027cd4] transition duration-300 group-hover:bg-[#027cd4] group-hover:text-white">
                                {step.icon}
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-gray-800">
                                {step.title}
                            </h3>

                            <p className="text-sm leading-7 text-gray-500">
                                {step.description}
                            </p>

                            <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#027cd4]">
                                Step {step.id}
                                <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowBorrowingWorks;
