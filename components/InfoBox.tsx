import React from "react";

export default function InfoBox({
  category,
  getDate,
  time,
  firstName,
  lastName,
  register,
  phone,
  name,
}: {
  category: number | null;
  getDate: string;
  time: string;
  firstName: string;
  lastName: string;
  register: string | null;
  phone: string;
  name: string;
}) {
  return (
    <div className="border border-primary grid gap-4 w-full rounded-3xl p-4 text-titlecolor font-semibold dark:text-white">
      <div className="flex items-center justify-between gap-4">
        <p className="dark:text-white">Үзлэгийн төрөл:</p>
        <span className="text-desccolor dark:text-white">{name}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>Үзлэг хийх өдөр:</p>
        <span className="text-desccolor dark:text-white">{getDate}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>Үзлэг хийх цаг:</p>
        <span className="text-desccolor dark:text-white">{time}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>Төлбөрийн мэдээлэл:</p>
        <span className="text-desccolor dark:text-white">PAYMENT</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>Урьдчилж төлөх төлбөр:</p>
        <span className="text-desccolor dark:text-white">PAYMENT</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>Овог нэр:</p>
        <span className="text-desccolor dark:text-white">
          {lastName} {firstName}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>Утас:</p>
        <span className="text-desccolor dark:text-white">{phone}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p>РДугаар:</p>
        <span className="text-desccolor dark:text-white">
          {register || "-/-"}
        </span>
      </div>
    </div>
  );
}
