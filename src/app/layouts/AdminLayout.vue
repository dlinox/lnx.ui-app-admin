<template>
  <n-layout
    position="absolute"
    style="min-height: 100dvh; position: relative; overflow: hidden"
  >
    <n-layout has-sider position="absolute" style="top: 0px; bottom: 32.85px">
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
          class="mb-26"
        />
        <div
          class="absolute bottom-0 start-0 end-0 border-t border-gray-300 backdrop-blur-sm z-10 border-solid"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuFooterOptions"
          />
        </div>
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

          <n-dropdown trigger="hover" :options="profileOptions">
            <n-button>
              <LnxIcon size="24" icon-name="profile" />
            </n-button>
          </n-dropdown>
        </n-layout-header>
        <n-layout-content>
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
    <n-layout-footer
      bordered
      position="absolute"
      class="px-3 py-2 text-end text-xs"
    >
      <span>
        © {{ new Date().getFullYear() }} Instituto de Informática - UNAP. v1.0
      </span>
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { menuItem } from "@/core/utils/menu.utils";
import { type MenuOption } from "naive-ui";
import useBreakpoints from "@/core/composables/useBreakpoints";
import { useRoute, useRouter } from "vue-router";
import { usePeriodStore } from "../store/period.stores";
import { _signOut } from "@/app/modules/Authentication/services/auth.services";

const route = useRoute();
const router = useRouter();
const { screenSize } = useBreakpoints();
const periodStore = usePeriodStore();
const active = ref<boolean>(true);
const collapsed = ref<boolean>(false);
const inverted = ref(false);

const loading = ref<boolean>(false);

const currentKey = ref<string | null>(route.name as string | null);

