<template>
  <article
    class="transition duration-200 bg-white rounded-md shadow hover:shadow-lg"
  >
    <figure class="m-2 overflow-auto rounded-md">
      <a
        :href="`https://techdiary.dev/${article.user.username}/${article.slug}`"
        target="_blank"
      >
        <img :src="article.thumbnail" :alt="article.title" />
      </a>
    </figure>
    <div class="m-4 ">
      <h1>{{ article.title }}</h1>
      <a
        :href="`https://techdiary.dev/${article.user.username}`"
        class="flex items-center mt-2 space-x-3"
        target="_blank"
      >
        <img
          class="w-8 rounded-full"
          :src="article.user.profilePhoto"
          :alt="article.user.name"
        />
        <p class="font-mono ">{{ article.user.username }}</p>
      </a>
    </div>
  </article>
</template>
<script>
export default {
  props: ["article"]
};
</script>
