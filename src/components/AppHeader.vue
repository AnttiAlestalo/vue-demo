<template>
    <div class="cssAppHeaderBg">
        <div class="cssAppHeaderBgTop"></div>
        <div class="cssAppHeader">
            <span class="cssAppLogo"><img alt="Vue" src="../assets/logo.png"></span>
            <div class="cssSiteTitle">AA Vue Demo App</div>
            <div class="cssTopNav">
                <router-link :to="{name: 'Home'}" exact>{{ $t("lang.home") }}</router-link>
                <router-link :to="{name: 'Customers'}">{{ $t("lang.customers") }}</router-link>
                <router-link :to="{name: 'Reports'}">{{ $t("lang.reports") }}</router-link>
            </div>
            <font-awesome-icon icon="cog" v-popover:foo class="cssSettings" />
            <popover name="foo">
                <div>Select language:</div>
                <div class="cssLang" @click="jsChangeLang('en')">English</div>
                <div class="cssLang" @click="jsChangeLang('fi')">Finnish</div>
            </popover>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        methods: {
            jsChangeLang(strLang) {
                this.$root.$root._i18n.locale = strLang;
            }
        }
    }
</script>

<style scoped>
    .cssAppHeaderBg {
        position: fixed;
        width: 100%;
        background-color: #1174ba;
        height: 80px;
        z-index: 1;
    }
    .cssAppHeaderBgTop {
        position: absolute;
        width: 100%;
        height: 40px;
        background-color: #fff;
    }
    .cssAppHeader {
        margin: 0 auto;
        min-width: 600px;
        max-width: 1200px;
        height: 80px;
        position: relative;
    }
    .cssAppLogo {
        height: 70px;
        width: 70px;
        padding: 8px;
        position: absolute;
        top: 5px;
        left: 20px;
        background-color: #fff;
        border: solid 1px green;
        border-radius: 50%;
    }
    .cssAppLogo img {
        margin-top: 6px;
        height: 50px;
        width: 50px;
    }
    .cssSiteTitle {
        padding-top: 6px;
        font-size: 24px;
        color: #1174ba;
        text-align: center;
    }
    .cssTopNav {
        position: absolute;
        left: 120px;
        bottom: 0;
        line-height: 40px;
    }
    .cssTopNav a {
        display: inline-block;
        padding: 0 30px;
        border-right: solid 1px #FFF;
        color: #fff;
        font-size: 16px;
        font-weight: normal;
        text-decoration: none;
        min-width: 60px;
        text-align: center;
        cursor: pointer;
    }
    .cssTopNav a:first-child {
        border-left: solid 1px #FFF;
    }
    .router-link-active {
        background-color: #121f6b;
    }
    .cssSettings {
        color: #fff;
        font-size: 24px;
        float: right;
        margin-top: 9px;
        margin-right: 20px;
        cursor: pointer;
    }
    .vue-popover {
        position: static !important;
        float: right;
        margin-top: 30px;
        border: solid 1px #ccc;
    }
    .vue-popover div {
        padding: 4px 8px;
    }
    .cssLang {
        border-top: solid 1px #ccc;
        cursor: pointer;
    }
    .cssLang:hover {
        background-color: #DBEAFF;
    }
</style>