<template>
  <div class="hero">
    <div
      class="h-[75vh] grid-cols-2 flex lg:flex-row flex-col items-center justify-center space-x-12"
    >
      <div class="self-end hidden text-center lg:block">
        <img src="~/static/sumit.png" class=" w-[350px]" alt="sumit-shaha" />
      </div>

      <div
        class="inline-block col-span-1 space-y-8 transition duration-200 transform md:-rotate-3"
      >
        <h3 class="font-mono ">
          <a href="https://techdiary.dev" class="underline ">techdiary.dev</a>
          presents
        </h3>

        <h1 class="text-3xl md:text-6xl font-boshonto">
          ডেভ আর্টিকেল
          <span class="block text-fuchsia md:text-[95px] text-6xl">
            কন্টেস্ট
          </span>
        </h1>

        <h3 class="text-4xl font-boshonto">সুমিত ভাইয়ের সাথে</h3>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.hero {
  // background-image: url("~/static/images/hero.svg");
  // background-position: left center;
  @apply bg-no-repeat bg-left-bottom  text-white;

  background-image: url("~assets/images/hero.png"),
    linear-gradient(205.5deg, #321b50 10.82%, rgba(19, 30, 63, 0.88) 84.93%);
}
</style>
