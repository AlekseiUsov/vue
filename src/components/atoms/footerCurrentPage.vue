<template>
    <p :class="$style.footerCurrentPage">1/3 left</p>
</template>

<script>
export default {
    name: "footerCurrentPage"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.footerCurrentPage {
    color: $transparent-beige;
}
</style>