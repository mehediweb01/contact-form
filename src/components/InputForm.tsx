import React from "react";
import { Input, Textarea } from "./input";
import { persons } from "@/lib/data";
import { Button } from "./button";

export const InputForm = () => {
  return (
    <form className="w-full space-y-3">
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
        <Input type="text" placeholder="First Name" required />
        <Input type="text" placeholder="Last Name" required />
      </div>
      <Input type="email" placeholder="email" required />
      <Input type="number" placeholder="Phone number" required />
      <Textarea placeholder="message" required />
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
