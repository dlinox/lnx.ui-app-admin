<template>
  <div class="p-4">
    <n-row :gutter="[16, 16]">
      <n-col :span="screenSize == 'sm' ? 24 : 8">
        <EnrollmentsPeriodWidget />
      </n-col>
      <n-col :span="screenSize == 'sm' ? 24 : 8">
        <AllStudentWidget />
      </n-col>
      <n-col :span="screenSize == 'sm' ? 24 : 8">
        <AllTeacherWidget />
      </n-col>
      <n-col :span="24">
        <AcademicWidget />
      </n-col>

      <n-col :span="screenSize == 'sm' || screenSize == 'md' ? 24 : 12">
        <EnrolledStudentsChart />
      </n-col>
      <n-col :span="screenSize == 'sm' || screenSize == 'md' ? 24 : 12">
        <GroupsEnabledChart />
      </n-col>
    </n-row>
  </div>
</template>

<script setup lang="ts">
import EnrollmentsPeriodWidget from "@/app/modules/dashboard/components/widgets/EnrollmentsPeriodWidget.vue";
import AllStudentWidget from "@/app/modules/dashboard/components/widgets/AllStudentWidget.vue";
import AllTeacherWidget from "@/app/modules/dashboard/components/widgets/AllTeacherWidget.vue";
import AcademicWidget from "@/app/modules/dashboard/components/widgets/AcademicWidget.vue";
import EnrolledStudentsChart from "@/app/modules/dashboard/components/charts/EnrolledStudentsChart.vue";
import GroupsEnabledChart from "@/app/modules/dashboard/components/charts/GroupsEnabledChart.vue";

import useBreakpoints from "@/core/composables/useBreakpoints";

const { screenSize } = useBreakpoints();
</script>
