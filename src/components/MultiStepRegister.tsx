"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Ruler,
  Activity,
  Users,
  Check,
} from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./CardLogin";

interface UserFormData {
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
  height: string;
  weight: string;
  age: string;
  dateOfBirth: string;
  activityLevel: string;
  goal: string;
  goalWeight: string;
  gender: string;
  isActive: boolean;
}

interface StepProps {
  data: UserFormData;
  updateData: (updates: Partial<UserFormData>) => void;
  errors: Record<string, string>;
}

const initialData: UserFormData = {
  username: "john_doe",
  email: "john@example.com",
  password: "password123",
  avatarUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  height: "175",
  weight: "70",
  age: "25",
  dateOfBirth: "1999-01-15",
  activityLevel: "Medium",
  goal: "Lose Weight",
  goalWeight: "65",
  gender: "Male",
  isActive: true,
};

function PersonalInformationStep({ data, updateData, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <p className="text-sm text-muted-foreground">
            Tell us about yourself
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username *</Label>
          <Input
            id="username"
            value={data.username}
            onChange={(e) => updateData({ username: e.target.value })}
            placeholder="Enter your username"
            className={errors.username ? "border-destructive" : ""}
          />
          {errors.username && (
            <p className="text-sm text-destructive">{errors.username}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="Enter your email"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <Input
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => updateData({ password: e.target.value })}
            placeholder="Enter your password"
            className={errors.password ? "border-destructive" : ""}
          />
          {errors.password && (
            <p className="text-sm text-destructive">{errors.password}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="avatarUrl">Avatar URL *</Label>
          <Input
            id="avatarUrl"
            value={data.avatarUrl}
            onChange={(e) => updateData({ avatarUrl: e.target.value })}
            placeholder="Enter avatar image URL"
            className={errors.avatarUrl ? "border-destructive" : ""}
          />
          {errors.avatarUrl && (
            <p className="text-sm text-destructive">{errors.avatarUrl}</p>
          )}
        </div>
      </div>

      {data.avatarUrl && (
        <div className="flex justify-center">
          <img
            src={data.avatarUrl}
            alt="Avatar preview"
            className="w-20 h-20 rounded-full object-cover border-2 border-border"
          />
        </div>
      )}
    </div>
  );
}

function PhysicalAttributesStep({ data, updateData, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
          <Ruler className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Physical Attributes</h2>
          <p className="text-sm text-muted-foreground">
            Your body measurements
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="height">Height (cm) *</Label>
          <Input
            id="height"
            type="number"
            value={data.height}
            onChange={(e) => updateData({ height: e.target.value })}
            placeholder="Enter height in cm"
            className={errors.height ? "border-destructive" : ""}
          />
          {errors.height && (
            <p className="text-sm text-destructive">{errors.height}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg) *</Label>
          <Input
            id="weight"
            type="number"
            value={data.weight}
            onChange={(e) => updateData({ weight: e.target.value })}
            placeholder="Enter weight in kg"
            className={errors.weight ? "border-destructive" : ""}
          />
          {errors.weight && (
            <p className="text-sm text-destructive">{errors.weight}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age *</Label>
          <Input
            id="age"
            type="number"
            value={data.age}
            onChange={(e) => updateData({ age: e.target.value })}
            placeholder="Enter your age"
            className={errors.age ? "border-destructive" : ""}
          />
          {errors.age && (
            <p className="text-sm text-destructive">{errors.age}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => updateData({ dateOfBirth: e.target.value })}
            className={errors.dateOfBirth ? "border-destructive" : ""}
          />
          {errors.dateOfBirth && (
            <p className="text-sm text-destructive">{errors.dateOfBirth}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ActivityGoalStep({ data, updateData, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Activity & Goal</h2>
          <p className="text-sm text-muted-foreground">
            Your fitness preferences
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Activity Level *</Label>
          <RadioGroup
            value={data.activityLevel}
            onValueChange={(value) => updateData({ activityLevel: value })}
            className="grid grid-cols-1 gap-3"
          >
            {["Low", "Medium", "High"].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <RadioGroupItem value={level} id={level} />
                <Label htmlFor={level} className="cursor-pointer">
                  {level} Activity
                </Label>
              </div>
            ))}
          </RadioGroup>
          {errors.activityLevel && (
            <p className="text-sm text-destructive">{errors.activityLevel}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label>Fitness Goal *</Label>
          <RadioGroup
            value={data.goal}
            onValueChange={(value) => updateData({ goal: value })}
            className="grid grid-cols-1 gap-3"
          >
            {["Gain Muscle", "Lose Weight", "Maintain Weight"].map((goal) => (
              <div key={goal} className="flex items-center space-x-2">
                <RadioGroupItem value={goal} id={goal} />
                <Label htmlFor={goal} className="cursor-pointer">
                  {goal}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {errors.goal && (
            <p className="text-sm text-destructive">{errors.goal}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="goalWeight">Goal Weight (kg) *</Label>
          <Input
            id="goalWeight"
            type="number"
            value={data.goalWeight}
            onChange={(e) => updateData({ goalWeight: e.target.value })}
            placeholder="Enter your target weight"
            className={errors.goalWeight ? "border-destructive" : ""}
          />
          {errors.goalWeight && (
            <p className="text-sm text-destructive">{errors.goalWeight}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function GenderStatusStep({ data, updateData, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Gender & Status</h2>
          <p className="text-sm text-muted-foreground">
            Additional information
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Gender *</Label>
          <Select
            value={data.gender}
            onValueChange={(value) => updateData({ gender: value })}
          >
            <SelectTrigger
              className={errors.gender ? "border-destructive" : ""}
            >
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-sm text-destructive">{errors.gender}</p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="isActive"
            checked={data.isActive}
            onCheckedChange={(checked) => updateData({ isActive: !!checked })}
          />
          <Label htmlFor="isActive" className="cursor-pointer">
            I am currently active
          </Label>
        </div>
      </div>
    </div>
  );
}

function ConfirmationStep({ data }: { data: UserFormData }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
          <Check className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Confirmation</h2>
          <p className="text-sm text-muted-foreground">
            Review your information
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center mb-6">
          <Image
            width={96}
            height={96}
            src={data.avatarUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-primary"
          />
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Field</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Username</TableCell>
                <TableCell>{data.username}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Email</TableCell>
                <TableCell>{data.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Height</TableCell>
                <TableCell>{data.height} cm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weight</TableCell>
                <TableCell>{data.weight} kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Age</TableCell>
                <TableCell>{data.age} years</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Date of Birth</TableCell>
                <TableCell>{data.dateOfBirth}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Activity Level</TableCell>
                <TableCell>{data.activityLevel}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Goal</TableCell>
                <TableCell>{data.goal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Goal Weight</TableCell>
                <TableCell>{data.goalWeight} kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Gender</TableCell>
                <TableCell>{data.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Active Status</TableCell>
                <TableCell>{data.isActive ? "Active" : "Inactive"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function MultiStepForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<UserFormData>(initialData);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const totalSteps = 5;

  const updateData = (updates: Partial<UserFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    setErrors((prev) => {
      const newErrors = { ...prev };
      Object.keys(updates).forEach((key) => {
        delete newErrors[key];
      });
      return newErrors;
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Email is invalid";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6)
          newErrors.password = "Password must be at least 6 characters";
        if (!formData.avatarUrl) newErrors.avatarUrl = "Avatar URL is required";
        break;
      case 2:
        if (!formData.height) newErrors.height = "Height is required";
        if (!formData.weight) newErrors.weight = "Weight is required";
        if (!formData.age) newErrors.age = "Age is required";
        else if (parseInt(formData.age) <= 0)
          newErrors.age = "Age must be a positive number";
        if (!formData.dateOfBirth)
          newErrors.dateOfBirth = "Date of birth is required";
        break;
      case 3:
        if (!formData.activityLevel)
          newErrors.activityLevel = "Activity level is required";
        if (!formData.goal) newErrors.goal = "Goal is required";
        if (!formData.goalWeight)
          newErrors.goalWeight = "Goal weight is required";
        else if (parseInt(formData.goalWeight) <= 0)
          newErrors.goalWeight = "Goal weight must be a positive number";
        break;
      case 4:
        if (!formData.gender) newErrors.gender = "Gender is required";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log("Form submitted:", formData);
      alert("Profile created successfully!");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInformationStep
            data={formData}
            updateData={updateData}
            errors={errors}
          />
        );
      case 2:
        return (
          <PhysicalAttributesStep
            data={formData}
            updateData={updateData}
            errors={errors}
          />
        );
      case 3:
        return (
          <ActivityGoalStep
            data={formData}
            updateData={updateData}
            errors={errors}
          />
        );
      case 4:
        return (
          <GenderStatusStep
            data={formData}
            updateData={updateData}
            errors={errors}
          />
        );
      case 5:
        return <ConfirmationStep data={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className=" bg-white/80 dark:bg-gray-800/80 border-0 shadow-none">
        <CardHeader>
          <CardTitle>Create User Profile</CardTitle>
          <CardDescription>
            Complete all steps to create your fitness profile
          </CardDescription>

          <div className="flex items-center justify-between mt-6">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                    step === currentStep
                      ? "bg-primary text-primary-foreground"
                      : step < currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step < currentStep ? <Check className="w-4 h-4" /> : step}
                </div>
                {step < totalSteps && (
                  <div
                    className={cn(
                      "w-12 h-0.5 mx-2",
                      step < currentStep ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentStep === totalSteps ? (
              <Button
                onClick={handleSubmit}
                className="flex items-center gap-2"
              >
                Submit Profile
                <Check className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={nextStep} className="flex items-center gap-2">
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function MultiStepComponent() {
  return <MultiStepForm />;
}
