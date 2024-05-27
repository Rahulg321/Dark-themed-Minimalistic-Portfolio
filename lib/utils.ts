import { DateField } from "@prismicio/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrismicTimestamp(prismicTimestamp: string): string {
  // Create a Date object from the Prismic timestamp
  const date = new Date(prismicTimestamp);

  // Define an array with the month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract the day, month, and year from the Date object
  const day = date.getUTCDate();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  // Format the date as "23 August, 2024"
  return `${day} ${month}, ${year}`;
}
export function convertToDateString(dateStr: string): string {
  const dateObj = new Date(dateStr);
  return dateObj.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
