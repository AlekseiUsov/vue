<template>
    <li :class="$style.task">
    </li>
</template>

<script>
import checkbox from '@/componets/atoms/checkbox.vue';
import close from '@/componets/atoms/close';

export default {
    components: {
        checkbox,
        close,
    }
};
</script>

<style lang="scss" module>
.task {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 1rem 0 0;
    width: calc(34rem - 4rem);
    margin: 1.5rem auto 0;
    border-radius: 0.5rem;
    background-color: $light-beige;
}

.task:first-child {
    margin-top: 0;
}

.task:last-child {
    justify-content: center;
    color: $light-beige;
    background: $ivory;
    border: 2.5px dashed $light-beige;
}

@import "@/styles/main.scss";
</style>