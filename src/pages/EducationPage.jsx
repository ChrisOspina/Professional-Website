import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { education } from "../data/education";

const EducationPage = () => {
  return (
    <div className="flex flex-col items-center grid-cols-2">
      <div className="space-y-6 mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-500 sm:underline-offset-8">
          Education
        </h2>
      </div>
      <div className="space-y-4 mb-16">
        {education.map((school, i) => {
          return (
            <Card className={"w-full max-w-lg mb-16"} key={i} value={school.id}>
              <CardHeader>
                <CardTitle
                  className={"text-3xl text-center mb-8 text-gray-700"}
                  href={school.url}
                >
                  {school.schoolName}
                </CardTitle>
                <span className="text-gray-700 font-thin mb-8">
                  {school.location}
                </span>

                <CardDescription
                  className={" text-lg text-center text-gray-700"}
                >
                  {school.degree}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col mt-8">
                  <span className="text-blue-600 font-semibold text-xl mb-2 ">
                    Relevant Coursework:
                  </span>
                  <ul className="list-disc">
                    {school.coursework.map((course) => {
                      return <li className="text-gray-500">{course}</li>;
                    })}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default EducationPage;
