/**
 * Component DataViz is defined as
 * `<e-data-viz>`
 *
 * Imperatively create component
 * @example
 * let component = new DataViz();
 *
 * Declaratively create component
 * @example
 * <e-data-viz></e-data-viz>
 *
 * @extends {LitComponent}
 */
import {definition} from '@eui/component';
import {LitComponent, html} from '@eui/lit-component';
import style from './dataViz.css';
import '@eui/table';
import * as d3 from "d3";
// import {howto} from "@d3/example-components";
//import {Swatches} from "@d3/color-legend";


/**
 *
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition('e-data-viz', {
    style, home: 'data-viz', props: {
        searchItems: {type: JSON, default: []},
        propOne: {attribute: true, type: Boolean}, propTwo: {attribute: true, type: String, default: 'Hello World'},
    },
})
export default class DataViz extends LitComponent {
    /**
     * Render the <e-data-viz> component. This function is called each time a
     * prop changes.
     */
    columnsCheck = [{title: 'Dependencies', attribute: 'col1'}, {
        title: 'lead engineer name ',
        attribute: 'col2'
    }, {title: 'lead engineer contact details', attribute: 'col3'},

    ];

    dataCheck = [];


    addr() {
        let dependenciesArray = [];

        const dependenciesField = this.shadowRoot.querySelector('.dependencies__text-field');

        fetch('http://localhost:8080/ms/name/' + dependenciesField.value)
            //     fetch('http://localhost:8080/ms/name/ms29' )
            .then(function (response) {
                return response.json()

            }).then(function (json) {

            this.searchItems = json

            dependenciesArray = this.searchItems.dependencies

            for (let i = 0; i < dependenciesArray.length; i++) {
                // console.log(dependenciesArray[i])//working

                fetch('http://localhost:8080/ms/name/' + dependenciesArray[i])
                    .then(function (response) {
                        return response.json()

                    }).then(function (json) {
                    const rowToAdd = {col1: dependenciesArray[i], col2: json.engineer.name, col3: json.engineer.email};
                    tab2.data = [...tab2.data, rowToAdd];
                    console.log(json.engineer.name)
                }.bind(this)).catch(function (ex) {
                    console.log('Parsing failed', ex)
                })
            }

        }
            .bind(this)).catch(function (ex) {
            console.log('Parsing failed', ex)
        })


        // find the table Element in the DOM...
        const tableElement = document.querySelector('eui-table-v0');
        const tab2 = this.shadowRoot.querySelector('.table__name');

        // console.log(tab2)
// this is the row to add


// add the new row by using the immutable pattern.


    }


    render() {


        return html`
            <h1>Find details of dependent Microservices</h1>
            <br><eui-base-v0-text-field
                    class="dependencies__text-field"
                    placeholder="Enter Name"
                    prefix="Enter Name :"
                    >
            </eui-base-v0-text-field><br>
            <br><eui-base-v0-button primary @click="${() => this.addr()}">search dependencies</eui-base-v0-button>
            <br>
            <p><\p>
            <eui-table-v0
                    class="table__name"
                    .columns=${(this.columnsCheck)}
                    .data=${this.dataCheck}
                    resizable
                    border
                    striped
            >
            </eui-table-v0>
            <br>
        `;
    }
}

/**
 * Register the component as e-data-viz.
 * Registration can be done at a later time and with a different name
 */
DataViz.register();
