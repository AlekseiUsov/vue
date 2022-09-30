<template>
    <div class="ToDoApp">
        <img :class="$style.image" src="../assets/background-image.svg">
        <div :class="$style.block">
            <title />
            <taskList />
        </div>
    </div>
</template>

        <!--        <ul class="ToDoBlock__list">
                <li class="ToDoBlock__task">
                    <label class="ToDoBlock__label">
                        <input type="checkbox" class="ToDoBlock__input">
                        <span class="ToDoBlock__checkbox"></span>
                        Task1
                    </label>
                    <label class="ToDoBlock__label">
                        <input type="checkbox" class="ToDoBlock__input">
                        <span class="ToDoBlock__checkbox ToDoBlock__checkbox-close"></span>
                    </label>
                </li>
                <li class="ToDoBlock__task">
                    <label class="ToDoBlock__label">
                        <input type="checkbox" class="ToDoBlock__input">
                        <span class="ToDoBlock__checkbox"></span>
                        Task2
                    </label>
                    <label class="ToDoBlock__label">
                        <input type="checkbox" class="ToDoBlock__input">
                        <span class="ToDoBlock__checkbox ToDoBlock__checkbox-close"></span>
                    </label>
                </li>
                <li class="ToDoBlock__task">
                    <label class="ToDoBlock__label">
                        <input type="checkbox" class="ToDoBlock__input">
                        <span class="ToDoBlock__checkbox"></span>
                        Task3
                    </label>
                    <label class="ToDoBlock__label">
                        <input type="checkbox" class="ToDoBlock__input">
                        <span class="ToDoBlock__checkbox ToDoBlock__checkbox-close"></span>
                    </label>
                </li>
                <li class="ToDoBlock__task ToDoBlock__task-last">Add a new task</li>
            </ul>
            <div class="ToDoBlock__footer">
                <div class="ToDoBlock__status">1/3 left</div>
                <u class="ToDoBlock__menu">
                    <li class="ToDoBlock__item ToDoBlock__item-active">All</li>
                    <li class="ToDoBlock__item">Active</li>
                    <li class="ToDoBlock__item">Completed</li>
                </u>
            </div> -->

  
<script>
import title from '@/components/atoms/title';
import taskList from '@/components/organisms/taskList';

export default {
    name: "ToDoApp",
    components: {
        title,
        taskList
    }
}
</script>
  
<style lang="scss">
@import "@/assets/main.scss";

.ToDoApp {
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

// &__input:checked+&__checkbox-close {
//     background-image: url('../assets/cross.svg');
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: 0.5rem;
//     background-color: $light-beige;
//     transition: none;
// }

// &__footer {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 0 1rem;
//     background-color: $beige;
//     color: $transparent-beige;
// }

// &__menu {
//     padding: 0.25rem 1rem;
//     list-style: none;
//     text-decoration: none;
//     display: flex;
//     align-items: center;
// }

// &__item {
//     padding-left: 1rem;
// }

// &__item-active {
//     border: 1px solid $transparent-beige;
//     border-radius: 0.2rem;
//     padding: 0.1rem 0.4rem;
// }
</style>
  