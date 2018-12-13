<template>
    <div>
        <div class="cssPageHeader">Welcome to Vue demo application!</div>
        <div class="cssPageBody">
            <p class="cssFirstPara">This application shows how some common web application features could be build with Vue. This is a responsive Single Page Application.</p>
        </div>
        <table class="cssTable" id="idHomepageTable">
            <tbody>
            <tr>
                <td>Routing:</td>
                <td><a href="https://router.vuejs.org/" target="_blank">Vue Router</a></td>
            </tr>
            <tr>
                <td>Internationalization:</td>
                <td><a href="http://kazupon.github.io/vue-i18n/" target="_blank">Vue I18n</a></td>
            </tr>
            <tr>
                <td>Icons:</td>
                <td><a href="https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs" target="_blank">Font Awesome</a></td>
            </tr>
            <tr>
                <td>Dropdown menus:</td>
                <td><a href="https://github.com/euvl/vue-js-popover" target="_blank">Vue.js popover</a></td>
            </tr>
            <tr>
                <td>AJAX:</td>
                <td><a href="https://github.com/axios/axios" target="_blank">axios</a></td>
            </tr>
            <tr>
                <td>Simple table with sorting and filtering:</td>
                <td>Own code</td>
            </tr>
            <tr>
                <td>Form with different field types; text, select, radio button, textarea:</td>
                <td>Own code</td>
            </tr>
            <tr>
                <td>Searchable select list:</td>
                <td><a href="https://github.com/sagalbot/vue-select" target="_blank">vue-select</a></td>
            </tr>
            <tr>
                <td>Date picker:</td>
                <td><a href="https://github.com/mengxiong10/vue2-datepicker" target="_blank">vue2-datepicker</a></td>
            </tr>
            <tr>
                <td>Form validation:</td>
                <td>Own code</td>
            </tr>
            <tr>
                <td>Popup:</td>
                <td><a href="https://github.com/Godofbrowser/vuejs-dialog" target="_blank">vuejs-dialog</a></td>
            </tr>
            <tr>
                <td>Charts:</td>
                <td><a href="https://github.com/devstark-com/vue-google-charts" target="_blank">vue-google-charts</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'HomePage'
    }
</script>

<style scoped>
    .cssFirstPara {
        margin-top: 0;
    }
    #idHomepageTable {width: 500px}
    #idHomepageTable td:nth-child(1) {width: 280px}
    #idHomepageTable td:nth-child(2) {width: 200px}
    #idHomepageTable tr:first-child td {border-top: solid 1px #ccc}
    #idHomepageTable a {
        color: #03C;
    }
</style>
