<template>
    <div :class="$style.closeWrapper">
        <span @click="$emit('close')" :class="$style.close"></span>
    </div>
</template>

<script>
export default {
    name: "ToDoCloseBth"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.closeWrapper {
    display: flex;
    align-items: center;
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
    background-image: url('../../assets/cross.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0.5rem;
    background-color: $light-beige;
    transition: none;
}
</style>