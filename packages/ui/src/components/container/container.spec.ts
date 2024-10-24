import type { ContainerProps } from 'postcss';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Container from './container.vue';

describe('test Container component', () => {
  it('default props', () => {
    const wrapper = mount(Container);
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "backgroundColor": undefined,
        "borderColor": undefined,
        "color": "white",
        "direction": "vertical",
        "fluid": false,
        "lg": false,
        "md": false,
        "sm": false,
        "textColor": undefined,
        "xl": false,
        "xs": false,
        "xxl": false,
      }
    `);
  });

  it('pass props', () => {
    const wrapper = mount(Container, {
      props: {
        title: 'test',
      } as ContainerProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "backgroundColor": undefined,
        "borderColor": undefined,
        "color": "white",
        "direction": "vertical",
        "fluid": false,
        "lg": false,
        "md": false,
        "sm": false,
        "textColor": undefined,
        "xl": false,
        "xs": false,
        "xxl": false,
      }
    `);
  });

  it('renders', () => {
    const wrapper = mount(Container);
    expect(wrapper.html()).toMatchInlineSnapshot(`"<section data-v-196a04e5="" class="acv-container acv-container--vertical acv-bg-white"></section>"`);
  });

  describe('direction', () => {
    it('default', () => {
      const wrapper = mount(Container, {
        props: {} as ContainerProps,
      });
      expect(wrapper.classes()).toContain('acv-container--vertical');
    });

    it('vertical', () => {
      const wrapper = mount(Container, {
        props: {
          direction: 'vertical',
        } as ContainerProps,
      });
      expect(wrapper.classes()).toContain('acv-container--vertical');
    });

    it('horizontal', () => {
      const wrapper = mount(Container, {
        props: {
          direction: 'horizontal',
        } as ContainerProps,
      });
      expect(wrapper.classes()).toContain('acv-container--horizontal');
    });
  });
});
