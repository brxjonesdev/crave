import Image from "next/image";

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]  text-white-950 
    
     ">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black-200">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Feast without the fuss.
              </h1>
              <p className="mx-auto max-w-[700px] mt-4">
                No more spending forever deciding what to eat. Our app makes it easy to find the perfect meal for any occasion.
              </p>
              <div className="mt-6 space-x-4">
                <Link
                  className="inline-flex items-center justify-center h-9 px-6 text-sm w-full bg-bright_plum-800 rounded-lg text-black-800 "
                  href="/login"
                >
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg px-3 py-1 text-sm bg-citrus_blush-800 text-black-800">Choose what to eat hassle-free</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Find out what <span className="italic text-strawberry_milkshake-800 ">&rsquo;I don&apos;t know&rsquo;</span> really means
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                It&rsquo;s time to stop the endless scrolling and indecision. Our app makes it easy to find the perfect meal for any occasion.
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center"></h3>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="space-y-2">
              <h3>
                <span className="text-xl font-bold text-bright_plum-800">How does this work?</span>
              </h3>
              <p>
                You and your friends can use the app to find the perfect meal for any occasion. Everyone is given a chance to vote on the meal they want to eat. The app will then choose the meal with the most votes.
              </p>
            </div>
            <div className="space-y-2">
              <h3>
                <span className="text-xl font-bold text-citrus_blush-800">How do I get started?</span>
              </h3>
              <p>
                You can get started by signing up for an account. Once you have an account, you can create a group and invite your friends to join. From there, you can start voting on meals.
              </p>
            </div>
            <div className="space-y-2">
              <h3>
                <span className="text-xl font-bold text-strawberry_milkshake-800">OMG You&apos;re a lifesaver!!!</span>
              </h3>
              <p>
                You&apos;re welcome in advance! I face this problem all the time, so I decided to create a solution. I hope you enjoy using the app as much as I enjoyed creating it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 flex justify-center bg-gradient-to-t from-citrus_blush-800 to-bright_plum-800">
      <div>
            <Link href={"https://brx-portfolio.vercel.app/"}>
              <p className="py-2 px-6 rounded-md shadow-lg hover:bg-white-100 bg-white-200">
                Made with <span>❤️</span> by brxjonesdev
              </p>
            </Link>
          </div>
      </section>
    </div>
  );
}
