"use client";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Input, Textarea } from "./input";
import { ContactForm, IPerson } from "@/types";

const defaultValue = {
  firstName: "",
  lastName: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type TProps = { activePerson: IPerson[] };
export const InputForm: FC<TProps> = ({}) => {
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
  };
  return (
    <form className="w-full space-y-3" onSubmit={handleSubmit}>
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
