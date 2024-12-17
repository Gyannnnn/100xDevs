import Link from "next/link"
export default function page() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col gap-5 items-center justify-center">
      <h1 className="text-2xl">Todo Application</h1>
      <div className="flex gap-10">
        <Link  className="px-10 py-2 rounded-md bg-white text-black " href="/signin">SignIn</Link>
        <Link  className="px-10 py-2 rounded-md bg-white text-black " href="/signup">SignUp</Link>
      </div>
    </div>
  )
}
