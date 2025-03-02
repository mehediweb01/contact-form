"use client";
import React, { useState } from "react";
import { persons } from "@/lib/data";
import { Button, InputForm } from "@/components";
import { IPerson } from "@/types/index.d";

export const ContactUs = () => {
  const [activePerson, setActivePerson] = useState<IPerson[]>([]);
  const isActive = (person: IPerson) => activePerson.includes(person);
  const handleSelect = (person: IPerson) => {
    if (isActive(person)) {
      setActivePerson(activePerson.filter((p) => p.id !== person.id));
    } else {
      setActivePerson([...activePerson, person]);
    }
  };
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-2%]">
          Let&apos;s connected
        </h3>
        <div className="space-x-3 space-y-2">
          {persons.map((item) => (
            <Button
              onClick={() => handleSelect(item)}
              className={
                isActive(item)
                  ? "bg-gradient-to-r from-secondary to-primary"
                  : ""
              }
              key={item.id}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      <InputForm activePerson={activePerson} />
    </div>
  );
};
