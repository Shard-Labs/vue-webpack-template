<template>
    <header class="header">
        <h1 class="example">header</h1>
        <nav class="header__main-navigation">
            <ul class="main-navigation__list">
                <li class="main-navigation__list-item"><a href="/" class="main-navigation__link">Home</a></li>
                <li class="main-navigation__list-item"><a href="/" class="main-navigation__link">About</a></li>
                <li class="main-navigation__list-item"><a href="/" class="main-navigation__link">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
    .example {
        color: darkseagreen;
    }
</style>