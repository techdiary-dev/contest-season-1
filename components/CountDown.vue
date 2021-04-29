<template>
  <section class="flex justify-center">
    <div class="flex flex-col mr-4 my-3 items-center w-[120px]"><span
      class="countdown-bg-gradient p-4 text-7xl font-bold rounded-md text-white w-[120px]">{{
        day
      }}</span>Days
    </div>
    <div class="flex flex-col mx-4 my-3 items-center"><span
      class="countdown-bg-gradient p-4 text-7xl font-bold rounded-md text-white w-[120px]">{{
        hour
      }}</span>Hours
    </div>
    <div class="flex flex-col mx-4 my-3 items-center"><span
      class="countdown-bg-gradient p-4 text-7xl font-bold rounded-md text-white w-[120px]">{{
        minute
      }}</span>Minutes
    </div>
    <div class="flex flex-col ml-4 my-3 items-center"><span
      class="countdown-bg-gradient p-4 text-7xl font-bold rounded-md text-white w-[120px]">{{
        second
      }}</span>Seconds
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      hour: null,
      minute: null,
      second: null,
      day: null,
      countDate: new Date("May 31, 2021 00:00:00").getTime()
    }
  },
  mounted() {
    setInterval(() => {
      this.countDown()
    }, 1000)
  },
  methods: {
    countDown() {
      const now = new Date().getTime(),
        gap = this.countDate - now

      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      this.day = Math.floor(gap / day);
      this.hour = Math.floor((gap % day) / hour)
      this.minute = Math.floor((gap % hour) / minute)
      this.second = Math.floor((gap % minute) / second);
    }
  },
}
</script>

<style>
.countdown-bg-gradient {
  background: linear-gradient(205.5deg, #321b50 10.82%, rgba(19, 30, 63, 0.88) 84.93%);
}
</style>
