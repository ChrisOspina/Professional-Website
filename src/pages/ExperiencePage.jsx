import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { experience } from "../data/experience";

//for formatting the date
const dateOptions = {
  year: "numeric",
  month: "long", // or 'short', '2-digit'
  day: "numeric", // or '2-digit'
};

const ExperiencePage = () => {
  return (
    <div className="flex flex-col items-center grid-cols-2">
      <div className="space-y-6 mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-500 sm:underline-offset-8">
          Experience
        </h2>
      </div>
      <div class="space-y-4 mb-16">
        {experience.map((job, i) => {
          return (
            <Card className={"w-full max-w-lg mb-16"} key={i} value={job.id}>
              <CardHeader>
                <CardTitle
                  className={"text-3xl text-center mb-8 text-gray-700"}
                >
                  {job.companyName}
                </CardTitle>
                <span className="text-gray-700 font-thin mb-8">
                  {job.location}
                </span>
                <CardDescription
                  className={"text-blue-600 font-semibold text-xl text-center"}
                >
                  {job.roleName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center text-gray-700">
                  <span>{job.description}</span>
                </div>
                <div className="flex flex-col mt-8">
                  <span className="text-blue-600 font-semibold text-xl mb-2 ">
                    Tools:
                  </span>
                  <ul className="list-disc">
                    {job.tools.map((tool) => {
                      return <li className="text-gray-500">{tool}</li>;
                    })}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <div className="space-y-8 text-gray-500">
                  <ul>
                    <li>
                      {job.startDate.toLocaleDateString("en-US", dateOptions)}
                    </li>
                    <li>
                      {job.endDate.toLocaleDateString("en-US", dateOptions)}
                    </li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ExperiencePage;
