import z from "zod"

export const ContactSchema = z.object({
    name: z.string().min(1,"Name is required"),
    email: z.email("Invalid email address"),
    message: z.string().min(1, "Please enter a message"),
});