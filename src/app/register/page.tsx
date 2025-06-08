"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";

// Import the CSV files as URLs rather than trying to import the data directly
const countriesCsvPath = "/countries.csv";
const schoolsCsvPath = "/schools.csv";

const formSchema = z.object({
	fname: z.string().min(1, "First name is required"),
	lname: z.string().min(1, "Last name is required"),
	age: z.string().min(1, "Age is required"),
	phone: z.string().min(1, "Phone number is required"),
	email: z.email().min(1, "Email is required"),
	school: z.string().min(1, "School is required"),
	studyLevel: z.string().min(1, "Level of study is required"),
	country: z.string().min(1, "Country of residence is required"),
	linkedIn: z.url().optional(),
});

const studyLevels = [
	"Less than Secondary / High School",
	"Secondary / High School",
	"Undergraduate University (2 year - community college or similar)",
	"Undergraduate University (3+ year)",
	"Graduate University (Masters, Professional, Doctoral, etc.)",
	"Code School / Bootcamp",
	"Other Vocational / Trade Program or Apprenticeship",
	"Post Doctorate",
	"Other",
	"I'm not currently a student",
	"Prefer not to answer",
];

const Register = () => {
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
		},
	});

	// Define types for CSV data
	interface CountryData {
		name: string;
		alpha2: string;
	}

	interface SchoolData {
		name: string;
	}

	// State to store parsed CSV data
	const [countriesData, setCountriesData] = useState<CountryData[]>([]);
	const [schoolsData, setSchoolsData] = useState<SchoolData[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const { readRemoteFile } = usePapaParse();

	useEffect(() => {
		// Load countries data
		readRemoteFile(countriesCsvPath, {
			download: true,
			header: true,
			complete: (results) => {
				setCountriesData(results.data as CountryData[]);
			},
			error: (error) => {
				console.error("Error loading countries:", error);
			},
		});

		// Load schools data
		readRemoteFile(schoolsCsvPath, {
			download: true,
			header: true,
			complete: (results) => {
				setSchoolsData(results.data as SchoolData[]);
				setIsLoading(false);
			},
			error: (error) => {
				console.error("Error loading schools:", error);
				setIsLoading(false);
			},
		});
	}, [readRemoteFile]);

	function onSubmit(data: z.infer<typeof formSchema>) {
		console.log("Form submitted with data:", data);
	}

	return (
		<main className="mx-auto max-w-lg">
			<h1 className="mt-40 mb-10">Register for Emory Hacks 2026</h1>
			{isLoading ? (
				<p>Loading form data...</p>
			) : (
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
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select your age" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="18-">Under 18</SelectItem>
											<SelectItem value="18+">18+</SelectItem>
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
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
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
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value
														? countriesData.find(
																(country) =>
																	country.name.toLowerCase() ===
																	field.value.toLowerCase()
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
														{countriesData.map((country, i) => (
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
																			: "opacity-0"
																	)}
																/>
															</CommandItem>
														))}
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
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value
														? schoolsData.find(
																(school) =>
																	school.name.toLowerCase() ===
																	field.value.toLowerCase()
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
														{schoolsData.map((school, i) => (
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
																			: "opacity-0"
																	)}
																/>
															</CommandItem>
														))}
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

						{/* Continue with other form fields */}
						<Button className="w-full">Submit</Button>
					</form>
				</Form>
			)}
		</main>
	);
};

export default Register;
