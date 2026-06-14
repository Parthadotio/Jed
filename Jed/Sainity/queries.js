import { groq } from "next-sanity";
import { client } from "./client";

export async function getCourses() {
  return client.fetch(
    groq`*[_type == "courses"] | order(_createdAt desc) {
      _id, title, slug, description
    }`
  );
}

export async function getCourse(slug) {
  return client.fetch(
    groq`*[_type == "courses" && slug.current == $slug][0] {
      _id, title, slug, description
    }`,
    { slug }
  );
}