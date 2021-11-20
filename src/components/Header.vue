<!-- @format -->

<template>
  <div :class="dark ? 'dark transition' : ''">
    <header
      class="
        bg-green-300
        px-6
        py-4
        font-semibold
        shadow
        dark:bg-gray-700 dark:text-white
      "
    >
      <router-link to="/">
        <h1 class="text-xl inline dark:text-green-400">Usman</h1>
      </router-link>
      <div class="float-right">
        <ul>
          <li class="inline">
            <a class="p-4 hover:text-purple-600" href="#" @click="darkMode">{{
              dark ? "Light Mode" : "Dark Mode"
            }}</a>
          </li>
          <li class="inline">
            <router-link to="/">
              <a class="p-4 hover:text-purple-600" href="#">Home</a>
            </router-link>
          </li>
          <li class="inline">
            <router-link to="about">
              <a class="p-4 hover:text-purple-600" href="#">About</a>
            </router-link>
          </li>
          <li class="inline">
            <a class="p-4 hover:text-purple-600" href="#">Contact Us</a>
          </li>
          <li class="inline">
            <a class="p-4 hover:text-purple-600" href="#">Portfolio</a>
          </li>
          <li class="inline">
            <input type="text" name="" id="" class="text-black font-semibold" />
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    };
  },
  methods: {
    darkMode() {
      this.dark = !this.dark;
      if (this.dark) {
        document.body.classList.add("dark:bg-gray-400");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>
