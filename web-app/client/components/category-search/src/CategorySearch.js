/**
 * Component CategorySearch is defined as
 * `<e-category-search>`
 *
 * Imperatively create component
 * @example
 * let component = new CategorySearch();
 *
 * Declaratively create component
 * @example
 * <e-category-search></e-category-search>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import style from './categorySearch.css';

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition('e-category-search', {
  style,
  home: 'category-search',
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})
export default class CategorySearch extends LitComponent {
  /**
   * Render the <e-category-search> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<h1>Your component markup goes here</h1>
    <h2>props</h2>
      prop-one: ${this.propOne}
    <p>
      prop-two: ${this.propTwo}`;
  }
}

/**
 * Register the component as e-category-search.
 * Registration can be done at a later time and with a different name
 */
CategorySearch.register();
