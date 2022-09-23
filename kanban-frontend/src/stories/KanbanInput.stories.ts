import KanbanInputText from "../components/KanbanInputText.vue";

export default {
  Title: "KanbanInputText",
  component: KanbanInputText,
};

const Template = (args: any) => ({
  components: { KanbanInputText },
  setup() {
    return { args };
  },
  template: '<KanbanInputText class="max-w-[350px]" v-bind="args" />',
});

export const InputEmpty = Template.bind({});
InputEmpty.args = {
  label: "This is empty",
  placeholder: "Write something",
};

export const Input = Template.bind({});
Input.args = {
  label: "This is input",
  placeholder: "Write something",
  modelValue: "This is what it looks filled",
};

export const InputError = Template.bind({});
InputError.args = {
  label: "This is input",
  placeholder: "Write something",
  error: "Can't be empty",
};
