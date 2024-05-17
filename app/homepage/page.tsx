import React from 'react'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen xl:grid xl:grid-cols-6 xl:grid-rows-3 gap-4 ">
      <div className=" xl:order-1 bg-gradient-to-t 
    from-citrus_blush-800
    to-bright_plum-800 w-full rounded-b-xl xl:col-span-2 xl:row-span-3 ">
        <div className="px-4 py-12 xl:px-24 max-w-xl ">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl lg:text-6xl">
              Create a Room
            </h1>
            <p className="text-md text-center ">
              Create a new room to start deciding on what to eat with friends and family.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button className="w-full sm:w-auto bg-black-300 hover:bg-black-400" size="lg">
                Start New Room
              </Button>
            </div>
          </div>
          <div className="relative w-full h-full bg-periwinkle-2">
            
          </div>
        </div>
      </div>
      <div className="px-4 py-12 sm:px-6 lg:px-8 h-full flex-grow flex items-center xl:order-3 xl:col-span-2 xl:row-span-3">
        <div className="space-y-6">
        <Card>
  <CardHeader>
    <CardTitle>Wait, how does this work again?</CardTitle>
    <CardDescription>{`here's the deets <3`}</CardDescription>
  </CardHeader>
  <CardContent>
    {/* <Button className="w-full" size="sm">
      Join Room
    </Button> */}
    <ul className="space-y-4 mx-4">
    <li>
      <h4 className='bg-bright_plum-800 w-fit p-0.5 rounded-lg px-1'>&#128640; Start the Vote:</h4>
      <p className='text-sm'>The room owner hits the big &quot;start vote&quot; button. It's go time!</p>
    </li>
    <li>
      <h4 className='bg-strawberry_milkshake-800 w-fit p-0.5 rounded-lg px-1'>&#127922; Random Voting Order:</h4>
      <p className='text-sm'>Who votes first? Let the randomizer decide. No favoritism here!</p>
    </li>
    <li>
      <h4 className='bg-citrus_blush-800 w-fit p-0.5 rounded-lg px-1'>&#127828; Pick and Ban (LoL Style):</h4>
      <p className='text-sm'>Take turns picking or banning food categories. Love sushi? Pick it! Hate veggies? Ban 'em!</p>
    </li>
  <li>
    <h4 className='bg-strawberry_milkshake-800 w-fit p-0.5 rounded-lg px-1'>🏆 Top Three Categories:</h4>
    <p className='text-sm'>The system tallies the votes and picks the top three food categories. Majority rules!</p>
  </li>
  <li>
    <h4 className='bg-citrus_blush-800 w-fit p-0.5 rounded-lg px-1'>📍 Find Restaurants:</h4>
    <p className='text-sm'>Get a list of nearby restaurants serving the chosen top three categories. Convenience is key!</p>
  </li>
  <li>
    <h4 className='bg-bright_plum-800 w-fit p-0.5 rounded-lg px-1'>🍽️ Choose Your Fave:</h4>
    <p className='text-sm'>Each participant picks their preferred restaurant from the list. Choose wisely!</p>
  </li>
    <li>
      <h4 className='bg-strawberry_milkshake-800 w-fit p-0.5 rounded-lg px-1'>&#128077;&#128078; Final Vote:</h4>
      <p className='text-sm'>Vote &quot;yes&quot; or &quot;no&quot; on each restaurant choice. Democracy at its finest!</p>
    </li>
  <li>
    <h4 className='bg-citrus_blush-800 w-fit p-0.5 rounded-lg px-1'>🎉 Winner Announced:</h4>
    <p className='text-sm'>The restaurant with the most "yes" votes wins. Tie? We'll spin a wheel to decide the lucky spot!</p>
  </li>
</ul>

  </CardContent>
</Card>
        </div>
      </div>
      <div className="px-4 py-12 sm:px-6 lg:px-8 w-full bg-gradient-to-t from-citrus_blush-800 to-bright_plum-800 rounded-t-x xl:order-2 col-span-2 xl:row-span-3">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-black-50 dark:text-gray-50 sm:text-4xl">
            Enter a Join Code
          </h2>
          <form className="space-y-4">
            <Input className="w-full" placeholder="Enter join code" type="text" />
            <Button className="w-full bg-black-300 hover:bg-black-400 shadow-md " type="submit">
              Join Room
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
