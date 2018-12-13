<template>
    <div>
        <div class="cssPageHeader">{{ $t("lang.custbycountry") }}</div>
        <div class="cssPageBody">
            <GChart style="height: 350px"
                    type="ColumnChart"
                    :data="barChartData"
                    :options="barChartOptions"
            />
            <br/>
            <div class="cssPageHeader">{{ $t("lang.custbygender") }}</div>
            <GChart style="width: 600px; height: 350px"
                    type="PieChart"
                    :data="pieChartData"
            />
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { GChart } from 'vue-google-charts';

    export default {
        name: "Reports",
        components: {
            GChart
        },
        data() {
            return {
                barChartData: null,
                barChartOptions: {
                    vAxis: {
                        minValue: 0,
                        format: '0'
                    }
                },
                pieChartData: null,
            };
        },
        methods: {
            jsUpdateCharts(json) {
                json.pop();

                let aBarLabels = [];
                let aPieLabels = ['Male', 'Female'];
                let aPieData = [0, 0];
                for (let i = 0; i < json.length; i++) {
                    aPieData[aPieLabels.indexOf(json[i].fGender)] += 1;
                    if (aBarLabels.indexOf(json[i].fCountry) < 0) {
                        aBarLabels.push(json[i].fCountry)
                    }
                }
                aBarLabels.sort();
                let aBarData = [];
                for (let i = 0; i < aBarLabels.length; i++) {
                    aBarData.push(0);
                }
                for (let i = 0; i < json.length; i++) {
                    aBarData[aBarLabels.indexOf(json[i].fCountry)] += 1;
                }
                let aBarChartData = [
                    ["Country", "Customers"]
                ];
                for (let i = 0; i < aBarLabels.length; i++) {
                    aBarChartData.push([aBarLabels[i], aBarData[i]])
                }
                this.barChartData = aBarChartData;

                this.pieChartData = [
                    ["Country", "Customers"],
                    ["Male", aPieData[0]],
                    ["Female", aPieData[1]]
                ];

            }
        },
        created () {
            const strUrl = window.location.href.indexOf('localhost') > 0 ? 'api/customers.json' : 'http://www.aad.fi/aad/react1.nsf/vwCustomers?OpenView&' + Date.now();
            axios.get(strUrl)
                .then(response => (
                    this.jsUpdateCharts(response.data)
                ))
                .catch(error => console.log(error))
        }
    }
</script>