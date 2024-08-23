import Sidebar from "@/app/to-do/components/Sidebar";

export default function ToDoLayout({children}:{children: React.ReactNode}){
    return (
        <div className="grid grid-cols-12">
      <div className="col-span-2 bg-gray-900 min-h-screen text-white">
        <Sidebar />
      </div>

      <div className="col-span-10 bg-gray-800 p-4 text-white">{children}</div>
    </div>
    )
}