<template>
  <NIcon>
    <svg>
      <use :xlink:href="`/resources/icons/sprite.svg#icon-${iconName}`"></use>
    </svg>
  </NIcon>
</template>
<script setup lang="ts">
import { type IconName } from "@/core/constans/icons.constants";
defineProps<{
  iconName: IconName;
}>();
</script>
