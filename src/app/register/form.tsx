"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import Link from "next/link";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema, studyLevels, useCountriesData } from "@/lib/register";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { addRow } from "@/lib/google-sheets";
import { useSchoolsData } from "@/lib/register/use-schools-data";
import { toast } from "sonner";

const RegisterForm = () => {
  const { countriesData, isLoading: isCountriesLoading } = useCountriesData();
  const { schoolsData, isLoading: isSchoolsLoading } = useSchoolsData();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      age: "",
      phone: "",
      email: "",
      school: "",
      studyLevel: "",
      country: "",
      linkedIn: "",
      mlh: {
        codeOfConduct: false,
        eventInfo: false,
        communication: false,
      },
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const now = new Date();
    const formattedNow = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    const formattedData = {
      "Checked In": "FALSE",
      "First Name": data.fname,
      "Last Name": data.lname,
      Age: data.age,
      "Phone Number": data.phone,
      Email: data.email,
      School: data.school,
      "Level of Study": data.studyLevel,
      Country: data.country,
      LinkedIn: data.linkedIn || "",
      "Receive Communication": data.mlh.communication ?? false,
      "Register Date": formattedNow,
    };

    try {
      await addRow(formattedData);
    } catch {
      toast.error("Failed to register. Please try again.");
    }

    toast.success("Registration successful!", {
      description: formattedNow,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="fname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your age" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="< 18">Below 18</SelectItem>
                  <SelectItem value="≥ 18">18 and above</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="000-000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@acme.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="studyLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Level of Study</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="w-lg">
                  {studyLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country of Residence</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? countriesData.find(
                            (country) =>
                              country.name.toLowerCase() ===
                              field.value.toLowerCase(),
                          )?.name
                        : "Select a country"}
                      <ChevronsUpDownIcon className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-lg">
                  <Command className="w-lg">
                    <CommandInput
                      placeholder="Search a country..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {isCountriesLoading ? (
                          <CommandItem disabled>
                            Loading countries...
                          </CommandItem>
                        ) : (
                          countriesData.map((country, i) => (
                            <CommandItem
                              value={country.name}
                              key={i}
                              onSelect={() => {
                                form.setValue("country", country.name); // Fixed field name
                              }}
                            >
                              {country.name}
                              <CheckIcon
                                className={cn(
                                  "ml-auto",
                                  field.value &&
                                    country.name.toLowerCase() ===
                                      field.value.toLowerCase()
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))
                        )}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="school"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? schoolsData.find(
                            (school) =>
                              school.name.toLowerCase() ===
                              field.value.toLowerCase(),
                          )?.name
                        : "Select a school"}
                      <ChevronsUpDownIcon className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full max-w-lg p-0">
                  <Command className="w-full">
                    <CommandInput
                      placeholder="Search a school..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No school found.</CommandEmpty>
                      <CommandGroup>
                        {isSchoolsLoading ? (
                          <CommandItem disabled>Loading schools...</CommandItem>
                        ) : (
                          schoolsData.map((school, i) => (
                            <CommandItem
                              value={school.name}
                              key={i}
                              onSelect={() => {
                                form.setValue("school", school.name);
                              }}
                            >
                              {school.name}
                              <CheckIcon
                                className={cn(
                                  "ml-auto",
                                  field.value &&
                                    school.name.toLowerCase() ===
                                      field.value.toLowerCase()
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))
                        )}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkedIn"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>LinkedIn Profile</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://www.linkedin.com/in/johndoe/"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mlh.codeOfConduct"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1"
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  I have read and agree to the{""}
                  <Link
                    href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                    className="underline"
                    target="_blank"
                  >
                    {""}
                    MLH Code of Conduct
                  </Link>
                  .
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mlh.eventInfo"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1"
                  />
                </FormControl>
                <FormLabel className="inline text-sm font-normal select-none ...">
                  I authorize you to share my application/registration
                  information with Major League Hacking for event
                  administration, ranking, and MLH administration in-line with
                  the MLH Privacy Policy. I further agree to the terms of both
                  the{" "}
                  <Link
                    href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                    className="underline"
                    target="_blank"
                  >
                    {" "}
                    MLH Contest Terms and Conditions
                  </Link>{" "}
                  and the{" "}
                  <Link
                    href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
                    className="underline"
                    target="_blank"
                  >
                    {" "}
                    MLH Privacy Policy
                  </Link>
                  .
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mlh.communication"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1"
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  I authorize MLH to send me occasional emails about relevant
                  events, career opportunities, and community announcements.
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Continue with other form fields */}
        <Button className="w-full">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
