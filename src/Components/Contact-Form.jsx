import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { ContactSchema } from "../lib/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  //TODO: handle form submission
  const onSubmit = (e) => {
    try {
      e.preventDefault();

      //Environment variables for emailjs (not used in this snippet)
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      //The form data to be sent
      const data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        templateParams: {
          name: name,
          email: email,
          message: message,
        },
      };

      // emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      //   (response) => {
      //     console.log("SUCCESS!", response.status, response.text);
      //     setName("");
      //     setEmail("");
      //     setMessage("");
      //   },
      //   (error) => {
      //     console.log("FAILED...", error);
      //     toast.error("Failed to send message.");
      //   }
      // );

      //console.log("Form Data:", data);
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  const onReset = () => {
    toast.info("Form reset.");
    form.reset();
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
                      <Input
                        type={"text"}
                        placeholder="your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        {...field}
                      />
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
                      <Input
                        placeholder="example@123.com"
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        {...field}
                      />
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <div className="flex gap-2 justify-center">
                <Button className="text-white space-x-8" type="submit">
                  Submit
                </Button>
                <Button className="bg-red-500 text-white" onClick={onReset}>
                  Reset
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
