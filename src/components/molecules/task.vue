<template>
    <li :class="$style.task">
        <checkbox />
        <close />
    </li>
</template>

<script>
import checkbox from '@/components/atoms/checkbox';
import close from '@/components/atoms/close';


export default {
    components: {
        checkbox,
        close,
    }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.task {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: $light-beige;
    margin-top: 1rem;
}

.task:first-child {
    margin-top: 0;
}
</style>