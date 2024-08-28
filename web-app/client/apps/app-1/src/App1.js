/**
 * App1 is defined as
 * `<e-app-1>`
 *
 * Imperatively create application
 * @example
 * let app = new App1();
 *
 * Declaratively create application
 * @example
 * <e-app-1></e-app-1>
 *
 * @extends {App}
 */
import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import style from './app1.css';
import { Dropdown } from '@eui/base';
import { TextField } from '@eui/base';
import { Datepicker } from '@eui/base';
import { Button } from '@eui/base';
import { RadioButton } from '@eui/base';

// import whatwg-fetch
import 'whatwg-fetch';

import JsonDataTable from "../../../components/json-data-table/src/JsonDataTable.js";
import NoDep from "../../../components/no-dep/src/NoDep.js";
import CatSearch from "../../../components/cat-search/src/CatSearch.js";
import PostSearch from "../../../components/post-search/src/PostSearch.js";
import DataViz from "../../../components/data-viz/src/DataViz.js";







let data = null;

const entryMap = new Map();
const searchMap = new Map();

@definition('e-app-1', {
  style,
  props: {
    response: { attribute: false },
//    jsonResponse: { attribute: true, type: String, default: 'Hello World' },
  },
})
export default class App1 extends App {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

//search button
    _onButtonClicked(value){
        fetch('http://localhost:8080/microservices/ms01')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            this.jsonResponse = json.jsonResponse
            console.log(json.name)

        }.bind(this)).catch(function(ex) {
            console.log('Parsing failed', ex)
        })
        //search options selector (json)
        const microserviceSearchObj = Object.fromEntries(searchMap);
        for (const [key, value] of searchMap) {
            console.log(`${key} = ${value}`);
        }
        searchMap.clear();
    }
//entry button
     _onButtonClicked_2(value){
         const microserviceObj = Object.fromEntries(entryMap);
        for (const [key, value] of entryMap) {
          console.log(`${key} = ${value}`);
        }
        entryMap.clear();
        const idField = this.shadowRoot.querySelector('.id__text-field');
        const nameField = this.shadowRoot.querySelector('.name__text-field');
          fetch('http://localhost:8080/ms/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(microserviceObj)
          })
          console.log.JSON.stringify(microserviceObj);
       }
//search button(NO DEPENDENCIES)
     _onButtonClicked_3(value){
        console.log("Services with no dependencies");
     }


  /**
  * Render the <e-app-1> app. This function is called each time a
  * prop changes.
  */
  render() {
    const { EUI } = window;
    return html`
    <h1> Microservices Management Tool </h1>
    <br>
    <li><e-post-search><\e-post-search>
    <br>
    <br>
    <li><e-json-data-table></e-json-data-table>
    <br>
    <br>
    <li><e-cat-search><\e-cat-search>
    <br>
    <br>
    <li><e-data-viz></e-data-viz>
    <br>
    <br>
    <li><e-no-dep><\e-no-dep>    `;
  }
}

/**
 * Register the component as e-app-1.
 * Registration can be done at a later time and with a different name
 * Uncomment the below line to register the App if used outside the container
 */
// App1.register();
