<template>
  <div
    v-if="modelValue"
    class="modal"
    @click="emit('update:modelValue', false)"
  >
    <div class="modal-content" @click.stop>
      <h2>Ja vai?...</h2>

      <div>
        <span @click="emit('update:modelValue', false)"> Vou ficar! </span>
        <span @click="logout()"> Nunca é um adeus 🥺 </span>
      </div>
    </div>

    <audio ref="audio" src="../assets/see-you-again.mp3" preload></audio>
  </div>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const audio = ref();

const logout = async () => {
  try {
    await $fetch("http://localhost:3000/api/user", {
      method: "POST",
      params: {
        isLogout: true,
      },
    });

    audio.value.play();

    setTimeout(() => {
      emit("update:modelValue", false);
      useRouter().push("/");
    }, 1800);
  } catch (error) {
    exceptionsLogger(error, "pages/roadmap/logout");
  }
};
</script>

<style scoped lang="scss">
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.3rem;
  max-width: 30rem;
  max-height: 80%;
  overflow: auto;

  color: #000;

  div {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    span {
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
}
</style>
