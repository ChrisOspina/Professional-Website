import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { certifications } from "../data/certifications.js";

const CertificationsPage = () => {
  return (
    <div className="flex flex-col items-center grid-cols-2">
      <div className="space-y-6 mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-500 sm:underline-offset-8">
          Certifications
        </h2>
        <div className="space-y-4 mb-16">
          {certifications.map((badge, i) => {
            return (
              <div>
                <Card
                  className={"w-full max-w-lg mb-16"}
                  key={i}
                  value={badge.id}
                >
                  <CardHeader>
                    <CardTitle
                      className={"text-3xl text-center mb-4 text-gray-700"}
                    >
                      {badge.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6 badge-image-wrapper">
                      <div className="badge-image">
                        <img
                          className="rounded-lg shadow-2xl border mx-auto"
                          src={badge.image}
                          alt={badge.name}
                          width={230}
                          height={120}
                        />
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
