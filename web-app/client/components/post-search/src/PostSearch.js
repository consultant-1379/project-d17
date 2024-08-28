/**
 * Component PostSearch is defined as
 * `<e-post-search>`
 *
 * Imperatively create component
 * @example
 * let component = new PostSearch();
 *
 * Declaratively create component
 * @example
 * <e-post-search></e-post-search>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import style from './postSearch.css';
import { Dropdown } from '@eui/base';
import { TextField } from '@eui/base';
import { Datepicker } from '@eui/base';
import { Button } from '@eui/base';
import { RadioButton } from '@eui/base';
import { stringify } from "javascript-stringify";
import 'whatwg-fetch';


const entryMap = new Map();
let obj = {};
function formatJson(map){

map.forEach(function(value, key){
if(key=='name'){
    obj[key] = value;}
});
map.forEach(function(value, key){
if(key=='category'){

    obj[key] = value.toUpperCase();}

});
map.forEach(function(value, key){
if(key=='engineer'){
    let obj2 = {};
    obj2['name']=value;
    obj2['email']='temp@temp.com';
    obj[key] = obj2;}
});
map.forEach(function(value, key){
if(key=='description'){
    obj[key] = value;}
});
map.forEach(function(value, key){
if(key=='category'){
    obj[key] = value;}
});
map.forEach(function(value, key){
if(key=='localDateTime'){
    obj[key] = value+'T17:09:42.411';}
});
map.forEach(function(value, key){
 if(key=='versions'){
     obj[key] = [value];}
 });
 map.forEach(function(value, key){
  if(key=='dependencies'){
      obj[key] = [value];}
/*<<<<<<< HEAD
  });
 map.forEach(function(value, key){
  if(key=='versions'){
      obj['currentVersion'] = value.toUpperCase();}
======= */
  else{obj['dependencies'] = [];}

  });
 map.forEach(function(value, key){
  if(key=='versions'){
      obj['currentVersion'] = value;}

  });
return obj;
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition('e-post-search', {
  style,
  home: 'post-search',
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})
export default class PostSearch extends LitComponent {
  /**
   * Render the <e-post-search> component. This function is called each time a
   * prop changes.
   */

    _onButtonClicked_2(value){
            const microserviceObj = Object.fromEntries(entryMap);
           for (const [key, value] of entryMap) {
             console.log(`${key} = ${value}`);
           }
           formatJson(entryMap);
           entryMap.clear();

             fetch('http://localhost:8080/ms/', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify(obj)
             })
            console.log(JSON.stringify(obj));
          }

  render() {
    return html`<h1>Enter details of microservice:</h1>
        <div class="add_microservices">
        <eui-base-v0-text-field name="Name" prefix="Name:"
        @input="${(event) => entryMap.set('name',event.detail.value)}">
        </eui-base-v0-text-field><br>
        <eui-base-v0-text-field name="category" prefix="Category (e.g. Database, messaging, application):"
             @input="${(event) => entryMap.set('category',event.detail.value.toUpperCase())}">
            </eui-base-v0-text-field><br>
        <eui-base-v0-text-field name="leadEngineer" prefix="Microservice lead engineer:"
         @input="${(event) => entryMap.set('engineer',event.detail.value)}">
        </eui-base-v0-text-field><br>
        <eui-base-v0-text-field name="description" prefix="Description of microservice:"
         @input="${(event) => entryMap.set('description',event.detail.value)}">
        </eui-base-v0-text-field><br>
        <p>Date created:<\p><eui-base-v0-datepicker name="date" prefix="Date created:"
        @eui-datepicker:change="${(event) => entryMap.set('localDateTime',event.detail.date)}">
        </eui-base-v0-datepicker><br>
        <eui-base-v0-text-field name="version" prefix="Version number:"
         @input="${(event) => entryMap.set('versions',event.detail.value)}">
        </eui-base-v0-text-field><br>
        <eui-base-v0-text-field name="dependencies" prefix="Names of microservices it uses (dependencies):"
         @input="${(event) => entryMap.set('dependencies',event.detail.value)}">
        </eui-base-v0-text-field><br>
        <br><eui-base-v0-button
         @click="${() => this._onButtonClicked_2()}"
        >Enter</eui-base-v0-button><br>
        <\div><br>`;
  }
}

/**
 * Register the component as e-post-search.
 * Registration can be done at a later time and with a different name
 */
PostSearch.register();
