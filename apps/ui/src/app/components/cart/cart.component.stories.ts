import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CartComponent } from './cart.component';

export default {
  title: 'CartComponent',
  component: CartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CartComponent>;

const Template: Story<CartComponent> = (args: CartComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
