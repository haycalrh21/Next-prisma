"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Meteors } from "@/app/components/ui/meteors";
import { SparklesPreview } from "@/app/content";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import PostCard from "@/app/components/PostCard";
import Link from "next/link";
import { useRouter } from "next/navigation";



interface Post {
  id: string;
  name: string;
}
export default function Home() {
  const router = useRouter();

  const [posts, setPosts] = useState<Post[]>([]);



  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/post");
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    })();
  }, []);

  const words = [
    {
      text: "Hello",
      className: "text-red-500 dark:text-red-500 text-[25px]",
    },
    {
      text: "Everyone.",
      className: "text-teal-50 dark:text-blue-500 text-[25px]",
    },
  ];


  return (
    <main className="flex justify-center items-center">
      <div className="min-h-screen w-full">
        <div className=" bg-blue-950 flex flex-col items-center justify-center h-[11rem] relative w-full">
          <TypewriterEffectSmooth words={words} />
          <SparklesPreview />

          <p className="text-center">Lihat di bawah kanan ya </p>
        </div>
        <Link
          href={"/create"}
          className="bg-red-500 hover:bg-yellow-700 text-white font-bold py-2 px-4"

          style={{ position: "fixed", bottom: "10px", right: "10px", borderRadius: "20px" }}
        >
          Klik disini
        </Link>
        <div className="pt-10">

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">


                <img src="/spongebob.png" alt="loh" style={{ maxWidth: "500px", maxHeight: "200px", display: "block", margin: "0 auto" }} />
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Butuh Kerja sama ?
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  coba klik di bawah ini
                </p>

                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300" onClick={() => router.push('mailto:hrayhansyah@gmail.com')}>
                  Coba di klik
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={80} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {posts.map((post) => (
              <div className="bg-gray-900 dark:bg-slate-800 p-3 justify-center items-center" key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>


      </div>
    </main >
  );
}
