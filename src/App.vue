<template>
  <n-config-provider
    :locale="esAR"
    :date-locale="dateEsAR"
    :theme-overrides="themeOverrides"
  >
    <n-message-provider>
      <n-dialog-provider>
        <RouterView />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { esAR, dateEsAR } from "naive-ui";
import { NConfigProvider } from "naive-ui";

const themeOverrides = {
  common: {
    primaryColor: "#040466FF",
    primaryColorHover: "#040466AA",
    primaryColorPressed: "#040466FF",
    primaryColorSuppl: "#040466CC",
    errorColor: "#F93B3B",
  },
};
</script>
<style>
.n-menu-item-content {
  padding-left: 16px !important;
}

.n-submenu-children .n-menu-item-content {
  margin-left: 32px !important;
}

.n-form-item-feedback__line {
  color: rgb(249, 59, 59);
  font-size: 12px;
}

.n-form-item-feedback-wrapper {
  height: auto;
  min-height: 16px !important;
}
</style>
