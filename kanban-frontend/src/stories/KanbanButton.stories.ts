import KanbanButton from "../components/KanbanButton.vue";

export default {
  Title: "KanbanButton",
  component: KanbanButton,
  argTypes: {
    variant: {
      options: ["primary-large", "primary", "secondary", "destructive"],
      control: { type: "radio" },
    },
  },
};

const Template = (args: any) => ({
  components: { KanbanButton },
  setup() {
    return { args };
  },
  template: '<KanbanButton v-bind="args" />',
});

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  text: "Kanban Button Variants",
  variant: "primary-large",
};
