<template>
  <n-layout
    position="absolute"
    style="min-height: 100vh; position: relative; overflow: hidden"
  >
    <n-layout has-sider position="absolute" style="top: 0px; bottom: 48px">
      <n-layout-sider
        v-if="screenSize !== 'sm'"
        bordered
        style="height: 100%; background-color: #f0f2f5"
        collapse-mode="width"
        v-model:collapsed="collapsed"
        :width="280"
        :native-scrollbar="false"
        :inverted="inverted"
        :position="screenSize === 'sm' ? 'absolute' : 'static'"
        :collapsed-width="screenSize === 'sm' ? 0 : 64"
      >
        <n-menu
          :inverted="inverted"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :default-value="currentKey"
        />
      </n-layout-sider>

      <n-drawer
        v-if="screenSize === 'sm'"
        v-model:show="active"
        :width="280"
        position="absolute"
        style="top: 0px; bottom: 0px"
        placement="left"
      >
        <n-menu
          :inverted="inverted"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          v-model="currentKey"
        />
      </n-drawer>

      <n-layout>
        <n-layout-header
          bordered
          style="
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 8px;
          "
        >
          <n-button v-if="screenSize === 'sm'" @click="active = !active">
            <LnxIcon icon size="24" icon-name="grid-4" />
          </n-button>
          <n-button v-else quaternary @click="collapsed = !collapsed">
            <LnxIcon size="24" :icon-name="collapsed ? 'grid-9' : 'grid-4'" />
          </n-button>
        </n-layout-header>
        <n-layout-content>
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
    <n-layout-footer
      bordered
      position="absolute"
      style="
        height: 48px;
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 0 16px;
      "
    >
      v1.0
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { menuItem } from "@/core/utils/menu.utils";
import type { MenuOption } from "naive-ui";
import useBreakpoints from "@/core/composable/useBreakpoints";
import LnxIcon from "@/core/components/LnxIcon.vue";

import { useRoute } from "vue-router";
const route = useRoute();
const { screenSize } = useBreakpoints();

const active = ref<boolean>(true);
const collapsed = ref<boolean>(false);
const inverted = ref(false);

const currentKey = ref<string | null>(route.name as string | null);

