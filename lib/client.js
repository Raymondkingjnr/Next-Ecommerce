import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "fcd2vvd5",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
