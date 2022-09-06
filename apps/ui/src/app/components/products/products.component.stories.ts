import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProductsComponent } from './products.component';

export default {
  title: 'ProductsComponent',
  component: ProductsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ProductsComponent>;

const Template: Story<ProductsComponent> = (args: ProductsComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
