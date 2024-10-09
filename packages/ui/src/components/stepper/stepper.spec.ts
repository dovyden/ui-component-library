import type { AcvStepperProps } from './stepper.ts';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Stepper from './stepper.vue';

describe('test stepper component', () => {
  it('default props', () => {
    const wrapper = mount(Stepper);
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "title": undefined,
      }
    `);
  });

  it('pass props', () => {
    const wrapper = mount(Stepper, {
      props: {
        title: 'test',
      } as AcvStepperProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "title": "test",
      }
    `);
  });

  it('renders', () => {
    const wrapper = mount(Stepper);
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div data-v-179b3493="" class="acv-stepper"></div>"`);
  });
});
