<template>
  <div class="hero">
    <div class="grid justify-center h-screen grid-cols-2 place-content-center">
      <div class="inline-block col-span-1 col-start-2 space-y-8 transform">
        <h3 class="font-mono ">
          <a href="https://techdiary.dev" class="underline ">techdiary.dev</a>
          presents
        </h3>
        <h1 class="text-6xl font-boshonto">
          ডেভ আর্টিকেল
          <span class="block text-fuchsia text-[95px]">কন্টেস্ট</span>
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
