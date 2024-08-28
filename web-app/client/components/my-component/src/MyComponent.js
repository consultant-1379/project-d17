/**
 * Component MyComponent is defined as
 * `<e-my-component>`
 *
 * Imperatively create component
 * @example
 * let component = new MyComponent();
 *
 * Declaratively create component
 * @example
 * <e-my-component></e-my-component>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import style from './myComponent.css';

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition('e-my-component', {
  style,
  home: 'my-component',
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})
export default class MyComponent extends LitComponent {
  /**
   * Render the <e-my-component> component. This function is called each time a
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
 * Register the component as e-my-component.
 * Registration can be done at a later time and with a different name
 */
MyComponent.register();
