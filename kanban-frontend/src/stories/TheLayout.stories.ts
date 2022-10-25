import TheLayout from "../layouts/TheLayout.vue";

export default {
  Title: "TheLayout",
  component: TheLayout,
};

const Template = (args: any) => ({
  components: { TheLayout },
  setup() {
    return { args };
  },
  template: `<TheLayout />`,
});

export const MainLayout = Template.bind({});
TheLayout.args = {};
