import type { AcvIconProps } from './icon.ts';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Icon from './icon.vue';

describe('test Icon component', () => {
  it('default props', () => {
    const wrapper = mount(Icon);
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "animateOnHover": false,
        "animation": undefined,
        "animationSpeed": undefined,
        "color": undefined,
        "disabled": false,
        "fill": undefined,
        "flip": undefined,
        "icon": undefined,
        "inverse": false,
        "scale": undefined,
        "size": "16",
        "stateColor": undefined,
        "stateIcon": undefined,
        "title": undefined,
      }
    `);
  });

  it('pass props', () => {
    const wrapper = mount(Icon, {
      props: {
        title: 'test',
      } as AcvIconProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "animateOnHover": false,
        "animation": undefined,
        "animationSpeed": undefined,
        "color": undefined,
        "disabled": false,
        "fill": undefined,
        "flip": undefined,
        "icon": undefined,
        "inverse": false,
        "scale": undefined,
        "size": "16",
        "stateColor": undefined,
        "stateIcon": undefined,
        "title": "test",
      }
    `);
  });

  it('renders', () => {
    const wrapper = mount(Icon);
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<i data-v-c834062e="" class="acv-custom-icon size-16" role="presentation" style="--c834062e-fillColor: currentColor; --c834062e-fillStateColor: currentColor;">
        <!--v-if-->
        <!--v-if-->
      </i>"
    `);
  });

  it('create svg icon with state', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'i-notifications-with-state-d-o--16',
        state: 'i-state-alert-d--16'
      }
    });
    const iconElm = wrapper.element;
    // expect(wrapper.vm.iconPath.includes('#mo-notifications-with-state-d-o--16')).toBe(true);
    // expect(wrapper.vm.statePath.includes('#mo-state-alert-d--16')).toBe(true);
    expect(iconElm.classList).toMatchInlineSnapshot(`
      DOMTokenList {
        "0": "acv-custom-icon",
        "1": "size-16",
      }
    `);
  });
});
