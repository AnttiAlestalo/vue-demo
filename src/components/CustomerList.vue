<template>
    <table id="idCustomersTable" class="cssTable">
        <caption>
            Customers <span class="cssSmall">({{(aCustomers ? aCustomers.length : '0')}})</span>
            <input type="text" placeholder="Search" v-model="strSearchQuery" />
            <button type="button" class="cssButDef" @click="jsEditCustomer('0')">Add new</button>
        </caption>
        <thead>
        <tr>
            <th @click="jsSortBy('fName')">Name
                <font-awesome-icon icon="arrow-down" class="cssSortIcon" v-if="strSortBy === 'fName' && !bSortDes"/>
                <font-awesome-icon icon="arrow-up" class="cssSortIcon" v-if="strSortBy === 'fName' && bSortDes"/>
            </th>
            <th @click="jsSortBy('fEmail')">Email
                <font-awesome-icon icon="arrow-down" class="cssSortIcon" v-if="strSortBy === 'fEmail' && !bSortDes"/>
                <font-awesome-icon icon="arrow-up" class="cssSortIcon" v-if="strSortBy === 'fEmail' && bSortDes"/>
            </th>
            <th @click="jsSortBy('fPhone')">Phone number
                <font-awesome-icon icon="arrow-down" class="cssSortIcon" v-if="strSortBy === 'fPhone' && !bSortDes"/>
                <font-awesome-icon icon="arrow-up" class="cssSortIcon" v-if="strSortBy === 'fPhone' && bSortDes"/>
            </th>
            <th @click="jsSortBy('fCountry')">Country
                <font-awesome-icon icon="arrow-down" class="cssSortIcon" v-if="strSortBy === 'fCountry' && !bSortDes"/>
                <font-awesome-icon icon="arrow-up" class="cssSortIcon" v-if="strSortBy === 'fCountry' && bSortDes"/>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="jsonCustomer in aCustomers"
            v-if="strSearchQuery.length < 2 || jsonCustomer.fName.toLowerCase().indexOf(strSearchQuery.toLowerCase()) > -1 || jsonCustomer.fEmail.toLowerCase().indexOf(strSearchQuery.toLowerCase()) > -1 || jsonCustomer.fPhone.toLowerCase().indexOf(strSearchQuery.toLowerCase()) > -1 || jsonCustomer.fCountry.toLowerCase().indexOf(strSearchQuery.toLowerCase()) > -1"
            @click='jsReadCustomer(jsonCustomer.id)'>
            <td>{{jsonCustomer.fName}}</td>
            <td>{{jsonCustomer.fEmail}}</td>
            <td>{{jsonCustomer.fPhone}}</td>
            <td>{{jsonCustomer.fCountry}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import axios from "axios";

    export default {
        name: "CustomerList",
        data: function() {
            return {
                aCustomers: null,
                strSortBy: 'fName',
                bSortDes: false,
                strSearchQuery: ''
            }
        },
        methods: {
            jsSortBy(strCol) {
                this.bSortDes = (strCol === this.strSortBy ? !this.bSortDes : false);
                this.strSortBy = strCol;
                this.aCustomers.sort((a, b) => {
                    return a[this.strSortBy].localeCompare(b[this.strSortBy]);
                });
                if (this.bSortDes) {
                    this.aCustomers.reverse()
                }
            },
            jsUpdateCustomers(aData) {
                this.aCustomers = aData;
                this.aCustomers.pop();
            },
            jsReadCustomer(strId) {
                this.$router.push('/customers/read/' + strId)
            }
        },
        created () {
            const strUrl = window.location.href.indexOf('localhost') > 0 ? 'api/customers.json' : 'http://www.aad.fi/aad/react1.nsf/vwCustomers?OpenView';
            axios
                .get(strUrl)
                .then(response => (
                    this.jsUpdateCustomers(response.data)
                ))
        }
    }
</script>

<style scoped>
    #idCustomersTable tr {cursor: pointer}
    #idCustomersTable {
        width: 100%;
        min-width: 520px;
    }
    #idCustomersTable caption .cssSmall {
        font-size: 16px;
        padding-left: 20px;
    }
    .cssSortIcon {
        color: green;
        margin-left: 10px;
    }
</style>