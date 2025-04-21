import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Logo size="medium" />
            <nav className="hidden md:flex gap-6">
              <Link
                href="#services"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
              <Button asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <Logo size="large" className="self-start mb-4" />
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Salesforce Solutions That Drive Business Growth
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Expert Salesforce consulting to optimize your CRM, automate workflows, and maximize ROI.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="px-8">
                    <Link href="#contact">Schedule a Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#services">Explore Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/hero-image.jpg" // Updated path to your actual image
                  alt="Salesforce Dashboard"
                  width={600}
                  height={350}
                  className="rounded-lg object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Salesforce Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From implementation to optimization, we provide end-to-end Salesforce services tailored to your
                  business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Salesforce Implementation",
                  description:
                    "Custom Salesforce setup and configuration aligned with your business processes and goals.",
                },
                {
                  title: "CRM Optimization",
                  description: "Enhance your existing Salesforce instance to improve efficiency and user adoption.",
                },
                {
                  title: "Integration Services",
                  description: "Seamlessly connect Salesforce with your other business systems and applications.",
                },
                {
                  title: "Custom Development",
                  description: "Tailor-made Salesforce solutions including custom objects, fields, and automation.",
                },
                {
                  title: "Training & Support",
                  description: "Comprehensive training programs and ongoing support for your team.",
                },
                {
                  title: "Cloud Migration",
                  description: "Smooth transition of your data and processes to Salesforce Cloud platforms.",
                },
              ].map((service, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <div className="mt-4 flex items-center text-blue-600 dark:text-blue-500">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">About Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Salesforce Expertise You Can Trust
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    With over a decade of experience in Salesforce consulting, we've helped businesses across industries
                    leverage the full potential of the Salesforce platform.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <span>Certified Salesforce Consultants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <span>100+ Successful Implementations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <span>Industry-Specific Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <span>Ongoing Support & Maintenance</span>
                  </div>
                </div>
                <div>
                  <Button asChild>
                    <Link href="#contact">Work With Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/team-photo.jpg" // Updated path to your actual image
                  alt="Our Team"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don't just take our word for it. Here's what our clients have to say about our Salesforce consulting
                  services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  quote:
                    "The team at phpabhishek transformed our Salesforce implementation. Our sales process is now streamlined and our team adoption has increased dramatically.",
                  author: "Sarah Johnson",
                  company: "Marketing Director, TechCorp",
                },
                {
                  quote:
                    "Their expertise in Salesforce integration helped us connect our disparate systems and create a unified view of our customer data.",
                  author: "Michael Chen",
                  company: "CTO, GrowthWave",
                },
                {
                  quote:
                    "The custom development work they did for our unique business requirements was exceptional. They truly understand how to leverage Salesforce to its fullest potential.",
                  author: "Jessica Miller",
                  company: "Operations Manager, InnovateCo",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="relative h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-xl font-bold">{testimonial.author.charAt(0)}</span>
                      </div>
                    </div>
                    <blockquote className="mb-4 italic">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Our Work</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Salesforce Solutions in Action</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how we've helped businesses transform their operations with Salesforce.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/case-study-1.jpg" // Updated path to your actual image
                  alt="Case Study 1"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">Retail Analytics Dashboard</h3>
                  <p className="text-sm text-gray-500">Custom Salesforce implementation for retail analytics</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Case Study 2"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">Healthcare Provider Portal</h3>
                  <p className="text-sm text-gray-500">Integrated patient management system</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Case Study 3"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">Financial Services CRM</h3>
                  <p className="text-sm text-gray-500">Compliance-focused Salesforce solution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Ready to transform your Salesforce experience? Contact us today for a free consultation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <span>+64 277700400</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <span>contact@phpabhishek.nz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <span>193 The Terrace, Wellington Central, Wellington, NZ 6011</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Image
                    src="/images/office-location.jpg" // Updated path to your actual image
                    alt="Office Location"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Logo size="small" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Expert Salesforce consulting services to help your business grow and succeed.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Salesforce Implementation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    CRM Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Integration Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Custom Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} phpabhishek. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
