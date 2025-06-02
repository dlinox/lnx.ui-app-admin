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
import { _signOut } from "@/app/modules/Authentication/services/auth.services";

import { useRoute, useRouter } from "vue-router";
import { usePeriodStore } from "../store/period.stores";
const route = useRoute();
const router = useRouter();
const { screenSize } = useBreakpoints();
const periodStore = usePeriodStore();

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();

const active = ref<boolean>(true);
const collapsed = ref<boolean>(false);
const inverted = ref(false);

const loading = ref<boolean>(false);

const currentKey = ref<string | null>(route.name as string | null);

const menuOptions = ref<MenuOption[]>([
  menuItem({
    label: "Inicio",
    key: "Dashboard",
    route: "Dashboard",
    iconName: "home",
    permissions: [],
  }),

  {
    label: "Gestión Académica",
    key: "academic-management",
    icon: renderIcon("book"),
    show: hasPermission([
      "student.create",
      "student.edit",
      "student.delete",
      "teacher.create",
      "teacher.edit",
      "teacher.delete",
      "period.create",
      "period.edit",
      "period.delete",
      "curriculum.create",
      "curriculum.edit",
      "curriculum.delete",
      "area.create",
      "area.edit",
      "area.delete",
      "module.create",
      "module.edit",
      "module.delete",
      "course.create",
      "course.edit",
      "course.delete",
    ]),
    children: [
      {
        type: "group",
        label: "Estudiantes y Docentes",
        show: hasPermission([
          "student.create",
          "student.edit",
          "student.delete",
          "student.create-account",
          "teacher.create",
          "teacher.edit",
          "teacher.delete",
          "teacher.create-account",
        ]),
        key: "people",
        children: [
          menuItem({
            label: "Estudiantes",
            key: "Student",
            route: "Student",
            iconName: "personalcard",
            permissions: [
              "student.create",
              "student.edit",
              "student.delete",
              "student.create-account",
            ],
          }),
          menuItem({
            label: "Docentes",
            key: "Teacher",
            route: "Teacher",
            iconName: "teacher",
            permissions: [
              "teacher.create",
              "teacher.edit",
              "teacher.delete",
              "teacher.create-account",
            ],
          }),
        ],
      },
      {
        type: "group",
        label: "Planificación Académica",
        key: "academic-planning",
        show: hasPermission([
          "period.create",
          "period.edit",
          "period.delete",
          "curriculum.create",
          "curriculum.edit",
          "curriculum.delete",
          "area.create",
          "area.edit",
          "area.delete",
          "module.create",
          "module.edit",
          "module.delete",
          "course.create",
          "course.edit",
          "course.delete",
        ]),
        children: [
          menuItem({
            permissions: ["period.create", "period.edit", "period.delete"],
            label: "Periodos Académicos",
            key: "Period",
            route: "Period",
            iconName: "calendar-2",
          }),
          menuItem({
            permissions: [
              "curriculum.create",
              "curriculum.edit",
              "curriculum.delete",
            ],
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
            permissions: ["area.create", "area.edit", "area.delete"],
          }),
          menuItem({
            label: "Módulos",
            key: "Module",
            route: "Module",
            iconName: "bookmark",
            permissions: ["module.create", "module.edit", "module.delete"],
          }),
          menuItem({
            label: "Cursos",
            key: "Course",
            route: "Course",
            iconName: "book-saved",
            permissions: ["course.create", "course.edit", "course.delete"],
          }),
        ],
      },
    ],
  },

  {
    label: "Carga Académica",
    key: "academic-workload",
    icon: renderIcon("folder-open"),
    show: hasPermission([
      "group.create",
      "group.edit",
      "group.delete",
      "group-manager.edit",
      "group-manager.send-email",
    ]),
    children: [
      menuItem({
        permissions: ["group.create", "group.edit", "group.delete"],
        label: "Apertura de Grupos",
        key: "Group",
        route: "Group",
        iconName: "calendar-add",
      }),
      menuItem({
        permissions: ["group-manager.edit", "group-manager.send-email"],
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
    iconName: "speedometer",
    permissions: [
      "academic-supervision.create",
      "academic-supervision.edit",
      "academic-supervision.delete",
    ],
  }),
  {
    label: "Notas",
    key: "grades",
    icon: renderIcon("archive-book"),
    show: hasPermission([
      "academic-record.view",
      "academic-record.print",
      "grade-deadline.create",
      "grade-deadline.extencion",
    ]),
    children: [
      menuItem({
        label: "Acta de Notas",
        key: "AcademicRecord",
        route: "AcademicRecord",
        iconName: "archive-book",
        permissions: ["academic-record.view", "academic-record.print"],
      }),
      menuItem({
        label: "Habilitaciones",
        key: "grade-deadline",
        route: "GradeDeadline",
        iconName: "calendar-2",
        permissions: ["grade-deadline.create", "grade-deadline.extencion"],
      }),
    ],
  },
  {
    label: "Administración",
    key: "administration",
    icon: renderIcon("cpu-setting"),
    show: hasPermission([
      "document-type.create",
      "document-type.edit",
      "document-type.delete",
      "student-type.create",
      "student-type.edit",
      "student-type.delete",
      "payment-type.create",
      "payment-type.edit",
      "payment-type.delete",
      "laboratory.create",
      "laboratory.edit",
      "laboratory.delete",
    ]),
    children: [
      {
        type: "group",
        label: "Configuraciones Generales",
        key: "general-settings",
        show: hasPermission([
          "document-type.create",
          "document-type.edit",
          "document-type.delete",
          "student-type.create",
          "student-type.edit",
          "student-type.delete",
          "payment-type.create",
          "payment-type.edit",
          "payment-type.delete",
        ]),
        children: [
          menuItem({
            label: "Tipos de Documento",
            key: "DocumentType",
            route: "DocumentType",
            iconName: "tag",
            permissions: [
              "document-type.create",
              "document-type.edit",
              "document-type.delete",
            ],
          }),
          menuItem({
            label: "Tipos de Estudiante",
            key: "StudentType",
            route: "StudentType",
            iconName: "tag",
            permissions: [
              "student-type.create",
              "student-type.edit",
              "student-type.delete",
            ],
          }),
          menuItem({
            label: "Métodos de Pago",
            key: "PaymentType",
            route: "PaymentType",
            iconName: "tag",
            permissions: [
              "payment-type.create",
              "payment-type.edit",
              "payment-type.delete",
            ],
          }),
        ],
      },
      {
        type: "group",
        label: "Infraestructura",
        key: "infrastructure",
        show: hasPermission([
          "laboratory.create",
          "laboratory.edit",
          "laboratory.delete",
        ]),
        children: [
          menuItem({
            label: "Laboratorios",
            key: "Laboratory",
            route: "Laboratory",
            iconName: "devices",
            permissions: [
              "laboratory.create",
              "laboratory.edit",
              "laboratory.delete",
            ],
          }),
        ],
      },
    ],
  },

  {
    label: "Matrículas",
    key: "enrollments",
    icon: renderIcon("folder"),
    show: hasPermission([
      "enrollment.create",
      "enrollment.create-special",
      "enrollment.edit",
      "enrollment.print-record",
      "recognition.create",
      "recognition.delete",
      "enrollment-deadline.create",
      "enrollment-deadline.extencion",
    ]),
    children: [
      menuItem({
        label: "Realizar Matrícula",
        key: "enrollment",
        route: "Enrollment",
        iconName: "folder-add",
        permissions: [
          "enrollment.create",
          "enrollment.create-special",
          "enrollment.edit",
          "enrollment.print-record",
        ],
      }),
      menuItem({
        label: "Matrículas",
        key: "virtual-enrollment",
        route: "EnrollmentVirtual",
        iconName: "folder-cloud",
        permissions: ["enrollment.edit"],
      }),
      menuItem({
        label: "Convalidaciones",
        key: "Recognition",
        route: "Recognition",
        iconName: "convertshape-2",
        permissions: ["recognition.create", "recognition.delete"],
      }),
      menuItem({
        label: "Habilitaciones",
        key: "EnrollmentDeadline",
        route: "EnrollmentDeadline",
        iconName: "calendar-2",
        permissions: [
          "enrollment-deadline.create",
          "enrollment-deadline.extencion",
        ],
      }),
    ],
  },

  {
    label: "Costos",
    key: "financial",
    icon: renderIcon("money"),
    show: hasPermission([
      "module-price.create",
      "module-price.edit",
      "module-price.delete",
      "course-price.create",
      "course-price.edit",
      "course-price.delete",
    ]),
    children: [
      menuItem({
        label: "Matrícula (Módulos)",
        key: "ModulePrice",
        route: "ModulePrice",
        iconName: "moneys",
        permissions: [
          "module-price.create",
          "module-price.edit",
          "module-price.delete",
        ],
      }),
      menuItem({
        label: "Mensualidad (Cursos)",
        key: "CoursePrice",
        route: "CoursePrice",
        iconName: "moneys",
        permissions: [
          "course-price.create",
          "course-price.edit",
          "course-price.delete",
        ],
      }),
    ],
  },

  {
    label: "Reportes",
    key: "reports",
    icon: renderIcon("archive"),
    show: hasPermission(["report.student", "report.group"]),
    children: [
      menuItem({
        label: "Reporte de Estudiantes",
        key: "StudentReportView",
        route: "StudentReportView",
        iconName: "document-filter",
        permissions: ["report.student"],
      }),
      // GroupReportView
      menuItem({
        label: "Reporte de Grupos",
        key: "GroupReportView",
        route: "GroupReportView",
        iconName: "document-filter",
        permissions: ["report.group"],
      }),
    ],
  },
  {
    label: "Seguridad",
    key: "security",
    icon: renderIcon("shield"),
    show: hasPermission([
      "user-admin.create",
      "user-admin.edit",
      "user-admin.delete",
      "role-admin.create",
      "role-admin.edit",
      "role-admin.delete",
      "role-admin.assign-permissions",
      "user-teacher.create",
      "user-teacher.edit",
      "user-teacher.delete",
      "user-student.create",
      "user-student.edit",
      "user-student.delete",
    ]),
    children: [
      {
        type: "group",
        label: "Administradores",
        key: "security-admins",
        show: hasPermission([
          "user-admin.create",
          "user-admin.edit",
          "user-admin.delete",
          "role-admin.create",
          "role-admin.edit",
          "role-admin.delete",
          "role-admin.assign-permissions",
        ]),
        children: [
          menuItem({
            label: "Usuarios Administradores",
            key: "UserAdmin",
            route: "UserAdmin",
            iconName: "security-user",
            permissions: [
              "user-admin.create",
              "user-admin.edit",
              "user-admin.delete",
            ],
          }),
          menuItem({
            label: "Roles Administradores",
            key: "RoleAdmin",
            route: "RoleAdmin",
            iconName: "key-square",
            permissions: [
              "role-admin.create",
              "role-admin.edit",
              "role-admin.delete",
              "role-admin.assign-permissions",
            ],
          }),
        ],
      },
      {
        type: "group",
        label: "Docentes",
        key: "security-teachers",
        show: hasPermission([
          "user-teacher.create",
          "user-teacher.edit",
          "user-teacher.delete",
        ]),
        children: [
          menuItem({
            label: "Usuarios Docentes",
            key: "UserTeacher",
            route: "UserTeacher",
            iconName: "security-user",
            permissions: [
              "user-teacher.create",
              "user-teacher.edit",
              "user-teacher.delete",
            ],
          }),
        ],
      },
      {
        type: "group",
        label: "Estudiantes",
        key: "security-students",
        show: hasPermission([
          "user-student.create",
          "user-student.edit",
          "user-student.delete",
        ]),
        children: [
          menuItem({
            label: "Usuarios Estudiantes",
            key: "UserStudent",
            route: "UserStudent",
            iconName: "security-user",
            permissions: [
              "user-student.create",
              "user-student.edit",
              "user-student.delete",
            ],
          }),
        ],
      },
    ],
  },
]);

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
  loading.value = true;
  const response = await _signOut();

  if (response) {
    router.push({ name: "Login" });
  }
  loading.value = false;
};

const initLayout = async () => {
  await periodStore.getEnrollment();
  // menuOptions filter by permissions
};

initLayout();
</script>
