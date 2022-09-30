<template>
    <div :class="$style.todo">
        <img :class="$style.image" src="../assets/background-image.svg">
        <div :class="$style.block">
            <titleToDo />
            <taskList />
            <footerArea />
        </div>
    </div>
</template>
  
<script>
import titleToDo from '@/components/atoms/titleToDo';
import taskList from '@/components/organisms/taskList';
import footerArea from '@/components/organisms/footerArea';

export default {
    name: "todo",
    components: {
        titleToDo,
        taskList,
        footerArea
    }
}
</script>
  
<style lang="scss" module>
@import "@/assets/main.scss";

.todo {
    position: relative;
    background: linear-gradient(104.11deg, #FF7E5F 14.52%, #FEB567 87.26%);
    color: $brown;
    font-size: 20px;
    line-height: 28px;
    padding: 5.5rem;
}

.block {
    position: relative;
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 34rem;
    z-index: 20;
    background-color: $white;
}

.image {
    height: 387px;
    top: -8%;
    right: -27%;
    position: absolute;
    z-index: -1;
}
</style>
