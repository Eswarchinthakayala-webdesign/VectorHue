// pages/Contact.jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo: just log the form (could add real email service/API)
    console.log("Form submitted:", form);
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-4 text-purple-400">Contact Us</h1>
      <p className="mb-8 text-gray-300">
        Have a question, suggestion, or feedback? Reach out to us using the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium pb-3">Name</label>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium pb-3">Email</label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium pb-3">Message</label>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your message"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-purple-400 hover:bg-purple-700 text-white cursor-pointer">
          Send Message
        </Button>
      </form>
    </section>
  );
}
