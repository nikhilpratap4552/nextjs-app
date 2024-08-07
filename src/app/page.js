
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-slate-500 " style={{background: "#ffefcc"}}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-serif font-bold text-sm lg:flex">
        <h1>Logo</h1> 
        <ul>
          <li className="text-2xl">Good weather, good vibes </li>
        </ul>
       
      </div>

       
      <h1 className="relative text-8xl text-amber-950 text-opacity-80 font-extrabold ">Weather app</h1>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left ">
       <div>
        <p> click me to get weather details</p>
        
        <Link href={"/wheather"}><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Weather</button> </Link>
      
        
       </div>
       <div>
        <p>click to copy the data</p>

        <Link href={"/copy"}> <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">clickboard to copy the data</button></Link>

       </div>
      </div>
    </main>
  );
}
