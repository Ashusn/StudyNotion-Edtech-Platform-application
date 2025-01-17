import React from "react"

import CTAButton from "../HomePage/Button"
import HighlightText from "../HomePage/HighlightText"

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
]

const LearningGrid = () => {
  return (
    <div className="mx-auto mb-12 grid w-[350px] grid-cols-1 xl:w-fit xl:grid-cols-4">
      {LearningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${index === 0 && "p-5 lg:col-span-2 lg:h-[280px]"}
                ${
                  card.order % 2 === 1
                    ? "bg-richblack-700 p-5 lg:h-[280px]"
                    : "bg-richblack-800 p-5 lg:h-[280px]"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
          >
            {card.order < 0 ? (
              <div className="flex flex-col gap-3 pb-5 lg:w-[90%]">
                <div className="text-4xl font-semibold">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="font-medium">{card.description}</p>
                <div className="mt-4 w-fit">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-8 p-7">
                <h1 className="text-lg text-richblack-5">{card.heading}</h1>
                <p className="font-medium text-richblack-300">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default LearningGrid
