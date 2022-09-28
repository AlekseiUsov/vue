<template>
    <label :class="$style.label">
        <input type="checkbox" :class="$style.input" />
        <span :class="$style.close" />
    </label>
</template>

<script>
export default {
    name: "close"
};
</script>

<style lang="scss" module>
@import "@/styles/main.scss";

.label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.close {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid $yellow;
    border-radius: 0.2em;
    transition: 0.2s;
}

.input:checked+.close {
    background-image: url('../assets/cross.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0.5rem;
    background-color: $light-beige;
    transition: none;
}
</style>