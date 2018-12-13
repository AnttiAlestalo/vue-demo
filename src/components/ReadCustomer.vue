<template>
    <div>
    <div class="cssPageHeader">
        {{ $t("lang.customer") }} <span><button type="button" class="cssButDef" @click="jsEditCustomer(jsonCustomer.id)">{{ $t("lang.edit") }}</button></span>
    </div>
    <div class="cssPageBody">
        <fieldset id="idFormCustomer" v-if="jsonCustomer">
            <div class="cssFormRow"><div>{{ $t("lang.firstname") }}:</div><div>{{jsonCustomer.fFirstName}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.lastname") }}:</div><div>{{jsonCustomer.fLastName}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.gender") }}:</div><div>{{jsonCustomer.fGender}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.company") }}:</div><div>{{jsonCustomer.fCompany}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.address") }}:</div><div>{{jsonCustomer.fStreetAddress}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.postcode") }}:</div><div>{{jsonCustomer.fPostCode}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.city") }}:</div><div>{{jsonCustomer.fCity}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.country") }}:</div><div>{{jsonCustomer.fCountry}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.email") }}:</div><div>{{jsonCustomer.fEmail}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.phone") }}:</div><div>{{jsonCustomer.fPhone}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.lastcontacted") }}:</div><div>{{jsonCustomer.fContactDate}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.customerid") }}:</div><div>{{jsonCustomer.fCustomerId}}</div></div>
            <div class="cssFormRow"><div>{{ $t("lang.additionalinfo") }}:</div><div>{{jsonCustomer.fAddInfo}}</div></div>
        </fieldset>
    </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ReadCustomer",
        data: function() {
            return {
                jsonCustomer: null
            };
        },
        methods: {
            jsEditCustomer(strId) {
                this.$router.push('/customers/edit/' + strId)
            }
        },
        created () {
            const strId = this.$route.params.id;
            const strUrl = window.location.href.indexOf('localhost') > 0 ? 'api/123.json' : 'http://www.aad.fi/aad/react1.nsf/vwCustomer/' + strId + '?OpenDocument&' + Date.now();
            axios
                .get(strUrl)
                .then(response => (this.jsonCustomer = response.data))
        }
    }
</script>

<style>
    .cssPageHeader {
        width: 556px;
    }
    .cssPageHeader span {
        float: right;
    }
    .cssPageHeader span button {
        margin-left: 12px;
    }
    fieldset {
        width: 556px;
        margin-bottom: 10px;
    }
    #idFormCustomer .cssFormRow > div:nth-child(1) {
        width: 180px;
    }
    #idFormCustomer .cssFormRow > div:nth-child(2) {
        width: 350px;
    }
</style>