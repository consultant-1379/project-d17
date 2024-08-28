/**
 * Component CatSearch is defined as
 * `<e-cat-search>`
 *
 * Imperatively create component
 * @example
 * let component = new CatSearch();
 *
 * Declaratively create component
 * @example
 * <e-cat-search></e-cat-search>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import style from './catSearch.css';
import 'whatwg-fetch';
import { TextField } from '@eui/base';
import { Button } from '@eui/base';


/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition('e-cat-search', {
  style,
  home: 'cat-search',
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})
export default class CatSearch extends LitComponent {
  /**
   * Render the <e-cat-search> component. This function is called each time a
   * prop changes.
   */

    _onButtonClicked(){
         const searchField = this.shadowRoot.querySelector('.search__text-field');
         const nameField = this.shadowRoot.querySelector('.name__text-field');

             fetch('http://localhost:8080/ms/category/'+ searchField.value.toUpperCase() )
             // fetch('http://localhost:8080/microservices/ms01' )
             .then(function(response) {
                 return response.json()
             }).then(function(json) {
                 this.searchItems = json
                  var arr=[];
                  for(let i = 0; i < json.length; i++) {
/*<<<<<<< HEAD
                                      let obj = json[i];
                                      arr.push(obj.name);
                                  }
                                  console.log(arr);
                                  var strarry = arr.map(String);
                                  nameField.value = strarry;
=======*/
                    let obj = json[i];
                    arr.push(obj.name);
                   }
                  console.log(arr);
                  var strarry = arr.map(String);
                nameField.value = strarry;

             }.bind(this)).catch(function(ex) {
                 console.log('Parsing failed', ex)
             })
          }

  render() {

    return html`<h1>Search Microservices by category:</h1>


        <br>
        <eui-base-v0-text-field
        id="search-entry"
        class="search__text-field"
        name="searchName"
        placeholder="Search Name"
        prefix="Search Category : ">
        </eui-base-v0-text-field><br>

        <br><eui-base-v0-button primary

        @click="${() => this._onButtonClicked()}">
        Search
        </eui-base-v0-button> <br>
        <br><eui-base-v0-text-field
        id="name-entry"
        class="name__text-field"
        name="nameName"
        placeholder="Name"
        prefix="Name : ">
        </eui-base-v0-text-field><br>
         <br>`;
  }
}

/**
 * Register the component as e-cat-search.
 * Registration can be done at a later time and with a different name
 */
CatSearch.register();
