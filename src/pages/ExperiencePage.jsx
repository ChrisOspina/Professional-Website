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
                <CardTitle>
                  <a href={job.url}>
                    <h2 className="text-3xl text-center mb-8 text-gray-700 hover:text-blue-600">
                      {job.companyName}
                    </h2>
                  </a>
                </CardTitle>
                <span className="text-gray-700 font-medium mb-8 text-center">
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
                <div className="flex flex-col mt-8 items-center">
                  <span className="text-blue-600 font-semibold text-xl mb-2 underline ">
                    Tools
                  </span>
                  <ul className="list-disc">
                    {job.tools.map((tool) => {
                      return <li className="text-gray-500">{tool}</li>;
                    })}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <div className="space-y-8 text-gray-500 font-semibold">
                  <span>
                    {job.startDate.toLocaleDateString("en-US", dateOptions)} -{" "}
                    {job.endDate.toLocaleDateString("en-US", dateOptions)}{" "}
                  </span>
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
