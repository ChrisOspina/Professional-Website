import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "./ui/form";
import { Button } from "./ui/button";
import { ContactSchema } from "../lib/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import axios from "axios";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  //TODO: handle form submission
  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const { name, email, message } = values;

      const data = {
        service_id: "service_rgidq2f",
        template_id: "template_e7d121r",
        user_id: "3BKqHyBmMddhyRi-t",
        template_params: { name, email, message },
      };

      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );

      if (res !== 200) {
        throw new Error("Failed to send email");
      }

      toast.success("Email sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onReset = () => {
    form.reset();
  };

  return (
    <div className="grid-cols-2 mb-4 w-full flex justify-center">
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
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className={"text-lg text-gray-500"}>
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input type={"text"} placeholder="your name" {...field} />
                    </FormControl>
                    <FormMessage className={"text-sm text-red-600"} />
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
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className={"text-sm text-red-600"} />
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
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className={"text-sm text-red-600"} />
                  </FormItem>
                )}
              ></FormField>
              <div className="flex gap-2 justify-center">
                <Button
                  className="text-white space-x-8 bg-blue-600 hover:bg-blue-700"
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
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
