import { defineComponent } from 'vue'

import { useProps } from '../../utils/props.ts'
import { strongProps } from './props.ts'
import Text from './text.tsx'

export default defineComponent({
  name: 'Strong',
  props: strongProps,
  emits: [],
  setup(_props, { slots }) {
    const props = useProps('strong', _props, {
      type: 'default',
      delete: false,
      italic: false,
      underline: false,
      mark: false,
      disabled: false,
      keyboard: false,
      thin: false,
      reversed: false,
    })

    return () => (
      <Text {...props} tag="strong" strong>
        {slots.default?.()}
      </Text>
    )
  },
})
