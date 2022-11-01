<template>
  <label :class="$style.label">
    <input type="checkbox" :class="$style.inputCheckbox" :checked="isChecked" @click="$emit('checkCheckbox')" />
    <span :class="$style.checkbox"></span>
  </label>
</template>

<script>
export default {
  name: "ToDoCheckbox",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.label {
  display: flex;
  align-items: center;
}

.inputCheckbox {
  opacity: 0;
}

.checkboxText {
  color: $brown;
}

.checkbox {
  display: block;
  width: 1rem;
  height: 1rem;
  border: 1px solid $yellow;
  border-radius: 0.2em;
  transition: 0.2s;
  margin-right: 0.5rem;
}

.inputCheckbox:checked+.checkbox {
  background-image: url("../../assets/checked.svg");
  background-size: contain;
  background-color: $yellow;
}
</style>
