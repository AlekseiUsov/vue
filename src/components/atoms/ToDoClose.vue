<template>
    <label :class="$style.label">
        <input type="checkbox" :class="$style.inputClose" />
        <span :class="$style.close"></span>
    </label>
</template>

<script>
export default {
    name: "ToDoClose"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.inputClose {
    opacity: 0;
}

.close {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid $yellow;
    border-radius: 0.2em;
    transition: 0.2s;
    margin-right: 0.5rem;
}

.inputClose:checked+.close {
    background-image: url('../../assets/cross.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0.5rem;
    background-color: $light-beige;
    transition: none;
}
</style>