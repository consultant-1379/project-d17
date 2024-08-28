/**
 * Component FindDep is defined as
 * `<e-find-dep>`
 *
 * Imperatively create component
 * @example
 * let component = new FindDep();
 *
 * Declaratively create component
 * @example
 * <e-find-dep></e-find-dep>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import style from './findDep.css';
var dependenciesArr =[];
let combined ={};
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];
var arr6 = [];
var arr7 = [];


/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition('e-find-dep', {
  style,
  home: 'find-dep',
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})
export default class FindDep extends LitComponent {
  /**
   * Render the <e-find-dep> component. This function is called each time a
   * prop changes.
   */

   _onButtonClickedSearch(){

    const searchField = this.shadowRoot.querySelector('.search__text-field');
    const dependenciesField = this.shadowRoot.querySelector('.dependencies__text-field');
    fetch('http://localhost:8080/ms/name/'+ searchField.value )
    .then(function(response) {
     return response.json()
    }).then(function(json) {
     this.searchItems = json
     console.log(json.dependencies)
     dependenciesField.value = json.dependencies
     dependenciesArr = json.dependencies;
    }.bind(this)).catch(function(ex) {
     console.log('Parsing failed', ex)
    })
    }
     _onButtonClickedSearch2(){
     console.log(dependenciesArr);
     for(let i=0;i<dependenciesArr.length;i++)
     {
                  fetch('http://localhost:8080/ms/name/'+ dependenciesArr[i] )
                  // fetch('http://localhost:8080/microservices/ms01' )
                  .then(function(response) {
                      return response.json()
                  }).then(function(json) {
                      this.searchItems = json
                      combined[i]=json;
                  }.bind(this)).catch(function(ex) {
                      console.log('Parsing failed', ex)
                  })
     }
     console.log(combined);
        }

/*
    const searchField = this.shadowRoot.querySelector('.search__text-field');
          const nameField = this.shadowRoot.querySelector('.name__text-field');
          const categoryField = this.shadowRoot.querySelector('.category__text-field');
          const engineerNameField = this.shadowRoot.querySelector('.engineer-name__text-field');
          const engineerEmailField = this.shadowRoot.querySelector('.engineer-email__text-field');
          const descriptionField = this.shadowRoot.querySelector('.description__text-field');
          const dateValueField = this.shadowRoot.querySelector('.date__text-field');
          const versionField = this.shadowRoot.querySelector('.versions__text-field');
              fetch('http://localhost:8080/ms/name/'+ searchField.value )
              // fetch('http://localhost:8080/microservices/ms01' )
              .then(function(response) {
                  return response.json()
              }).then(function(json) {
                  this.searchItems = json
                  nameField.value = json.name
                  categoryField.value = json.category
                  engineerNameField.value = json.engineer.name
                  engineerEmailField.value = json.engineer.email
                  descriptionField.value = json.description
                  dateValueField.value = json.localDateTime.slice(0,10)
                  versionField.value =  json.versions
              }.bind(this)).catch(function(ex) {
                  console.log('Parsing failed', ex)
              })


 }*/

  render(){
    return html`
    <h1>Find details of dependent Microservices</h1>
     <div>
            <eui-base-v0-text-field
                id="search-entry"
                class="search__text-field"
                name="searchName"
                placeholder="Search Name"
                prefix="Search Name : ">
             </eui-base-v0-text-field>
            <br>
            <br>
            <eui-base-v0-button primary
                @click="${() => this._onButtonClickedSearch()}">
                Enter
             </eui-base-v0-button><br>
             <br> <eui-base-v0-text-field
              id="dependencies-entry"
              class="dependencies__text-field"
              name="dependenciesName"
              placeholder="dependencies"
              prefix="Dependencies : ">
             </eui-base-v0-text-field><br>
       <\div>
       <div>
          <br>
           <eui-base-v0-button primary
            @click="${() => this._onButtonClickedSearch2()}">
             Find details of dependencies
           </eui-base-v0-button><br>
         <eui-base-v0-text-field
                        id="name-entry"
                        class="name__text-field"
                        name="nameName"
                        placeholder="Name"
                        prefix="Name : ">
                </eui-base-v0-text-field>
                <br>
                <eui-base-v0-text-field
                        id="category-entry"
                        class="category__text-field"
                        name="categoryName"
                        placeholder="Categories"
                        prefix="Category : ">
                </eui-base-v0-text-field>
                <br>
                <eui-base-v0-text-field
                        id="engineer-name-entry"
                        class="engineer-name__text-field"
                        name="engineerName"
                        placeholder="Engineer Name"
                        prefix="Engineer Name : ">
                </eui-base-v0-text-field>
                <br>
                <eui-base-v0-text-field
                        id="engineer-email-entry"
                        class="engineer-email__text-field"
                        name="engineerEmail"
                        placeholder="Engineer Email"
                        prefix="Engineer Email : ">
                </eui-base-v0-text-field>
                <br>
                <eui-base-v0-text-field
                        id="description-entry"
                        class="description__text-field"
                        name="descriptionName"
                        placeholder="Description"
                        prefix="Description : ">
                </eui-base-v0-text-field>
                <br>
                <eui-base-v0-text-field
                        id="date-entry"
                        class="date__text-field"
                        name="dateName"
                        placeholder="Date"
                        prefix="Date : ">
                </eui-base-v0-text-field>
                <br>
                <eui-base-v0-text-field
                        id="versions-entry"
                        class="versions__text-field"
                        name="versionName"
                        placeholder="Version"
                        prefix="Version : ">
                </eui-base-v0-text-field>
                <br>
                 <eui-base-v0-text-field
                                id="dependencies-entry"
                                class="dependenciess__text-field"
                                name="dependenciesName"
                                placeholder="dependencies"
                                prefix="Dependencies : ">
                 </eui-base-v0-text-field>
                 <br>
                <br>
             <\div>
   `;
  }
}

/**
 * Register the component as e-find-dep.
 * Registration can be done at a later time and with a different name
 */
FindDep.register();
