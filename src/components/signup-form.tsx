// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
const signUpSchema = z.object({
  fullName: z.string().min(1, "This field is required"),
  phoneNumber: z.string().min(10, "This field is required"),
  companyName: z.string().min(2, "This field is required"),
  email: z
    .string()
    .min(10, "This field is required")
    .email("Email không hợp lệ"),
  note: z.string().optional().or(z.literal("")),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export function SignUpForm({ ...props }: React.ComponentProps<typeof Card>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    console.log("Sending...", data);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Send successfully!");
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <Card {...props}>
      <CardHeader>
        {/* header - logo */}
        <div className="flex flex-col items-center text-center gap-1 ">
          <a
            href="/"
            className="mx-auto w-fit text-center flex items-center gap-1 cursor-pointer"
          >
            <img
              src="https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/logo.png"
              className="w-56 h-8"
              alt="logo.png"
            />
          </a>
          <CardTitle className="text-2xl text-center text-teal-600">
            Contact Form
          </CardTitle>
          <CardDescription className="text-[12.5px] text-center text-balance text-zinc-500">
            Please enter your information below so we can contact you.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup> */}
          <div className="flex flex-col gap-3">
            {/* full name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="block text-sm">
                Fullname:
              </Label>
              <Input type="text" id="fullName" {...register("fullName")} />
              {errors.fullName && (
                <p className="text-sm text-destructive">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            {/* phone number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="block text-sm">
                Phone Number:
              </Label>
              <Input
                type="text"
                id="phoneNumber"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-destructive">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            {/* company name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="block text-sm">
                Company Name:
              </Label>
              <Input
                type="text"
                id="companyName"
                {...register("companyName")}
              />
              {errors.companyName && (
                <p className="text-sm text-destructive">
                  {errors.companyName.message}
                </p>
              )}
            </div>
            {/* email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email:
              </Label>
              <Input
                type="text"
                id="email"
                placeholder="VD: hello@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* note */}
            <div className="space-y-2">
              <Label htmlFor="note" className="block text-sm">
                Note:
              </Label>
              <Textarea id="note" {...register("note")} />
            </div>
            {/* send button */}
            <Button
              type="submit"
              className="mt-2 bg-teal-700 hover:bg-teal-500 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
