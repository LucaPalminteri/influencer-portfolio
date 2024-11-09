"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="px-4 py-16 bg-background">
      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-input text-foreground"
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-input text-foreground"
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-input text-foreground"
        />
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Send Message
        </Button>
      </form>
    </section>
  );
}
