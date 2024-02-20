/* eslint-disable react/prop-types */

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import { useContext } from 'react';
import { ThemeContext } from "../../../App"

function Reviewcard(props) {

    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className="shadow-md shadow-gray-400 rounded-lg h-64 w-48 md:h-60 md:w-72 mx-4 my-3 md:my-8 flex flex-col justify-center items-center ">
            <div className="">
                <img src={props.img} alt="review-img" className="h-20 w-20 rounded-full " />
            </div>
            <div className="font-bold md:text-xl ">
                <h3>{props.reviewer}</h3>
            </div>
            <div className="px-3 text-center text-sm md:text-base">
                <p>{props.review}</p>
            </div>
            <div className={`flex text-lime-500 ${darkTheme && "text-lime-900"}`}>
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarHalfRoundedIcon />
            </div>
        </div>
    )
}

export default Reviewcard
