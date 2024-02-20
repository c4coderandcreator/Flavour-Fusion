export default function AboutSection() {

    return (
        <div id="about" className="pt-2 md:pt-6 pb-10 md:pb-20 px-8 flex flex-col justify-center items-center md:flex-row-reverse md:px-8 lg:px-24 xl:px-48">
            <div className="md:px-16 md:w-2/4">
                <h2 className="font-bold text-left text-xl md:text-2xl mb-4">
                    Eat What Makes You Healthy & Happy!
                </h2>
                <p className="text-justify text-sm md:text-base mb-6">
                    Have you ever wondered why comfort food has such a powerful impact on our emotions? Science tells us that certain foods can trigger the release of serotonin & dopamine, which are associated with feelings of happiness and relaxation. This biological response is believed to be one reason why we often turn to comfort food during times of stress or sadness.
                </p>
            </div>
            <div className="md:w-2/4 lg:pl-12 xl:pl-28 md:pl-8">
                <img src="../../.././assets/healthyhappyfood.jpg" className="w-48 h-48 rounded-lg my-2 md:my-6 md:w-96 md:h-96" />
            </div>
        </div>
    )
}
