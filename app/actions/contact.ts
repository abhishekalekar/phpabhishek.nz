"use server"

import { z } from "zod"

// Define validation schema for form data
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the submission

    console.log("Contact form submission:", validatedData)

    // For demonstration, we'll simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would send an email using a service like SendGrid, AWS SES, etc.
    // Example (commented out):
    /*
    await sendEmail({
      to: "contact@phpabhishek.nz",
      subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
      text: `
        Name: ${validatedData.firstName} ${validatedData.lastName}
        Email: ${validatedData.email}
        Company: ${validatedData.company || 'Not provided'}
        Message: ${validatedData.message}
      `
    })
    */

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs and try again.",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
