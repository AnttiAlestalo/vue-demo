<template>
    <form class="cssForm" id="idFormCustomer" novalidate v-if="jsonCustomer">
        <div class="cssPageHeader">
            Customer
            <span>
                <button type="button" class="cssButOK cssButSave">Save</button>

                <button type="button" class="cssButWarn" @click="$router.go(-1)">Cancel</button>
            </span>
        </div>
        <div class="cssPageBody">
            <fieldset>
                <div class="cssFormRow">
                    <div>First name: <i class="cssRequired"></i></div>
                    <div>
                        <input autoFocus name="fFirstName" type="text" required v-model="jsonCustomer.fFirstName" />
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>Last name: <i class="cssRequired"></i></div>
                    <div>
                        <input name="fLastName" type="text" required v-model="jsonCustomer.fLastName" />
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>Gender: <i class="cssRequired"></i></div>
                    <div class="cssDivRadio">
                        <label><input type="radio" value="Male" v-model="jsonCustomer.fGender" />Male</label>
                        <label><input type="radio" value="Female" v-model="jsonCustomer.fGender" />Female</label>
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>Company:</div><div><input name="fCompany" type="text" v-model="jsonCustomer.fCompany" /></div>
                </div>
                <div class="cssFormRow">
                    <div>Street address:</div>
                    <div><input name="fStreetAddress" type="text" v-model="jsonCustomer.fStreetAddress" /></div>
                </div>
                <div class="cssFormRow">
                    <div>Post code:</div><div><input name="fPostCode" type="text" v-model="jsonCustomer.fPostCode" /></div>
                </div>
                <div class="cssFormRow">
                    <div>City:</div><div><input name="fCity" type="text" v-model="jsonCustomer.fCity" /></div>
                </div>
                <div class="cssFormRow">
                    <div>Country:</div>
                    <div>
                        <select name="fCountry" v-model="jsonCustomer.fCountry">
                            <option v-for="country in aCountries" v-bind:value="country">{{country}}</option>
                        </select>
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>Email address: <i class="cssRequired"></i></div>
                    <div>
                        <input type="text" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" v-model="jsonCustomer.fEmail" />
                    </div>
                </div>
                <div class="cssFormRow">
                    <div>Phone number:</div><div><input name="fPhone" type="text" v-model="jsonCustomer.fPhone" /></div>
                </div>

                <div class="cssFormRow">
                    <div>Last contacted:</div>
                    <div>
                        <input name="fContactDate" v-model="jsonCustomer.fContactDate"/>
                    </div>
                </div>

                <div class="cssFormRow">
                    <div>Customer id:</div><div><input name="fCustomerId" type="text" v-model="jsonCustomer.fCustomerId" /></div>
                </div>

                <div class="cssFormRow">
                    <div>Additional info:</div><div><textarea name="fAddInfo" v-model="jsonCustomer.fAddInfo"></textarea></div>
                </div>
                <input name="id" type="hidden" v-model="jsonCustomer.id" />
            </fieldset>
            <div class="cssFormButtons">
            <span>
                <button type="button" class="cssButOK cssButSave">Save</button>

                <button type="button" class="cssButWarn" @click="$router.go(-1)">Cancel</button>
            </span>
            </div>
        </div>
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "EditCustomer",
        data: function() {
            return {
                jsonCustomer: null,
                aCountries: ["","Afghanistan","Albania","Algeria","Amer.Virgin Is.","Andorra","Angola","Anguilla","Antarctica","Antigua/Barbads","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia-Herz.","Botswana","Bouvet Island","Brazil","Brit.Ind.Oc.Ter","Brit.Virgin Is.","Brunei Dar-es-S","Bulgaria","Burkina-Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Afr.Rep","Chad","Chile","China","Christmas Islnd","Coconut Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Dem.Reb. Congo","Denmark","Djibouti","Dominica","Dominican Rep.","Dutch Antilles","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guin","Eritrea","Estonia","Ethiopia","Faeroe","Falkland Islnds","Fiji","Finland","France","Frenc.Polynesia","French Guayana","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard/McDon.Isl","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey C.I.","Jordan","Kazakhstan","Kenya","Kirghizstan","Kiribati","Kuwait","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islnds","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Minor Outl.Isl.","Moldavia","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","N.Mariana Islnd","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue Islands","Norfolk Island","North Korea","Norway","Oman","Pakistan","Palau","Panama","Pap. New Guinea","Paraguay","Peru","Philippines","Pitcairn Islnds","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","stateless","S.Tome,Principe","Samoa,American","San Marino","Saudi Arabia","Senegal","Serbia/Monteneg","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","Spain","Sri Lanka","St Kitts&amp;Nevis","St. Helena","St. Lucia","St. Vincent","St.Pier,Miquel.","Sth Sandwich Is","Sudan","Suriname","Svalbard","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikstan","Tanzania","Thailand","Togo","Tokelau Islands","Tonga","Trinidad,Tobago","Tunisia","Turkey","Turkmenistan","Turksh Caicosin","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay ","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis,Futuna","Western Samoa","Yemen","Yugoslavia","Zambia","Zimbabwe"]
            };
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