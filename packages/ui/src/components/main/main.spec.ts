import type { AcvMainProps } from './main.ts';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Main from './main.vue';

describe('test Main component', () => {
  it('default props', () => {
    const wrapper = mount(Main);
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "color": undefined,
      }
    `);
  });

  it('pass props', () => {
    const wrapper = mount(Main, {
      props: {
        title: 'test',
      } as AcvMainProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "color": undefined,
      }
    `);
  });

  it('renders', () => {
    const wrapper = mount(Main);
    expect(wrapper.html()).toMatchInlineSnapshot(`"<main data-v-0f437ec6="" class="acv-main"></main>"`);
  });
});
