export default {
  id: 1,
  title: "Dashboard",
  description: "test dashboard",
  tree: [
    {
      component: "Block",
      settings: {
        position: "1 / 1 / 5 / 5",
      },
      childs: [
        {
          component: "Group",
          settings: {},
          childs: [
            {
              component: "Element",
              settings: {},
              childs: [
                {
                  component: "Title",
                  settings: {
                    title: "test node",
                  },
                },
                {
                  component: "Status",
                  settings: {
                    ranking: 500,
                    message: "Up",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