const menuOptions: MenuOption[] = [
  menuItem({
    label: "Inicio",
    key: "Dashboard",
    route: "Dashboard",
    iconName: "home",
  }),

  {
    label: "Gestión Académica",
    key: "academic-management",
    icon: renderIcon("book"),
    children: [
      {
        type: "group",
        label: "Estudiantes y Docentes",
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
            key: "Teacher",
            route: "Teacher",
            iconName: "teacher",
          }),
        ],
      },
      {
        type: "group",
        label: "Planificación Académica",
        key: "academic-planning",
        children: [
          menuItem({
            label: "Periodos Académicos",
            key: "Period",
            route: "Period",
            iconName: "calendar-2",
          }),
          menuItem({
            label: "Planes de Estudio",
            key: "Curriculum",
            route: "Curriculum",
            iconName: "book-1",
          }),
          menuItem({
            label: "Áreas",
            key: "Area",
            route: "Area",
            iconName: "book-square",
          }),
          menuItem({
            label: "Módulos",
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
        ],
      },
    ],
  },

  {
    label: "Carga Académica",
    key: "academic-workload",
    icon: renderIcon("archive-book"),
    children: [
      menuItem({
        label: "Apertura de Grupos",
        key: "Group",
        route: "Group",
        iconName: "calendar-add",
      }),
      menuItem({
        label: "Gestión de Grupos",
        key: "GroupManager",
        route: "GroupManager",
        iconName: "data",
      }),
    ],
  },
  menuItem({
    label: "Supervisión Académica",
    key: "academic-supervision",
    route: "AcademicSupervision",
    iconName: "archive-book",
  }),
  {
    label: "Notas",
    key: "grades",
    icon: renderIcon("archive-book"),
    children: [
      // {
      //   label: "Ingreso de Notas",
      //   key: "grades-entry",
      //   iconName: "archive-add",
      // },
      // {
      //   label: "Rectificación de Notas",
      //   key: "grades-rectification",
      //   iconName: "archive-slash",
      // },
      menuItem({
        label: "Habilitaciones",
        key: "grade-deadline",
        route: "GradeDeadline",
        iconName: "calendar-2",
      }),
    ],
  },

  {
    label: "Administración",
    key: "administration",
    icon: renderIcon("cpu-setting"),
    children: [
      {
        type: "group",
        label: "Configuraciones Generales",
        key: "general-settings",
        children: [
          menuItem({
            label: "Tipos de Documento",
            key: "DocumentType",
            route: "DocumentType",
            iconName: "tag",
          }),
          menuItem({
            label: "Tipos de Estudiante",
            key: "StudentType",
            route: "StudentType",
            iconName: "tag",
          }),
          menuItem({
            label: "Métodos de Pago",
            key: "PaymentType",
            route: "PaymentType",
            iconName: "tag",
          }),
        ],
      },
      {
        type: "group",
        label: "Infraestructura",
        key: "infrastructure",
        children: [
          menuItem({
            label: "Laboratorios",
            key: "Laboratory",
            route: "Laboratory",
            iconName: "devices",
          }),
        ],
      },
    ],
  },

  {
    label: "Matrículas",
    key: "enrollments",
    icon: renderIcon("folder"),
    children: [
      menuItem({
        label: "Realizar Matrícula",
        key: "enrollment",
        route: "Enrollment",
        iconName: "folder-add",
      }),
      menuItem({
        label: "Matrículas",
        key: "virtual-enrollment",
        route: "EnrollmentVirtual",
        iconName: "folder-cloud",
      }),
      //EnrollmentPeriod - habilitar periodo de matricula
      menuItem({
        label: "Habilitaciones",
        key: "EnrollmentDeadline",
        route: "EnrollmentDeadline",
        iconName: "calendar-2",
      }),
    ],
  },

  {
    label: "Finanzas",
    key: "financial",
    icon: renderIcon("money"),
    children: [
      menuItem({
        label: "Costo de Matrícula (Módulos)",
        key: "ModulePrice",
        route: "ModulePrice",
        iconName: "moneys",
      }),
      menuItem({
        label: "Costo de Mensualidad (Cursos)",
        key: "CoursePrice",
        route: "CoursePrice",
        iconName: "moneys",
      }),
    ],
  },

  {
    label: "Reportes",
    key: "reports",
    icon: renderIcon("chart"),
    children: [
      {
        label: "Reporte de Matrículas",
        key: "enrollments-report",
        iconName: "chart-21",
      },
      { label: "Reporte de Notas", key: "grades-report", iconName: "chart-21" },
      {
        label: "Reporte de Carga Académica",
        key: "academic-load-report",
        iconName: "chart-21",
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
          menuItem({
            label: "Usuarios Administradores",
            key: "UserAdmin",
            route: "UserAdmin",
            iconName: "security-user",
          }),
          menuItem({
            label: "Roles Administradores",
            key: "RoleAdmin",
            route: "RoleAdmin",
            iconName: "key-square",
          }),
        ],
      },
      {
        type: "group",
        label: "Docentes",
        key: "security-teachers",
        children: [
          menuItem({
            label: "Usuarios Docentes",
            key: "UserTeacher",
            route: "UserTeacher",
            iconName: "security-user",
          }),
        ],
      },
      {
        type: "group",
        label: "Estudiantes",
        key: "security-students",
        children: [
          menuItem({
            label: "Usuarios Estudiantes",
            key: "UserStudent",
            route: "UserStudent",
            iconName: "security-user",
          }),
        ],
      },
    ],
  },
];

const profileOptions = [
  menuItem({
    label: "Perfil",
    key: "Profile",
    route: "Profile",
    iconName: "user",
  }),
  {
    label: "Salir",
    key: "sign-out",
    icon: renderIcon("logout", "red"),
    props: {
      class: "text-red-500",
      onClick: () => {
        signOut();
      },
    },
  },
];

const menuFooterOptions = [
  {
    label: () =>
      h(
        "span",
        {
          class: "text-gray-500",
        },
        [
          "Matriculas:  ",
          h(
            "strong",
            {
              class: periodStore.enrollment?.period
                ? "text-blue-500"
                : "text-red-500",
            },
            periodStore.enrollment?.period ?? "No definido"
          ),
        ]
      ),
    key: "groups",
    icon: renderIcon("people"),
  },
];

const signOut = async () => {
  console.log("signOut");
  loading.value = true;
  const response = await _signOut();

  if (response) {
    router.push({ name: "Login" });
  }
  loading.value = false;
};

const initLayout = async () => {
  await periodStore.getEnrollment();
};

initLayout();
</script>
