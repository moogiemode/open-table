import Link from "next/link";
import { NavBar } from "@/app/components";
import { SearchSideBar } from "./SearchSideBar";
import { RestaurantCard } from "./RestaurantCard";


export default function Search() {

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar/>
        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
              className="rounded  mr-3 p-2 w-[450px]"
              type="text"
              placeholder="State, city or town"
            />
            <button className="rounded bg-red-600 px-9 py-2 text-white">
              Let's go
            </button>
          </div>
        </div>
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  )
}