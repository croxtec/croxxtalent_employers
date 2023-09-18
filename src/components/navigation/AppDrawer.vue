<template>
  <div id="app-drawer" class="py-4">
    <img class="menu-icon mb-4" src="@/assets/img/logo.png" width="200" alt="">
    <ul class="">
      <li v-for="item in menu" :key="item.id">
        <div class="menu-item">
          <span
            class="menu-item-link"
            role="button"
            @click="item.hasChildren ? openSubMenu(item) : goToLink(item)"
            :class="{ 'active-link': item.parent === routeParent }"
          >
            <div class="main-link d-flex align-items-center" style="gap: 10px">
              <i-icon
                :icon="item.icon"
                v-if="item.icon"
                class="menu-item-icon"
              />
              <span :class="item.header ? 'menu-title-header' : 'menu-title'">
                {{ item.title }}
              </span>
              <span class="coming-soon" v-if="item.coming_soon">coming soon</span>
            </div>
            <!-- <span v-if="item.hasChildren">
              <i-icon
                :icon="
                  subMenu === item.id ? 'prime:angle-down' : 'prime:angle-right'
                "
                width="30px"
              />
            </span> -->
          </span>
          <hr class="bg-white" v-if="item.lineAfter"/>
          <!-- <div class="sub-menu" v-if="subMenu === item.id">
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
          </div> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import menu from "@/api/menu";
// import { mapState } from "vuex";
export default {
  data: () => {
    return {
      menu,
      subMenu: null,
    };
  },
  methods: {
    goToLink(item) {
      if(!item.coming_soon) {
        this.$router.push(item.url);
      }
      else {
        this.$router.push('/coming-soon')
      }
    },
    openSubMenu(item) {
      this.subMenu = this.subMenu === item.id ? null : item.id;
    },

    collapseAppDrawer() {
      // this.$store.dispatch("drawer/setCollapseState");
    },
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    routeParent() {
      return this.$route.meta.parent;
    },
    // ...mapState("drawer", {
    //   isCollapsed: (state) => state.collapsed,
    // }),
  },
};
</script>

<style>
  .coming-soon {
    font-size: 8px;
    color: #ff0000;
    background: #ff000023;
    padding: 3px;
    border-radius: 3px;
  }
</style>
