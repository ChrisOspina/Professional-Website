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
    <div className="flex flex-col items-center grid-cols-2">
      <div className="pace-y-6 mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-500 sm:underline-offset-8">
          Projects
        </h2>
        <div className="space-y-4 mb-16">
          {projects.map((project, i) => {
            return (
              <div>
                <Card
                  className={"w-full max-w-lg mb-16"}
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
                  <CardContent>
                    <div className="space-y-6 badge-image-wrapper">
                      <div className="badge-image">
                        <a href={project.url}>
                          <img
                            className="rounded-lg shadow-2xl border mx-auto"
                            src={project.image}
                            alt={project.name}
                            width={230}
                            height={120}
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
