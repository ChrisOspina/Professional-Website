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
import axios from "axios";

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
  const onSubmit = async (formValues) => {
    try {
      // form.handleSubmit already prevents default; use values from react-hook-form
      const {
        name: submittedName,
        email: submittedEmail,
        message: submittedMessage,
      } = formValues;

      //Environment variables for emailjs (not used in this snippet)
      const serviceID = "service_rgidq2f";
      const templateID = "template_e7d121r";
      const publicKey = "3BKqHyBmMddhyRi-t";

      //The form data to be sent
      const data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        template_params: {
          name: submittedName,
          email: submittedEmail,
          message: submittedMessage,
        },
      };
      // Sending email using emailjs
      try {
        const res = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          data
        );
        console.log("Email sent successfully:", res.data);
        toast.success("Email sent successfully!");

        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setMessage("");
        form.reset();
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Failed to send message.");
        return;
      }

      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };
  const onReset = () => {
    form.reset();
  };

  return (
    <div className="grid-cols-2 py-16 mb-4 w-full flex justify-center">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle className={"text-center text-3xl text-gray-600"}>
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
                    <FormLabel className={"text-lg text-gray-500"}>
                      Name
                    </FormLabel>
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
                    <FormLabel className={"text-lg text-gray-500"}>
                      Email
                    </FormLabel>
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
                    <FormLabel className={"text-lg text-gray-500"}>
                      Message
                    </FormLabel>
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
                <Button
                  className="text-white space-x-8 bg-blue-600 hover:bg-blue-700"
                  type="submit"
                >
                  Submit
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={onReset}
                >
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
