import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { ContactSchema } from "../lib/contactSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ContactForm = () => {
  const form =
    useForm <
    z.infer <
    typeof ContactSchema >>
      {
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      };

  return (
    <div className="flex flex-col items-center grid-cols-2">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle className={"text-center text-2xl text-gray-600"}>
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField orientation="horizontal">
                <Button variant={"ghost"}>Reset</Button>
                <Button type="submit">Submit</Button>
              </FormField>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
