import { useContext } from "react"
import { ThemeContext } from "../../../App"

export default function WelcomeSection() {

    const { darkTheme } = useContext(ThemeContext)

    return (
        <div id="home" className="py-6 flex flex-col justify-center items-center md:flex-row-reverse md:py-24 md:px-8 lg:px-24 xl:px-48">
            <div className="md:w-2/4 flex justify-center items-center">
                <img src="../../.././assets/salmon-salad.png" alt="salmon-salad" className="w-48 h-48 md:w-96 md:h-96 " />
            </div>
            <div className="my-8 px-6 md:px-16 text-center md:text-left md:w-2/4 lg:pl-12 xl:pl-28 md:pl-8">
                <h1 className=" font-bold text-3xl mb-6 md:text-4xl lg:text-5xl">
                    Plant Based Meat Salad
                </h1>
                <p className="font-semibold text-md md:text-base lg:text-xl">
                    Food Fusion Fun
                </p >
                <p className="mb-6 text-sm md:text-base lg:text-xl">
                    Where Tradition Meets Innovation <br /> and Healthy Meets Tasty!
                </p>
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center">
                    <button className={`bg-lime-500 py-2 px-5 md:py-3 md:px-5 lg:px-7 text-sm md:text-md lg:text-base rounded-full font-bold mb-2 md:mb-6 md:mr-4 transition duration-300 ease-in-out hover:shadow-md hover:shadow-black ${darkTheme && "bg-lime-900 hover:shadow-gray-500"}`} >
                        SIGN UP
                    </button>
                    <button className={`border-lime-500 border-2 py-2 px-5 md:py-3 md:px-5  lg:px-7 text-sm md:text-md lg:text-base font-bold md:mb-6 rounded-full transition duration-300 ease-in-out hover:shadow-md hover:shadow-lime-500 ${darkTheme && "border-lime-900 hover:shadow-lime-900"}`}>
                        LOG IN
                    </button>
                </div>
            </div>
        </div>
    )
}