import KanbanModalCreateUpdateTask from "../components/modals/KanbanModalCreateUpdateTask.vue";
import KanbanModal from "../components/modals/KanbanModal.vue";

export default {
  Title: "KanbanTask",
  component: KanbanModalCreateUpdateTask,
};

const Template = (args: any) => ({
  components: { KanbanModal, KanbanModalCreateUpdateTask },
  setup() {
    const isOpen = true;
    return {
      isOpen,
    };
  },
  template: `
    <kanban-modal :model-value="isOpen">
      <KanbanModalCreateUpdateTask v-bind="args" />
    </kanban-modal>
  `,
});

export const CreateTask = Template.bind({});
CreateTask.args = {
  type: "create",
};
