<template>
  <div id="idApp">
    <AppHeader/>
    <div class="cssAppBody">
      <router-view/>
    </div>
  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader";

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", "Roboto", "Helvetica Neue", sans-serif;
    overflow-y: scroll;
    background-color: #e3e3e3;
  }
  * {
    box-sizing: border-box;
  }
  #idApp {
    height: 100%;
  }
  .cssAppBody {
    min-height: 100%;
    min-width: 600px;
    max-width: 1200px;
    margin: 0 auto 0 auto;
    padding: 80px 40px 20px 40px;
    background-color: #fff;
  }
  .cssPageHeader {
    font-size: 24px;
    padding: 10px 0 10px 0;
  }
  .cssPageBody {
    font-size: 16px;
  }
  .cssTable {
    border-spacing: 0;
    border-collapse: collapse;
  }
  .cssTable caption {
    text-align: left;
    font-size: 24px;
    padding: 10px 0 10px 0;
    color: #000;
  }
  .cssTable caption button {
    float: right;
    margin-top: 6px;
  }
  .cssTable caption input {
    margin-left: 50px;
  }
  .cssTable th {
    padding: 6px 4px 6px 6px;
    background-color: #d6d6d6;
    color: #000;
    text-align: left;
    font-size: 16px;
    border-top: solid 1px #999;
    border-bottom: solid 1px #999;
  }
  .cssSortIcon {
    margin-left: 8px;
  }
  .cssTable tbody tr:hover {
    background-color: #DBEAFF;
  }
  .cssTable td {
    padding: 4px 6px 4px 4px;
    font-size: 16px;
    line-height: 24px;
    border-bottom: solid 1px #ccc;
  }

  /* Buttons ###################################### */
  .cssButDef, .cssButOK, .cssButDanger, .cssButWarn {
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    padding: 4px 12px;
    -webkit-appearance: none;
  }
  .cssButDef {
    background-color: #3c89d6;
    border: solid 1px #0074cc;
  }
  .cssButOK {
    background-color: #449d44;
    border: solid 1px #398439;
  }
  .cssButDanger {
    background-color: #d9534f;
    border: solid 1px #d43f3a;
  }
  .cssButWarn {
    background-color: #f0ad4e;
    border: solid 1px #eea236;
    color: #313637;
  }
  .cssButSave {
    min-width: 60px;
  }
  /* Fields ###################################### */
  .cssFormRow {
    margin-bottom: 10px;
  }
  .cssFormRow > div:first-child {
    vertical-align: top;
  }
  .cssFormRow > div {
    display: inline-block;
  }
  fieldset {
    border: solid 1px #1174ba;
    border-radius: 6px;
    padding: 12px 12px 10px 12px;
  }
  input[type="text"], select, textarea {
    border-radius: 4px;
    padding: 5px 8px;
    border: solid 1px #aaa;
    font-size: 16px;
    outline: none;
  }
  select {
    padding-left: 4px;
  }
  textarea {
    font-family: "Segoe UI", "Roboto", "Helvetica Neue", sans-serif;
    resize: none;
    height: 70px;
  }
  .cssDate {
    width: 120px !important;
    border: solid 1px #aaa !important;
  }
  .cssDivRadio {
    border: solid 1px #fff;
    padding: 4px;
  }
  .cssDivRadio label {
    margin-right: 12px;
  }
  i.cssRequired {
    width: 8px;
    height: 8px;
    background: #d9534f;
    display: inline-block;
    margin: 8px 6px 0 0;
    border-radius: 50%;
    float: right;
  }
  div.cssInvalid {
    border-radius: 4px;
  }
  .cssInvalid {
    border: solid 1px #d43f3a !important;
    background-color: rgba(236, 88, 64, 0.1);
  }
  .cssFormButtons {
    display: inline-block;
    text-align: right;
  }
  .cssFormButtons button {
    margin-left: 12px;
  }

  @media only screen and (max-width: 800px) {
    .cssAppBody {
      padding: 80px 20px 20px 20px;
    }
  }
</style>
