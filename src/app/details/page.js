import React from "react";

import MoviePoster from "@/app/components/MoviePoster";
import MovieDetails from "@/app/components/MovieDetails";
import MovieDescription from "@/app/components/MovieDescription";
import Cast from "@/app/components/Cast";
import NavDetails from "@/app/components/NavDetails";



export default function Home() {
  return (
    <section>
      
              <MoviePoster imageUrl="https://www.nordborgbio.dk/wp-content/uploads/2022/01/Spiderman-No-Way-Home.jpg" alt="Spiderman: No Way Home" />

              <MovieDetails className="pl-4 pt-4"
                title="Spiderman: No Way Home"
                rating="PG-13"
                genres={["Action", "Adventure", "Fantasy"]}
                length="120 minutes"
                language="English"
              />

              <MovieDescription description="With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man." />

              <Cast imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" name="XAXA" />
           
    </section>
    );
}