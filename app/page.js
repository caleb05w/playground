// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-100vw h-100vh relative">
      <div className="flex flex-row justify-center items-center w-full h-full absolute top-[50vh]">
        <a href="test">
          <button className="p-[2rem] border-2 border-black hover:text-white hover:bg-black ease-in-out duration-300 hover:shadow-2xl bg-white text-black shadow-none filter hover:w-[100vw] hover:h-[100vh] transition-all w-[200px] h-[50px]">
            To the test page
          </button>
        </a>
      </div>
    </div>
  );
}
