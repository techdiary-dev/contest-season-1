<template>
  <div>
    <hero/>
    <div class="w-6/12 mx-auto -mt-12">
      <maincard/>
    </div>
    <count-down/>
    <div class="mx-auto my-10 wrapper">
      <h2 class="text-4xl leading-relaxed font-boshonto">
        <span class=" text-fuchsia">কনটেস্টে</span> অংশগ্রহণকারী সর্বশেষ<br/>
        <span class=" text-[#FFB95C]">আর্টিক্যাল সমূহ</span>
      </h2>
    </div>

    <div class="grid grid-cols-3 gap-5 mx-auto my-10 wrapper">
      <article-card/>
      <article-card/>
      <article-card/>
      <article-card/>
      <article-card/>
      <article-card/>
    </div>

    <div class="text-center font-boshonto">
      <a href="#">সকল আর্টিক্যাল দেখুন</a>
    </div>

    <div class="mx-auto my-10 wrapper">
      <h2 class="text-4xl leading-relaxed font-boshonto">
        <span class=" text-fuchsia">কনটেস্টের</span> এর নিয়মাবলী
      </h2>
    </div>

    <div
      class="p-5 mx-auto my-10 prose prose-lg bg-white shadow wrapper max-w-none"
    >
      <nuxt-content :document="rules"/>
    </div>
  </div>
</template>

<script>
import ArticleCard from "~/components/article-card";

export default {
  components: {ArticleCard},
  async asyncData({$content}) {
    const rules = await $content("", "welcome").fetch();
    return {rules};
  }
};
</script>
