<template>
  <div class="formsWrapper">
    <div class="formWrapper">
      <h1 @click="router.push('/roadmap')">Logon</h1>

      <form :onSubmit="logonForm" class="form">
        <label htmlFor="email">
          <p>Email</p>
          <input
            id="logonemail"
            v-model="email"
            required
            type="email"
            name="logonemail"
            placeholder="example@mail.com"
          />
        </label>

        <label htmlFor="password">
          <p>Password</p>
          <input
            id="logonpassword"
            v-model="password"
            required
            type="password"
            name="logonpassword"
            placeholder="password"
          />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </div>

    <div class="divider"></div>

    <div class="formWrapper">
      <h1>Login</h1>

      <form :onSubmit="loginForm" class="form">
        <label htmlFor="email">
          <p>Email</p>
          <input
            id="loginemail"
            v-model="email"
            required
            type="email"
            name="loginemail"
            placeholder="example@mail.com"
          />
        </label>

        <label htmlFor="password">
          <p>Password</p>
          <input
            id="loginpassword"
            v-model="password"
            required
            type="password"
            name="loginpassword"
            placeholder="password"
          />
        </label>

        <button type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const email = ref("");
const password = ref("");

const loginForm = async (e: any) => {
  try {
    e.preventDefault();

    await $fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
      params: {
        isLogin: true,
      },
    });

    router.push("/roadmap");
  } catch (error) {
    console.log(error);
  }
};

const logonForm = async (e: any) => {
  try {
    e.preventDefault();

    await $fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });

    router.push("/roadmap");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
.formsWrapper {
  display: flex;
  gap: 1rem;
}

.formWrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
}

.divider {
  width: 1px;
  background-color: white;
}
</style>
