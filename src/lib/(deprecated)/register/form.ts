import { z } from "zod/v4";

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
  resume: z.instanceof(File).nullable(),
  mlh: z.object({
    codeOfConduct: z.boolean().refine((val) => val, {
      message: "You must agree to the MLH Code of Conduct.",
    }),
    eventInfo: z.boolean().refine((val) => val, {
      message:
        "You must agree to the MLH Terms and Conditions and Privacy Policy.",
    }),
    communication: z.boolean().optional(),
  }),
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

export { formSchema, studyLevels };
