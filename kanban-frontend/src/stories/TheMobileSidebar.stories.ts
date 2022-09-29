import TheMobileSidebar from "../components/TheMobileSidebar.vue";

export default {
  Title: "MobileNav",
  component: TheMobileSidebar,
};

const Template = (args: any) => ({
  components: { TheMobileSidebar },
  setup() {
    return { args };
  },
  template: `<TheMobileSidebar />`,
});

export const MobileNavigation = Template.bind({});
MobileNavigation.args = {};
