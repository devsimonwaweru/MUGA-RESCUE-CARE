import { createClient } from "next-sanity";
import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: "5pjd3i7q", 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}