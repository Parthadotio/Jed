import { client } from "../../Sainity/client";
import { coursesQuery } from "../../Sainity/queries";
import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import Footer from "../../components/Footer";

export const revalidate = 60;

export default async function Page() {
  const courses = await client.fetch(coursesQuery)
  
  return (

    <>
      <Navbar />
      <Home  courses={courses}/>
      <Footer />
    </>
  );
}
