import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { projects } from "../data/projects.js";

const CertificationsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-500 sm:underline-offset-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {projects.map((project, i) => {
            return (
              <div>
                <Card
                  className={"w-full h-[500px] flex flex-col space-x-8"}
                  key={i}
                  value={project.id}
                >
                  <CardHeader>
                    <CardTitle
                      className={"text-3xl text-center mb-8 text-gray-700"}
                    >
                      {project.name}
                    </CardTitle>
                    <CardDescription
                      className={
                        " text-lg font-medium py-6 text-center text-gray-500"
                      }
                    >
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-center justify-center">
                    <div className="space-y-3 badge-image-wrapper">
                      <div className="badge-image">
                        <a href={project.url}>
                          <img
                            className="rounded-lg shadow-2xl border mx-auto h-[200px] w-full object-cover"
                            src={project.image}
                            alt={project.name}
                            // width={230}
                            // height={120}
                          />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
