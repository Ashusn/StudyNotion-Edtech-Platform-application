import React from "react"
import { FaArrowRight } from "react-icons/fa"

import Instructor from "../../../assets/Images/Instructor.png"
import CTAButton from "./Button"
import HighlightText from "./HighlightText"

const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center gap-20 lg:flex-row">
        <div className="lg:w-[50%]">
          <img
            src={Instructor}
            alt=""
            className="shadow-[-20px_-20px_0_0] shadow-white"
          />
        </div>

        <div className="flex flex-col gap-10 lg:w-[50%]">
          <div className="font-semobold text-4xl lg:w-[50%]">
            Become an
            <HighlightText text={"Instructor"} />
          </div>

          <p className="w-[80%] text-[16px] font-medium text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row items-center gap-2">
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorSection
