import { groq } from "next-sanity";
import { client } from "../Sainity/client.js";

export const coursesQuery = groq`*[_type == "courses"] | order(_createdAt desc) {
   _id,
  title,
  slug,
  description,
  category,
  level,
  duration,
  price,
  "image": image.asset->url  
}`;

export const courseBySlugQuery = groq`*[_type == "courses" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  category,
  level,
  duration,
  price,
  "image": image.asset->url  
}`;

export async function getCourses() {
  return client.fetch(coursesQuery);
}

export async function getCourse(slug) {
  return client.fetch(courseBySlugQuery, { slug });
}