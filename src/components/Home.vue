<!-- @format -->

<template>
  <div class="text-xl font-semibold text-black">
    <input
      class="outline-none"
      :class="
        v$.user.email.$error
          ? 'border border-red-500'
          : 'text-black border border-green-600'
      "
      type="email"
      placeholder="enter your email"
      v-model="user.email"
    />
    <div>
      <div
        class="input-errors"
        v-for="error of v$.user.email.$errors"
        :key="error.$uid"
      >
        <div class="error-msg text-red-400">{{ error.$message }}</div>
      </div>
    </div>
    <!-- <p v-if="v$.email.$error">sdfadsf</p> -->
    <input
      type="number"
      placeholder="enter your contact number"
      v-model="user.contact"
      :class="
        v$.user.contact.$error
          ? 'border border-red-500'
          : 'text-black border border-green-600'
      "
    />
    <div
      class="input-errors"
      v-for="error of v$.user.contact.$errors"
      :key="error.$uid"
    >
      <div class="error-msg text-red-400">{{ error.$message }}</div>
    </div>
    <!-- <p v-if="v$.user.contact.$error">
      {{ v$.user.contact.$errors[0].$message }}
    </p> -->
    <input
      type="password"
      placeholder="enter your password"
      v-model="user.password"
      :class="
        v$.user.password.$error
          ? 'border border-red-500'
          : 'text-black border border-green-600'
      "
    />
    <div
      class="input-errors"
      v-for="error of v$.user.password.$errors"
      :key="error.$uid"
    >
      <div class="error-msg text-red-400">{{ error.$message }}</div>
    </div>
    <!-- <p v-if="v$.user.contact.$error">
      {{ v$.user.password.$errors[0].$message }}
    </p> -->
  </div>
  <button
    class="border-2 bg-purple-600 px-4 py-2 text-white rounded"
    @click="submitform"
  >
    submit
  </button>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      user: {
        email: "",
        contact: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      user: {
        email: {
          required: helpers.withMessage(
            "you are not going anywere without filling this field bro",
            required
          ),
          email,
          $autoDirty: true,
        },
        contact: { required, minLength: minLength(8), $lazy: true },
        password: {
          required,
          minLength: minLength(5),
          $autoDirty: true,
        },
      },
    };
  },

  methods: {
    submitform() {
      console.log(this.v$.user.email.$errors);
      this.v$.$validate();
      if (this.v$.$error) {
        console.log("there is a error");
      } else {
        console.log("data submitted");
      }
    },
  },
};
</script>

<style></style>
