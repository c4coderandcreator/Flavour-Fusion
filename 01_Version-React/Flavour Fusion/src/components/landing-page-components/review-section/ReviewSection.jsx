import ReviewCard from "./Reviewcard.jsx"

export default function ReviewSection() {

    return (
        <div id="reviews">
            <h2 className="text-center font-bold text-2xl md:mb-6">Our Reviews</h2>
            <div className="flex flex-wrap justify-center items-center pb-10">
                <ReviewCard img="https://raw.githubusercontent.com/c4coderandcreator/BhaiBhai_LoginPortal/main/img/profileAnay.png" reviewer="Anay" review="Yummy food, quick delivery, excellent service. FlavorFusion rocks!" />
                <ReviewCard img="https://raw.githubusercontent.com/c4coderandcreator/BhaiBhai_LoginPortal/main/img/profileAnay.png" reviewer="Anay" review="Impressed by FlavorFusion. On-time, flavorful and satisfying food." />
                <ReviewCard img="https://raw.githubusercontent.com/c4coderandcreator/BhaiBhai_LoginPortal/main/img/profileAnay.png" reviewer="Anay" review="Best online delivery service ever. Fresh, tasty and hot food. Awesome!" />
            </div>
        </div>
    )
}