<template>
  <div>
    <hero />

    <div class="relative z-50 w-full mx-auto -mt-5 lg:w-6/12 ">
      <count-down />
    </div>

    <div class="px-4 mx-auto md:w-6/12">
      <maincard />
    </div>

    <div class="mx-auto mt-20 wrapper">
      <h2 class="text-2xl leading-relaxed md:text-4xl font-boshonto">
        <span class=" text-fuchsia">কনটেস্টে</span> অংশগ্রহণকারী সর্বশেষ<br />
        <span class=" text-[#FFB95C]">আর্টিক্যাল সমূহ</span>
      </h2>

      <a href="#" class="text-xl text-blue-500 underline font-boshonto">
        কনটেস্টের সকল আর্টিকেল
      </a>
    </div>

    <div class="grid gap-5 mx-auto my-10 md:grid-cols-2 lg:grid-cols-3 wrapper">
      <article-card />
      <article-card />
      <article-card />
      <article-card />
      <article-card />
      <article-card />
    </div>
    <div class="mx-auto my-10 wrapper">
      <h2 class="text-4xl leading-relaxed font-boshonto">
        <span class=" text-fuchsia">কনটেস্টের</span> এর নিয়মাবলী
      </h2>
    </div>
    <div
      class="p-5 mx-auto my-10 prose prose-lg bg-white shadow wrapper max-w-none"
    >
      <nuxt-content :document="rules" />
    </div>
  </div>
</template>

<script>
import ArticleCard from "~/components/article-card";

export default {
  head: {
    title: "নীড়",
    meta: [
      {
        name: "description",
        content: `ডেভ আর্টিকেল কন্টেস্ট | টেকডায়েরি`
      },
      {
        property: "og:title",
        content: `ডেভ আর্টিকেল কন্টেস্ট | টেকডায়েরি`
      },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1619726887/static-assets/contest/om8p13fs8jhozmikjm4y.png"
      },
      {
        property: "og:image:width",
        content: "1200"
      },

      {
        property: "og:image:height",
        content: "630"
      }
    ]
  },
  components: { ArticleCard },
  async asyncData({ $content }) {
    const rules = await $content("", "welcome").fetch();
    return { rules };
  }
};
</script>
