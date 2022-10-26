import KanbanModalCreateBoard from "../components/modals/KanbanModalBoardCreate.vue";
import KanbanModal from "../components/modals/KanbanModal.vue";

export default {
  title: "Create board modal",
  component: KanbanModalCreateBoard,
};

const Template = () => ({
  components: { KanbanModal, KanbanModalCreateBoard },
  setup() {
    const isOpen = true;
    return {
      isOpen,
    };
  },
  template: `<kanban-modal v-model="isOpen"> <KanbanModalCreateBoard /> </kanban-modal>`,
});

export const CreateBoard = Template.bind({});
// @ts-ignore
CreateBoard.args = {};
