"use client";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Input, Textarea } from "./input";
import { ContactForm, IPerson } from "@/types";
import { SendMessage } from "@/server/mail";
import { toast } from "sonner";

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
export const InputForm: FC<TProps> = ({ activePerson }) => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsons = activePerson.map((parson) => parson.email);

    if (data.phone) {
      const reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      if (!reg.test(data.phone))
        return toast.error("Please enter a valid phone number!");
    }

    if (data.name && data.email && data.phone && data.message) {
      toast.promise(SendMessage(parsons, data), {
        loading: "Loading...",
        success: "Message sent successfully! 🚀",
        error: "Failed to send message! 😢",
      });
      setData(defaultValue);
    } else toast.error("Please fill all the fields!");
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
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </div>
      <Input
        type="email"
        placeholder="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Phone number"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />
      <Textarea
        placeholder="message"
        name="message"
        value={data.message}
        onChange={handleChange}
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
