import { client } from "../../Sainity/client";
import { coursesQuery } from "../../Sainity/queries";
import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import Fotter from "../../components/Fotter";

export const revalidate = 60;

export default async function Page() {
  const courses = await client.fetch(coursesQuery)
  console.log(courses);
  
  return (

    <>
      <Navbar />
      <Home  courses={courses}/>
      <Fotter />
    </>
  );
}
