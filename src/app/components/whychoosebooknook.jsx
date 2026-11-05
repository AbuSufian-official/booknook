
import {
    FaBook,
    FaClock,
    FaLaptop,
    FaHeart,
    FaShieldAlt,
    FaUsers,
} from "react-icons/fa";

const features = [
    {
        icon: <FaBook />,
        title: "Wide Book Collection",
        description:
            "Explore books from fiction, science, history, kids and many more categories.",
    },
    {
        icon: <FaClock />,
        title: "Easy Borrowing",
        description:
            "Borrow your favorite books with a simple and convenient borrowing process.",
    },
    {
        icon: <FaLaptop />,
        title: "Manage Your Books",
        description:
            "Keep track of your borrowed books and manage your reading collection easily.",
    },
    {
        icon: <FaHeart />,
        title: "Reader Friendly",
        description:
            "Enjoy a simple and comfortable experience designed for every book lover.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Personal Library",
        description:
            "View your borrowed books and keep your library activity organized.",
    },
    {
        icon: <FaUsers />,
        title: "For Every Reader",
        description:
            "A welcoming online library for students, learners and passionate readers.",
    },
];

const WhyChooseBookNook = () => {
    return (
        <section className="bg-blue-50/60 px-4 py-16 md:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#027cd4] shadow-sm">
                        Discover BookNook
                    </span>

                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Why Choose <span className="text-[#027cd4]">BookNook?</span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
                        Everything you need for a better reading experience.
                        Discover a smarter and easier way to enjoy books.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-blue-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#027cd4] hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#027cd4] text-2xl text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                                {feature.icon}
                            </div>

                            <h3 className="mb-3 text-lg font-bold text-gray-800">
                                {feature.title}
                            </h3>

                            <p className="text-sm leading-7 text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseBookNook;
