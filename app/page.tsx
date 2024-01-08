import AlretConfirm from "@/components/Accordion";


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen  flex-col">
      <h1 className="hover:text-red-50 transition cursor-pointer">
        Hello Next App
      </h1>
        <div className="border flex items-center justify-center text-sm rounded-md px-3 py-1">
        <AlretConfirm/>
        </div>
    </div>
  );
}
