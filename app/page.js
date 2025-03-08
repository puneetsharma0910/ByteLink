import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 bg-blue-100">
      <section className="grid grid-cols-2 gap-4 h-[50vh]">
        <div className="flex flex-col justify-center items-center  ">
          <p className="text-2xl font-bold">Shorten your links with ByteLink</p>
          <p className="mx-auto">
            Simplest and straightforward link shortener.
          </p>
          <div className="flex mx-auto gap-3 items-center pt-3  text-white">
            <Link href="/Shorten">
              <button className="bg-purple-500 rounded font-bold p-1 shadow-lg">
                Try Now
              </button>
            </Link>
            <button className="bg-purple-500 rounded font-bold p-1 shadow-lg">
              Github
            </button>
          </div>
        </div>
        <div className=" relative flex just">
          <Image
            className="mix-blend-darken"
            src="/vector.jpg"
            alt="ByteLink Hero"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
