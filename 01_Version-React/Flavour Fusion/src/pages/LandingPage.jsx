import AboutSection from "../components/landing-page-components/about-section/AboutSection";
import ReviewSection from "../components/landing-page-components/review-section/ReviewSection";
import WelcomeSection from "../components/landing-page-components/welcome-section/WelcomeSection";

import { useContext } from "react";
import { ThemeContext } from "../App";

export default function LandingPage() {

    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={`${darkTheme && "bg-gray-900 text-white"}`}>
            <WelcomeSection />
            <AboutSection />
            <ReviewSection />
        </div>
    )
}
