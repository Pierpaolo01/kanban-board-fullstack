import KanbanDropdown from "../components/KanbanDropdown.vue";
import { ref } from "vue";

export default {
  Title: "KanbanButton",
  component: KanbanDropdown,
};

const Template = (args: any) => ({
  components: { KanbanDropdown },
  setup() {
    const selectedOption = ref("Option 1");
    return { args, selectedOption };
  },
  template: `
    <kanban-dropdown class="max-w-[350px]" :selected-text="selectedOption" v-bind="args">
    <template #dropdown-options>
      <ul>
        <li @click="selectedOption = 'Option 1'">Option 1</li>
        <li @click="selectedOption = 'Option 2'">Option 2</li>
        <li @click="selectedOption = 'Option 3'">Option 3</li>
      </ul>
    </template>
    </kanban-dropdown>
  `,
});

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: "Kanban dropdown",
};
