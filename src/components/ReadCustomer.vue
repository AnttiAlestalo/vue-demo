<template>
    <div>
    <div class="cssPageHeader">
        Customer <span><button type="button" class="cssButDef" @click="jsEditCustomer(jsonCustomer.id)">Edit</button></span>
    </div>
    <div class="cssPageBody">
        <fieldset id="idFormCustomer" v-if="jsonCustomer">
            <div class="cssFormRow"><div>First name:</div><div>{{jsonCustomer.fFirstName}}</div></div>
            <div class="cssFormRow"><div>Last name:</div><div>{{jsonCustomer.fLastName}}</div></div>
            <div class="cssFormRow"><div>Gender:</div><div>{{jsonCustomer.fGender}}</div></div>
            <div class="cssFormRow"><div>Company:</div><div>{{jsonCustomer.fCompany}}</div></div>
            <div class="cssFormRow"><div>Street address:</div><div>{{jsonCustomer.fStreetAddress}}</div></div>
            <div class="cssFormRow"><div>Post code:</div><div>{{jsonCustomer.fPostCode}}</div></div>
            <div class="cssFormRow"><div>City:</div><div>{{jsonCustomer.fCity}}</div></div>
            <div class="cssFormRow"><div>Country:</div><div>{{jsonCustomer.fCountry}}</div></div>
            <div class="cssFormRow"><div>Email address:</div><div>{{jsonCustomer.fEmail}}</div></div>
            <div class="cssFormRow"><div>Phone number:</div><div>{{jsonCustomer.fPhone}}</div></div>
            <div class="cssFormRow"><div>Last contacted:</div><div>{{jsonCustomer.fContactDate}}</div></div>
            <div class="cssFormRow"><div>Customer id:</div><div>{{jsonCustomer.fCustomerId}}</div></div>
            <div class="cssFormRow"><div>Additional info:</div><div>{{jsonCustomer.fAddInfo}}</div></div>
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
            const strUrl = window.location.href.indexOf('localhost') > 0 ? 'api/123.json' : 'http://www.aad.fi/aad/react1.nsf/vwCustomer/' + strId + '?OpenDocument';
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