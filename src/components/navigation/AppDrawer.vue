<template>
  <div id="app-drawer" class="py-4" :class="{ collapsible: isCollapsed }">
    <ul>
      <li>
        <!-- <img
          role="button"
          @click="collapseAppDrawer"
          class="menu-icon"
          src="@/assets/img/drawer.svg"
          alt=""
        /> -->
        <img class="menu-icon" src="@/assets/img/logo.png" width="200" alt="">
      </li>
      <li v-for="item in menu" :key="item.id">
        <div class="menu-item">
          <span
            class="menu-item-link"
            role="button"
            @click="item.hasChildren ? openSubMenu(item) : goToLink(item)"
            :class="{ 'active-link': item.parent === routeParent }"
          >
            <div class="d-flex align-items-center" style="gap: 10px">
              <i-icon
                :icon="item.icon"
                v-if="item.icon"
                class="menu-item-icon"
              />
              <span :class="item.header ? 'menu-title-header' : 'menu-title'">
                {{ item.title }}
              </span>
            </div>
            <span v-if="item.hasChildren">
              <i-icon
                :icon="
                  subMenu === item.id ? 'prime:angle-down' : 'prime:angle-right'
                "
                width="30px"
              />
            </span>
          </span>
          <div class="sub-menu" v-if="subMenu === item.id">
            <span
              role="button"
              class="sub-menu-items"
              v-for="subMenu in item.children"
              :key="subMenu.id"
              @click="$router.push(subMenu.url)"
              :class="{ 'active-sub-menu': subMenu.subItem === routeName }"
            >
              <i-icon :icon="subMenu.icon" class="menu-item-icon" />
              <span class="sub-menu-title"> {{ subMenu.title }} </span>
            </span>
          </div>
        </div>
      </li>

      <!-- <hr class="bg-white" /> -->
    </ul>
  </div>
</template>

<script>
import menu from "@/api/menu";
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      menu,
      subMenu: null,
    };
  },
  methods: {
    goToLink(item) {
      this.$router.push(item.url);
    },
    openSubMenu(item) {
      this.subMenu = this.subMenu === item.id ? null : item.id;
    },

    collapseAppDrawer() {
      this.$store.dispatch("drawer/setCollapseState");
    },
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    routeParent() {
      return this.$route.meta.parent;
    },
    ...mapState("drawer", {
      isCollapsed: (state) => state.collapsed,
    }),
  },
};
</script>

<style></style>
