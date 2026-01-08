"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, Phone } from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { parseAsInteger, useQueryState } from "nuqs";
import { toast } from "sonner";
import { useState } from "react";
import { Spinner } from "./ui/spinner";

export default function RegisterForm({
  setFormSubmitted,
  setRegisteredForm,
}: {
  setFormSubmitted: (value: boolean) => void;
  setRegisteredForm: (value: {
    firstName: string;
    lastName: string;
    register: string;
    phone: string;
  }) => void;
}) {
  const [date, setDate] = useQueryState("date");
  const [time, setTime] = useQueryState("time");
  const [category, setCategory] = useQueryState("category", parseAsInteger);
  const [doctor, setDoctor] = useQueryState("doctor", parseAsInteger);

  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      register: "",
      phone: "",
    },
  });

  const onSubmit = (values: any) => {
    // Validation for required fields
    if (!category) {
      toast.error("Шинжилгээ өгөх төрөл сонгоно уу.", {
        duration: 5000,
        position: "bottom-center",
      });
      return;
    }

    // Date validation
    if (!date) {
      toast.error("Үзлэгийн өдөр сонгоно уу.", {
        duration: 5000,
        position: "bottom-center",
      });
      return;
    }

    // Time validation
    if (!time) {
      toast.error("Цаг сонгоно уу.", {
        duration: 5000,
        position: "bottom-center",
      });
      return;
    }

    // Doctor validation
    if (!doctor) {
      toast.error("Үзлэгт орох эмчээ сонгоно уу.", {
        duration: 5000,
        position: "bottom-center",
      });
      return;
    }

    // Everything is filled, show success
    try {
      setLoading(true);
      console.log(category);
      console.log(date);
      console.log(time);
      console.log(doctor);
      console.log("Form Values:", values);
      setRegisteredForm(values);
      setFormSubmitted(true);
    } catch (error) {
      toast.error("Бүртгэл амжилтгүй боллоо. Дахин оролдоно уу.", {
        duration: 5000,
        position: "bottom-center",
      });
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <Card>
      <CardContent className="grid gap-3">
        <CardTitle className="font-bold text-desccolor dark:text-primary">
          Хэрэглэгчийн мэдээлэл
        </CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
              {/* Last Name */}
              <FormField
                control={form.control}
                name="lastName"
                rules={{ required: "Овог оруулах шаардлагатай" }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Овог"
                          {...field}
                          className="pl-10" // padding for the icon
                        />
                        <User
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                rules={{ required: "Нэр оруулах шаардлагатай" }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Нэр"
                          {...field}
                          className="pl-10" // padding for the icon
                        />
                        <User
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                rules={{
                  required: "Утасны дугаар оруулах шаардлагатай",
                  pattern: {
                    value: /^\d{8,}$/,
                    message: "Утасны дугаар дор хаяж 8 оронтой байх ёстой",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Утасны дугаар"
                          type="tel"
                          {...field}
                          className="pl-10" // add padding-left for the icon
                        />
                        <Phone
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Register */}
              <FormField
                control={form.control}
                name="register"
                // rules={{ required: "Нэр оруулах шаардлагатай" }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Регистэр"
                          {...field}
                          // className="pl-10" // add padding for the icon
                        />
                        {/* <Search
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        /> */}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-auto mx-auto px-10 py-5 cursor-pointer"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner />
                  {"Түр хүлээнэ үү..."}
                </>
              ) : (
                "Бүртгүүлэх"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
