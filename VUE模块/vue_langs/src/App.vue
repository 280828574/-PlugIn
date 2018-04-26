<template>
    <div class="app" :class="{ 'en-wrapper': $lang === 'en'}">
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    created() {
        if (window.language === 'en') {
            Vue.config.lang = 'en';
        } else {
            Vue.config.lang = 'zh';
        }
    }
};
</script>

<style lang="scss">
.app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>
