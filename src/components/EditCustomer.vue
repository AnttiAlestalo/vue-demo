<template>
    <form class="cssForm" id="idFormCustomer" novalidate v-if="jsonCustomer">
        <div class="cssPageHeader">
            {{ $t("lang.customer") }}
            <span>
                <button type="button" class="cssButOK cssButSave" @click="jsSaveCustomer()">{{ $t("lang.save") }}</button>
                <button v-if='jsonCustomer.id !== ""' type="button" class="cssButDanger" @click="jsDeleteCustomer">{{ $t("lang.delete") }}</button>
                <button type="button" class="cssButWarn" @click="$router.go(-1)">{{ $t("lang.cancel") }}</button>
            </span>
        </div>
        <div class="cssPageBody">
            <fieldset>
                <div class="cssFormRow">
                    <div>{{ $t("lang.firstname") }}: <i class="cssRequired"></i></div>
                    <div>
                        <input autoFocus name="fFirstName" type="text" required
                               v-model="jsonCustomer.fFirstName"
                               v-bind:class="{'cssInvalid': this.bSave && this.aInvalidFields.indexOf('fFirstName') > -1}"
                               v-on:keyup="jsValidateField('fFirstName')"
                        />
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.lastname") }}: <i class="cssRequired"></i></div>
                    <div>
                        <input name="fLastName" type="text" required
                               v-model="jsonCustomer.fLastName"
                               v-bind:class="{'cssInvalid': this.bSave && this.aInvalidFields.indexOf('fLastName') > -1}"
                               v-on:keyup="jsValidateField('fLastName')"
                        />
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.gender") }}: <i class="cssRequired"></i></div>
                    <div v-bind:class="{'cssInvalid': this.bSave && this.aInvalidFields.indexOf('fGender') > -1}">
                        <label><input type="radio" value="Male" v-model="jsonCustomer.fGender" v-on:click="jsValidateField('fGender')" />Male</label>
                        <label><input type="radio" value="Female" v-model="jsonCustomer.fGender" v-on:click="jsValidateField('fGender')" />Female</label>
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.company") }}:</div><div><input name="fCompany" type="text" v-model="jsonCustomer.fCompany" /></div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.address") }}:</div>
                    <div><input name="fStreetAddress" type="text" v-model="jsonCustomer.fStreetAddress" /></div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.postcode") }}:</div><div><input name="fPostCode" type="text" v-model="jsonCustomer.fPostCode" /></div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.city") }}:</div><div><input name="fCity" type="text" v-model="jsonCustomer.fCity" /></div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.country") }}:</div><div><v-select v-model="jsonCustomer.fCountry" :options="aCountries"></v-select></div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.email") }}: <i class="cssRequired"></i></div>
                    <div>
                        <input type="text" required
                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                               v-model="jsonCustomer.fEmail"
                               v-bind:class="{'cssInvalid': this.bSave && this.aInvalidFields.indexOf('fEmail') > -1}"
                               v-on:keyup="jsValidateField('fEmail')"
                        />
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.phone") }}:</div><div><input name="fPhone" type="text" v-model="jsonCustomer.fPhone" /></div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.lastcontacted") }}:</div>
                    <div><date-picker v-model="jsonCustomer.fContactDate" lang="en" :first-day-of-week="1" class="cssDate"></date-picker></div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.customerid") }}:</div><div><input name="fCustomerId" type="text" v-model="jsonCustomer.fCustomerId" /></div>
                </div>
                <div class="cssFormRow">
                    <div>{{ $t("lang.additionalinfo") }}:</div><div><textarea name="fAddInfo" v-model="jsonCustomer.fAddInfo"></textarea></div>
                </div>
                <input name="id" type="hidden" v-model="jsonCustomer.id" />
            </fieldset>
            <div class="cssFormButtons">
            <span>
                <button type="button" class="cssButOK cssButSave" @click="jsSaveCustomer()">{{ $t("lang.save") }}</button>
                <button v-if='jsonCustomer.id !== ""' type="button" class="cssButDanger" @click="jsDeleteCustomer">{{ $t("lang.delete") }}</button>
                <button type="button" class="cssButWarn" @click="$router.go(-1)">{{ $t("lang.cancel") }}</button>
            </span>
            </div>
        </div>
    </form>
</template>

