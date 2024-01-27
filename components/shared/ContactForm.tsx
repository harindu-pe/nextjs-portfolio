"use client";

import emailjs from "@emailjs/browser";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { ArrowRightIcon } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  from_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  from_email: z.string(),
  message: z
    .string()
    .min(3, "Message must be at least 3 characters")
    .max(500, "Message must be less than 400 characters"),
});

const ContactForm = () => {
  // toaster
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  const sendEmail = (formData: any) => {

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.reset();
    toast({
      title: "Success!",
      description:
        "Thank you for choosing us to bring your digital dreams to life!",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(sendEmail)}
        className="space-y-8 w-full"
      >
        <FormField
          control={form.control}
          name="from_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="from_email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="flex items-center gap-x-1 max-w-[166px]"
        >
          {`Let's Talk`}
          <ArrowRightIcon size={20} />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