const menuOptions: MenuOption[] = [
  menuItem({
    label: "Dashboard",
    key: "Dashboard",
    route: "Dashboard",
    iconName: "element-equal",
  }),
  {
    label: "Administración",
    key: "administration",
    icon: renderIcon("cpu-setting"),
    children: [
      {
        type: "group",
        label: "General",
        key: "people-general",
        children: [
          menuItem({
            label: "Tipos de documentos",
            key: "DocumentType",
            route: "DocumentType",
            iconName: "tag",
          }),
          menuItem({
            label: "Tipos de estudiantes",
            key: "StudentType",
            route: "StudentType",
            iconName: "tag",
          }),
          menuItem({
            label: "Metodos de pago",
            key: "PaymentType",
            route: "PaymentType",
            iconName: "tag",
          }),
        ],
      },

      {
        type: "group",
        label: "Personas",
        key: "people",
        children: [
          menuItem({
            label: "Estudiantes",
            key: "Student",
            route: "Student",
            iconName: "personalcard",
          }),
          menuItem({
            label: "Docentes",
            route: "Teacher",
            key: "Teacher",
            iconName: "teacher",
          }),
        ],
      },
      {
        type: "group",
        label: "Académico",
        key: "academic",
        children: [
          menuItem({
            label: "Periodos académicos",
            key: "Period",
            route: "Period",
            iconName: "calendar-2",
          }),
          menuItem({
            label: "Planes de estudio",
            key: "Curriculum",
            route: "Curriculum",
            iconName: "book-1",
          }),

          menuItem({
            label: "Areas",
            route: "Area",
            key: "Area",
            iconName: "book-square",
          }),

          menuItem({
            label: "Modulos",
            key: "Module",
            route: "Module",
            iconName: "bookmark",
          }),

          menuItem({
            label: "Cursos",
            key: "Course",
            route: "Course",
            iconName: "book-saved",
          }),
          // {
          //   label: "Horarios",
          //   key: "schedules",
          //   icon: renderIcon("calendar"),
          // },
          // {
          //   label: "Grupos",
          //   key: "groups",
          //   icon: renderIcon("people"),
          // },
        ],
      },
      {
        type: "group",
        label: "Infraestructura",
        key: "infrastructure",
        children: [
          menuItem({
            label: "Laboratorios",
            route: "Laboratory",
            key: "Laboratory",
            iconName: "devices",
          }),
        ],
      },
      {
        type: "group",
        label: "Financiero",
        key: "financial",
        children: [
          menuItem({
            label: "Costos",
            key: "Price",
            route: "Price",
            iconName: "moneys",
          }),
        ],
      },
    ],
  },

  {
    label: "Matriculas",
    key: "enrollments",
    icon: renderIcon("folder"),
    children: [
      {
        label: "Matriculas nuevas",
        key: "new-enrollments",
        icon: renderIcon("folder-add"),
      },
      {
        label: "Matriculas regulares",
        key: "regular-enrollments",
        icon: renderIcon("folder-favorite"),
      },
      {
        label: "Matriculas virtuales",
        key: "virtual-enrollments",
        icon: renderIcon("folder-cloud"),
      },
      {
        label: "Convalidaciones",
        key: "validations",
        icon: renderIcon("folder-connection"),
      },
    ],
  },

  {
    label: "Notas",
    key: "grades",
    icon: renderIcon("archive-book"),
    children: [
      {
        label: "Ingreso de notas",
        key: "grades-entry",
        icon: renderIcon("archive-add"),
      },
      {
        label: "Rectificación de notas",
        key: "grades-rectification",
        icon: renderIcon("archive-slash"),
      },
    ],
  },

  {
    label: "Carga de académica",
    key: "academic-load",
    icon: renderIcon("archive"),
    children: [
      menuItem({
        label: "Apertura de grupos",
        key: "Group",
        route: "Group",
        iconName: "calendar-add",
      }),
    ],
  },
  {
    label: "Reportes",
    key: "reports",
    icon: renderIcon("chart-21"),
    children: [
      {
        label: "Reporte de matriculas",
        key: "enrollments-report",
        icon: renderIcon("chart-21"),
      },
      {
        label: "Reporte de notas",
        key: "grades-report",
        icon: renderIcon("chart-21"),
      },
      {
        label: "Reporte de carga académica",
        key: "academic-load-report",
        icon: renderIcon("chart-21"),
      },
    ],
  },

  {
    label: "Seguridad",
    key: "security",
    icon: renderIcon("shield"),
    children: [
      {
        type: "group",
        label: "Administradores",
        key: "security-admins",
        children: [
          {
            label: "Usuarios Administradores",
            key: "security-admins-users",
            icon: renderIcon("security-user"),
          },
          {
            label: "Roles Administradores",
            key: "security-admins-roles",
            icon: renderIcon("key-square"),
          },
        ],
      },
      {
        type: "group",
        label: "Docentes",
        key: "security-teachers",
        children: [
          {
            label: "Usuarios Docentes",
            key: "security-teachers-users",
            icon: renderIcon("security-user"),
          },
          {
            label: "Roles Docentes",
            key: "security-teachers-roles",
            icon: renderIcon("key-square"),
          },
        ],
      },
      {
        type: "group",
        label: "Usuarios",
        key: "security-students",
        children: [
          {
            label: "Usuarios Estudiantes",
            key: "security-students-users",
            icon: renderIcon("security-user"),
          },
          {
            label: "Roles Estudiantes",
            key: "security-students-roles",
            icon: renderIcon("key-square"),
          },
        ],
      },
    ],
  },
];
</script>
