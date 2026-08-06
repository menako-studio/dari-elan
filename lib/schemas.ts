import { z } from "zod";

export const ExifSpecsSchema = z.object({
  camera: z.string().min(1),
  lens: z.string().min(1),
  film: z.string().min(1),
  aperture: z.string().min(1),
});

export const PhotoItemSchema = z.object({
  id: z.string(),
  number: z.string(),
  title: z.string().min(1),
  category: z.string(),
  location: z.string(),
  year: z.string(),
  imageUrl: z.string().url().or(z.string().startsWith("/")),
  images: z.array(z.string()).optional(),
  aspectRatio: z.string(),
  specs: ExifSpecsSchema,
  description: z.string(),
});

export const CartItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  edition: z.string(),
  price: z.number().positive(),
  imageUrl: z.string(),
  type: z.enum(["print", "preset"]),
  quantity: z.number().int().positive(),
});

export const BookingInquirySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  projectType: z.enum(["commercial", "editorial", "portrait", "print-licensing"]),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type PhotoItemType = z.infer<typeof PhotoItemSchema>;
export type CartItemType = z.infer<typeof CartItemSchema>;
export type BookingInquiryType = z.infer<typeof BookingInquirySchema>;
