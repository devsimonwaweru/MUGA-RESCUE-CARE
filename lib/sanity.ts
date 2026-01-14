import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "5pjd3i7q", 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

// We use 'any' here to ensure the build passes even if package versions differ
export function urlFor(source: any) {
  return builder.image(source);
}