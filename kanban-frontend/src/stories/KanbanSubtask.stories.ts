import KanbanSubtask from "../components/KanbanSubtask.vue";

export default {
  Title: "KanbanSubtask",
  component: KanbanSubtask,
};

const Template = (args: any) => ({
  components: { KanbanSubtask },
  setup() {
    return { args };
  },
  template: '<KanbanSubtask class="max-w-[350px]" v-bind="args"/>',
});

export const ActiveSubtask = Template.bind({});
// @ts-ignore
ActiveSubtask.args = {
  "is-checked": false,
  text: "TODO subtask",
};

export const FinishedSubtask = Template.bind({});
// @ts-ignore
FinishedSubtask.args = {
  isChecked: true,
  text: "DONE subtask",
};
