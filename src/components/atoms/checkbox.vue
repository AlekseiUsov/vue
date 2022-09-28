<template>
    <label :class="$style.label">
        <input type="checkbox" :class="$style.input" />
        <span :class="$style.checkbox"></span>
        {{task.title}}
    </label>
</template>

<script>
export default {
    name: "checkbox"
};
</script>

<style lang="scss" module>
@import "@/styles/main.scss";

.label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.input {
    opacity: 0;
}

.checkbox {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid $yellow;
    border-radius: 0.2em;
    transition: 0.2s;
}

.input:checked+.checkbox {
    background-image: url('../assets/checked.svg');
    background-size: contain;
    background-color: $yellow;
}
</style>