import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { ContactSchema } from "../lib/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "example@123.com",
      message: "",
    },
  });

  //TODO: handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col items-center grid-cols-2 py-16">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle className={"text-center text-2xl text-gray-600"}>
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="your name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@123.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="your message goes here"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <div className="flex gap-2">
                <Button variant={"ghost"}>Reset</Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
