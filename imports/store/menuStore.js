// import { callPromise } from './callPromise';
import { create } from 'zustand';

const menuJson = {
  "id": "group-dashboard",
  "title": "dashboard",
  "type": "group",
  "icon": "dashboard",
  "children": [
    {
      "id": "dashboard",
      "title": "dashboard",
      "type": "collapse",
      "icon": "dashboard",
      "children": [
        {
          "id": "default",
          "title": "default",
          "type": "item",
          "url": "/dashboard/default",
          "breadcrumbs": false
        },
        {
          "id": "analytics",
          "title": "analytics",
          "type": "item",
          "url": "/dashboard/analytics",
          "breadcrumbs": false
        }
      ]
    },
    {
      "id": "components",
      "title": "components",
      "type": "item",
      "url": "/components-overview/buttons",
      "icon": "components",
      "target": true,
      "chip": {
        "label": "new",
        "color": "primary",
        "size": "small",
        "variant": "combined"
      }
    }
  ]
};

export const menuStore = (set) => ({
  menu: menuJson,
  menuLoading: false,
  menuError: null,
  menuValidating: false,
  menuEmpty: !menuJson.children.length,
  menuMaster: {
    isDashboardDrawerOpened: false,
    isComponentDrawerOpened: true,
  },
  menuMasterLoading: false,

  // fetchJsonData: async (fileName) => {
  //   set({ [`${fileName}Loading`]: true, menuValidating: true });
  //   try {
  //     const data = await callPromise('getJsonData', fileName);
  //     set({
  //       [fileName]: data,
  //       [`${fileName}Loading`]: false,
  //       [`${fileName}Empty`]: !data.length,
  //       menuValidating: false
  //     });
  //   } catch (error) {
  //     set({
  //       [`${fileName}Error`]: error,
  //       [`${fileName}Loading`]: false,
  //       menuValidating: false
  //     });
  //   }
  // },

  // fetchMenu: async () => {
  //   await get().fetchJsonData('menu');
  // },
  //
  // fetchMenuMaster: async () => {
  //   await get().fetchJsonData('menuMaster');
  // },

  // toggleDashboardDrawer: (isOpen) => set({ isDashboardDrawerOpened: isOpen }),
  // toggleComponentDrawer: (isOpen) => set({ isComponentDrawerOpened: isOpen }),
  toggleDashboardDrawer: (isOpen) => set((state) => ({
    menuMaster: { ...state.menuMaster, isDashboardDrawerOpened: isOpen }
  })),
  toggleComponentDrawer: (isOpen) => set((state) => ({
    menuMaster: { ...state.menuMaster, isComponentDrawerOpened: isOpen }
  })),
});

export default create(menuStore);