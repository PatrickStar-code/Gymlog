import React from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import Login from "@/app/Actions/Login";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UserLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;

// Label Component
const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          type === "file" &&
            "p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserLoginSchemaType>({
    resolver: zodResolver(UserLoginSchema),
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const Router = useRouter();

  async function onSubmit(data: UserLoginSchemaType) {
    const theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    try {
      setLoading(true);
      const res = await Login(data);

      if (res?.successOperation) {
        if (res?.info?.tokenJwt) {
          localStorage.setItem("token", res?.info?.tokenJwt);
          toast.success("Login successful", { theme: theme });
          Router.push("/dashboard");
        }
      } else {
        toast.error("Login failed", { theme: theme });
        console.log(res?.errors);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed", { theme: theme });
    } finally {
      setLoading(false);
      reset();
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label
          htmlFor="username"
          className={` ${
            errors.email ? "text-red-500" : "text-gray-700 dark:text-gray-300"
          } `}
        >
          Email
        </Label>
        <Input
          type="text"
          {...register("email")}
          placeholder="Enter your email"
          required
          className={` ${
            errors.email
              ? "border-red-500 dark:border-red-400"
              : "border-orange-200 dark:border-gray-600"
          }  focus-visible:ring-orange-500/20 focus-visible:border-orange-500`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="password"
          className={` ${
            errors.password
              ? "text-red-500"
              : "text-gray-700 dark:text-gray-300"
          } `}
        >
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
            {...register("password")}
            className="border-orange-200 dark:border-gray-600 focus-visible:ring-orange-500/20 focus-visible:border-orange-500 pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500" />
            ) : (
              <Eye className="h-4 w-4 text-gray-500" />
            )}
          </Button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2.5 shadow-lg"
        disabled={loading}
      >
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
        ) : (
          <>Sign in</>
        )}
      </Button>
    </form>
  );
}
