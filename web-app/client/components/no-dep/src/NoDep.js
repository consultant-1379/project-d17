/**
 * Component NoDep is defined as
 * `<e-no-dep>`
 *
 * Imperatively create component
 * @example
 * let component = new NoDep();
 *
 * Declaratively create component
 * @example
 * <e-no-dep></e-no-dep>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import style from './noDep.css';

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition('e-no-dep', {
  style,
  home: 'no-dep',
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})
export default class NoDep extends LitComponent {
  /**
   * Render the <e-no-dep> component. This function is called each time a
   * prop changes.
   */
    _onButtonClicked(){

         const nameField = this.shadowRoot.querySelector('.name__text-field');

             fetch('http://localhost:8080/ms/no-dependencies' )

             .then(function(response) {
                 return response.json()
             }).then(function(json) {
                 this.searchItems = json
                    var arr=[];
                 for(let i = 0; i < json.length; i++) {
                     let obj = json[i];
                     arr.push(obj.name);
                 }
                 console.log(arr);
                 var strarr = arr.map(String);
                 nameField.value = strarr;
             }.bind(this)).catch(function(ex) {
                 console.log('Parsing failed', ex)
             })
          }

  render() {
    return html`<h1>Search microservices with no dependencies are:</h1>
    <br><eui-base-v0-button primary
    @click="${() => this._onButtonClicked()}">
    List all microservices with no dependencies
    </eui-base-v0-button><br>
   <br> <eui-base-v0-text-field
                    id="name-entry"
                    class="name__text-field"
                    name="nameName"
                    placeholder="Name"
                    prefix="Name : ">
    </eui-base-v0-text-field><br>

    `;
  }
}

/**
 * Register the component as e-no-dep.
 * Registration can be done at a later time and with a different name
 */
NoDep.register();
