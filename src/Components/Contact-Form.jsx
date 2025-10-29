import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center grid-cols-2">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle className={"text-center text-2xl text-gray-600"}>
            Contact Me
          </CardTitle>
          <CardContent>
            <Form>
              <form className="space-y-8"></form>
            </Form>
          </CardContent>
          <CardFooter>
            <FormField orientation="horizontal">
              <Button variant={"ghost"}>Reset</Button>
              <Button type="submit">Submit</Button>
            </FormField>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ContactForm;
