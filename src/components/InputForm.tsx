"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input, Textarea } from "./input";
import { persons } from "@/lib/data";
import { Button } from "./button";

interface ContactForm {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
const defaultValue = {
  firstName: "",
  lastName: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};
type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export const InputForm = () => {
  const [data, setData] = useState<ContactForm>(defaultValue);
  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target || {};
    setData((prev) => ({
      ...prev,
      [name]: value,
      name:
        name === "firstName" || name === "lastName"
          ? `${name === "firstName" ? value : data.firstName || ""} ${
              name === "lastName" ? value : data.lastName || ""
            }`.trim()
          : prev.name,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(defaultValue);
    console.log(data);
  };
  return (
    <form className="w-full space-y-3" onSubmit={handleSubmit}>
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-2%]">
          Let&apos;s connected
        </h3>
        <div className="space-x-3 space-y-2">
          {persons.map((item) => (
            <Button key={item.id}>{item.name}</Button>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <Input
        type="email"
        placeholder="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        placeholder="Phone number"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        required
      />
      <Textarea
        placeholder="message"
        name="message"
        value={data.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full py-3 text-white bg-primary/75 rounded-md hover:bg-secondary/80 transition-all duration-300 text-xl flex gap-3 justify-center items-center"
      >
        Send{" "}
        <span className="rotate-45 block text-2xl leading-none tracking-normal">
          🚀
        </span>
      </button>
    </form>
  );
};