<script>
    import axios from "axios";
    import mixins from "../mixins.js";
    import DatePicker from 'vue2-datepicker';
    import Vue from 'vue'
    import vSelect from 'vue-select'
    Vue.component('v-select', vSelect);

    export default {
        name: "EditCustomer",
        components: { DatePicker },
        data: function() {
            return {
                jsonCustomer: null,
                bSave: false,
                aInvalidFields: [],
                aCountries: ["Afghanistan","Albania","Algeria","Amer.Virgin Is.","Andorra","Angola","Anguilla","Antarctica","Antigua/Barbads","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia-Herz.","Botswana","Bouvet Island","Brazil","Brit.Ind.Oc.Ter","Brit.Virgin Is.","Brunei Dar-es-S","Bulgaria","Burkina-Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Afr.Rep","Chad","Chile","China","Christmas Islnd","Coconut Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Dem.Reb. Congo","Denmark","Djibouti","Dominica","Dominican Rep.","Dutch Antilles","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guin","Eritrea","Estonia","Ethiopia","Faeroe","Falkland Islnds","Fiji","Finland","France","Frenc.Polynesia","French Guayana","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard/McDon.Isl","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey C.I.","Jordan","Kazakhstan","Kenya","Kirghizstan","Kiribati","Kuwait","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islnds","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Minor Outl.Isl.","Moldavia","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","N.Mariana Islnd","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue Islands","Norfolk Island","North Korea","Norway","Oman","Pakistan","Palau","Panama","Pap. New Guinea","Paraguay","Peru","Philippines","Pitcairn Islnds","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","stateless","S.Tome,Principe","Samoa,American","San Marino","Saudi Arabia","Senegal","Serbia/Monteneg","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","Spain","Sri Lanka","St Kitts&amp;Nevis","St. Helena","St. Lucia","St. Vincent","St.Pier,Miquel.","Sth Sandwich Is","Sudan","Suriname","Svalbard","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikstan","Tanzania","Thailand","Togo","Tokelau Islands","Tonga","Trinidad,Tobago","Tunisia","Turkey","Turkmenistan","Turksh Caicosin","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay ","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis,Futuna","Western Samoa","Yemen","Yugoslavia","Zambia","Zimbabwe"]
            };
        },
        mixins: [mixins],
        created () {
            const strId = this.$route.params.id;
            if (strId === "0") {
                this.jsonCustomer = {"id": "", "fFirstName": "", "fLastName": "", "fGender": "", "fCompany": "", "fStreetAddress": "", "fPostCode": "", "fCity": "", "fCountry": "", "fEmail": "", "fPhone": "", "fContactDate": "", "fCustomerId": "", "fAddInfo": ""}
            } else {
                const strUrl = window.location.href.indexOf('localhost') > 0 ? 'api/123.json' : 'http://www.aad.fi/aad/react1.nsf/vwCustomer/' + strId + '?OpenDocument';
                axios.get(strUrl)
                    .then(response => (this.jsonCustomer = response.data))
                    .catch(error => console.log(error))
            }
        },
        methods: {
            jsSaveCustomer: function () {
                this.bSave = true;
                this.jsValidateField('fFirstName');
                this.jsValidateField('fLastName');
                this.jsValidateField('fGender');
                this.jsValidateField('fEmail');
                if (window.location.href.indexOf('localhost') < 0 && this.aInvalidFields.length === 0) {
                    const strUrl = this.jsonCustomer.id === "" ? "http://www.aad.fi/aad/react1.nsf/frmCustomer?CreateDocument" : "http://www.aad.fi/aad/react1.nsf/0/" + this.jsonCustomer.id + "?SaveDocument";
                    const jsonCustomer = this.jsonCustomer;
                    const strUrlParams = Object.keys(this.jsonCustomer).map((k) => {
                        const strVal = (k === "fContactDate" && (typeof jsonCustomer[k]) !== "string"  ? this.jsLeft(jsonCustomer[k].toISOString(), 10) : jsonCustomer[k]);
                        return encodeURIComponent(k) + '=' + encodeURIComponent(strVal)
                    }).join('&');
                    axios.post(strUrl, strUrlParams)
                        .then(response => (this.jsContinue(response.data)))
                        .catch(error => console.log(error))
                } else {
                    let oDiaText = {
                        title: 'Error',
                        body: 'Please check required fields!'
                    };
                    this.$dialog.alert(oDiaText).then(function(dialog) {});
                }
            },
            jsContinue: function(strResponse) {
                const strId = this.jsLeft(this.jsStrRight(strResponse, "^OK^"), 32);
                this.$router.push('/customers/read/' + strId);
            },
            jsDeleteCustomer: function () {
                let oDiaText = {
                    title: 'Confirm',
                    body: 'Are you sure you want to delete this customer?'
                };
                this.$dialog.confirm(oDiaText)
                    .then(function(dialog) {
                        const strUrl = "http://www.aad.fi/aad/react1.nsf/vwCustomers/" + this.jsonCustomer.id + "?DeleteDocument";
                        axios.get(strUrl)
                            .then(this.$router.push('/customers'))
                            .catch(error => console.log(error))
                    })
                    .catch(function() {});
            },
            jsValidateField: function (strFieldName) {
                if (strFieldName === "fEmail") {
                    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!regExp.test(this.jsonCustomer[strFieldName])) {
                        this.jsAddInvalidField(strFieldName)
                    } else {
                        this.jsRemoveInvalidField(strFieldName)
                    }
                } else if (strFieldName === "fGender" && this.jsonCustomer.fGender === "") {
                    this.jsAddInvalidField(strFieldName)
                } else if (this.jsonCustomer[strFieldName] === "") {
                    this.jsAddInvalidField(strFieldName)
                } else {
                    this.jsRemoveInvalidField(strFieldName)
                }
            },
            jsAddInvalidField: function (strFieldName) {
                if (this.aInvalidFields.indexOf(strFieldName) === -1) {
                    this.aInvalidFields.push(strFieldName)
                }
            },
            jsRemoveInvalidField: function (strFieldName) {
                const i = this.aInvalidFields.indexOf(strFieldName);
                if (i >= 0) {
                    this.aInvalidFields.splice(i, 1);
                }
            }
        }
    }
</script>

<style scoped>
    #idFormCustomer input[type="text"], #idFormCustomer select, #idFormCustomer textarea {
        width: 100%;
    }
    #idFormCustomer input[name="fPostCode"] {
        width: 120px !important;
    }
    .cssFormButtons {
        display: inline-block;
        width: 556px;
        text-align: right;
    }
    .cssFormButtons button {
        margin-left: 12px;
    }
</style>