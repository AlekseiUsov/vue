<template>
    <section class="ToDolist">
        <div class="ToDoBlock">
            <img class="ToDoBlock__image" src="../assets/background-image.svg">
            <h1 class="ToDoBlock__title">to do list</h1>
            <ul class="ToDoBlock__list">
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
            </div>
        </div>
    </section>
</template>
  
<script>
</script>
  
<style lang="scss">
$beige: #ffca93;
$transparent-beige: rgba(127, 75, 19, 0.42);
$light-beige: #FFDFBE;
$yellow: #FEB567;
$ivory: #FFECD8;
$brown: #7F4B13;
$white: #fff;

.ToDolist {
    position: relative;
    background: linear-gradient(104.11deg, #FF7E5F 14.52%, #FEB567 87.26%);
    color: $brown;
    font-size: 20px;
    line-height: 28px;
    padding: 5.5rem;
}

.ToDoBlock {
    position: relative;
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 34rem;
    z-index: 20;

    &__image {
        height: 387px;
        top: -8%;
        right: -27%;
        position: absolute;
        z-index: -1;
    }

    &__title {
        margin: 0;
        padding: 0.5rem 0;
        background-color: $beige;
    }

    &__list {
        margin: 0;
        padding: 1.5rem;
        list-style: none;
        background-color: $white;
    }

    &__task {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 1rem 0 0;
        width: calc(34rem - 4rem);
        margin: 1.5rem auto 0;
        border-radius: 0.5rem;
        background-color: $light-beige;
    }

    &__task:first-child {
        margin-top: 0;
    }

    &__task-last {
        color: $light-beige;
        background: $ivory;
        border: 2.5px dashed $light-beige;
    }

    &__label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    &__close {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    &__input {
        opacity: 0;
    }

    &__checkbox {
        display: block;
        width: 1rem;
        height: 1rem;
        border: 1px solid $yellow;
        border-radius: 0.2em;
        transition: 0.2s;
    }


    &__input:checked+&__checkbox {
        background-image: url('../assets/checked.svg');
        background-size: contain;
        background-color: #FEB567;
    }

    &__input:checked+&__checkbox-close {
        background-image: url('../assets/cross.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 0.5rem;
        background-color: $light-beige;
        transition: none;
    }


    // label {
    //     display: flex;
    //     align-items: center;
    // }

    // &__checkbox-real {
    //     width: 1rem;
    //     height: 1rem;
    // }

    // &__checkbox-custom {
    //     margin: 0 0.5rem;
    //     display: inline-block;
    //     width: 1.2rem;
    //     height: 1.2rem;
    //     border: 1px solid $yellow;
    //     border-radius: 0.2rem;
    // }

    // &__checkbox-custom::before {
    //     content: '';
    //     display: none;
    //     width: 1.2rem;
    //     height: 1.2rem;
    //     border-radius: 0.2rem;
    //     background-image: url('../assets/checked.svg');
    //     background-size: contain;
    //     transition: 0.2s;
    // }

    // &__checkbox-real:checked+&__checkbox-custom {
    //     background-color: $yellow;
    // }

    &__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        background-color: $beige;
        color: $transparent-beige;
    }

    &__menu {
        padding: 0.25rem 1rem;
        list-style: none;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    &__item {
        padding-left: 1rem;
    }

    &__item-active {
        border: 1px solid $transparent-beige;
        border-radius: 0.2rem;
        padding: 0.1rem 0.4rem;
    }

}
</style>
  