import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl bg-orange-500 w-full">
        <h1 className="text-white">Hello, Portfolio !</h1>
      </div>
    </main>
  );
}
