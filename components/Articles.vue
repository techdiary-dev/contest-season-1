<template>
  <div>
    <div class="mx-auto mt-20 leading-9 wrapper">
      <h2 class="text-2xl md:text-4xl font-boshonto" style="line-height: 3rem">
        <span class=" text-fuchsia">কনটেস্টে</span> অংশগ্রহণকারী সর্বশেষ<br />
        <span class=" text-[#FFB95C]">আর্টিক্যাল সমূহ</span>
      </h2>

      <a
        href="https://techdiary.dev/tags/contest_season_1"
        target="_blank"
        class="text-xl text-blue-500 underline font-boshonto"
      >
        কনটেস্টের সকল আর্টিকেল
      </a>
    </div>

    <div
      class="grid gap-5 mx-auto my-10 md:grid-cols-2 lg:grid-cols-3 wrapper"
      v-if="!$fetchState.pending"
    >
      <article-card
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
    <div v-else class="text-center ">
      <h1 class="text-3xl text-gray-400 font-boshonto">অপেক্ষা করুন</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: {}
    };
  },
  async fetch() {
    const { data: articles } = await this.$axios(
      "https://v3-api.techdiary.dev/api/articles?tag=contest_season_1&limit=9"
    );

    this.articles = articles.data;
  }
};
</script>
