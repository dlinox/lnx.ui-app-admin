<template>

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 10px; margin-top: 20px; margin-bottom: 20px;">
  
    <div v-for="icon in iconNames" :key="icon" class="icon" style="font-size: 30px; border: 1px solid #000; padding: 10px; ">
        <span>{{icon}}</span>
        <br>
        <LnxIcon :iconName="icon" ></LnxIcon>
    </div>
</div>

</template>
<script setup lang="ts">
import LnxIcon from '@/core/components/LnxIcon.vue';
import {iconNames} from '@/core/constans/icons.constants'
</script>
