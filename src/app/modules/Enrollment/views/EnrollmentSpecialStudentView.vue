<template>
    <n-card :segmented="{
        header: true,
        footer: true,
        content: true,
    }">
        <template #header>
            <h6 style="color: #999; margin: 0">Matricular estudiante</h6>
            Nombre del estudiante
        </template>
        <template #header-extra>
            <n-select v-model:value="curriculumId" placeholder="Seleccionar Plan de estudio" filterable
                :options="curriculumItems" :virtual-scroll="false" :default-value="1"
                @update:value="getStudentEnrollmentSpecial" />
        </template>
        <template #action> </template>
    </n-card>

    <div class="p-4">
        <n-row :gutter="16">
            <n-col :span="screenSize == 'lg' ? 6 : 24">
                <n-card :segmented="{
                    header: true,
                    content: true,
                }" title="Información Personal" subtitle="Datos del estudiante">
                    <n-spin :show="loadingStudentInfo">
                        <n-space vertical>
                            <n-statistic class="small" label="Tipo de estudiante">
                                {{ student?.studentType }}
                            </n-statistic>
                            <n-statistic class="small" label="Documento">
                                {{
                                    student?.documentNumber
                                        ? student?.documentNumber
                                        : "No registrado"
                                }}
                            </n-statistic>

                            <n-statistic class="small" label="Nombres">
                                {{ student?.fullName }}
                            </n-statistic>

                            <n-statistic class="small" label="Correo electronico">
                                {{ student?.email ? student?.email : "No registrado" }}
                            </n-statistic>

                            <n-statistic class="small" label="Telefono">
                                {{ student?.phone ? student?.phone : "No registrado" }}
                            </n-statistic>
                        </n-space>
                    </n-spin>
                </n-card>
            </n-col>
            <n-col :span="screenSize == 'lg' ? 18 : 24">
                <n-card :segmented="{
                    header: true,
                    content: true,
                }" title="Matricula">
                    <template #header-extra>
                        <n-tag :bordered="false" :type="periodStore.enrollment ? 'info' : 'error'">
                            <strong>
                                {{
                                    periodStore.enrollment
                                        ? periodStore.enrollment?.name
                                        : "No habilitado"
                                }}
                            </strong>
                        </n-tag>
                    </template>
                    <div class="flex justify-end bg-gray-100 p-4 -mx-6 -mt-6 mb-4">
                        <n-button type="primary" @click="showAddModuleForm = true" :disabled="!periodStore.enrollment">
                            Agregar Modulo
                        </n-button>
                    </div>
                    <n-collapse>
                        <n-collapse-item v-for="item in studentEnrollment?.enrollments" :key="item.moduleId"
                            :name="item.moduleId">
                            <template #header>
                                <h2 class="text-lg font-semibold w-full text-blue-800 p-2">
                                    {{ item.moduleName }} {{ item.isExtracurricular ? '(Extracurricular)' : '' }}
                                </h2>
                            </template>
                            <n-list hoverable clickable>
                                <n-list-item v-for="course in item.courses" :key="course.id">
                                    <n-thing :title="`${course.code} - ${course.name}`">
                                        <template #header-extra>
                                            <n-button v-if="
                                                course.enrollmentGroups.length == 0
                                                || (Math.max(...course.enrollmentGroups.map((obj: any) => obj.grade)) < 11
                                                    && course.enrollmentGroups.filter((obj: any) => obj.groupStatus == 'ABIERTO').length == 0)
                                            " type="primary" @click="openEnrollmentGroupModal(course.id)">
                                                Matricular
                                            </n-button>
                                        </template>

                                        <template #description>
                                            <n-space size="small">
                                                <n-tag :bordered="false" size="small">
                                                    Area: {{ course.area }}
                                                </n-tag>
                                            </n-space>
                                        </template>

                                        <n-table v-if="course.enrollmentGroups.length > 0" :single-line="false">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">Matricula</th>
                                                    <th colspan="3">Grupo</th>
                                                    <th colspan="2"></th>
                                                </tr>
                                                <tr>
                                                    <th>Periodo</th>
                                                    <th>Estado</th>
                                                    <th>Grupo</th>
                                                    <th>Modalidad</th>
                                                    <th>Estado</th>
                                                    <th rowspan="2">Nota</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="enrollmentGroup in course.enrollmentGroups">
                                                    <td>
                                                        <n-tag v-if="
                                                            periodStore.enrollment?.name ==
                                                            enrollmentGroup.period
                                                        " type="info">
                                                            {{ enrollmentGroup.period }}
                                                        </n-tag>

                                                        <span v-else>
                                                            {{ enrollmentGroup.period }}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        {{ enrollmentGroup.enrollmentStatus }}
                                                    </td>
                                                    <td>
                                                        {{ enrollmentGroup.groupName }}
                                                    </td>
                                                    <td>
                                                        {{ enrollmentGroup.groupModality }}
                                                    </td>
                                                    <td>
                                                        {{ enrollmentGroup.groupStatus }}
                                                    </td>
                                                    <td>
                                                        {{ enrollmentGroup.grade }}
                                                    </td>
                                                    <td>
                                                        <EditEnrollmentGroup
                                                            v-if="periodStore.enrollment?.name == enrollmentGroup.period"
                                                            :item="enrollmentGroup"
                                                            @resetEnrollment="($event) => openEnrollmentGroupModal(course.id, $event)"
                                                            @changeGroup="($event) => openEnrollmentGroupModal(course.id, $event)"
                                                            @reserveEnrollment="getStudentEnrollmentSpecial"
                                                            @cancelEnrollment="getStudentEnrollmentSpecial" />


                                                        <n-button
                                                            v-if="enrollmentGroup.enrollmentStatus === 'MATRICULADO'"
                                                            :render-icon="renderIcon('printer')"
                                                            @click="downloadEnrollmentPDF(enrollmentGroup.id)">
                                                            Ficha
                                                        </n-button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </n-table>
                                    </n-thing>
                                </n-list-item>
                            </n-list>
                        </n-collapse-item>
                    </n-collapse>
                </n-card>
            </n-col>
        </n-row>
    </div>
    <iframe id="printFrame" style="display: none"></iframe>
    <EnrollmentModuleForm v-if="student" v-model="showAddModuleForm" :studentId="student.id"
        :curriculumId="curriculumId" @success="getStudentEnrollmentSpecial" />
    <EnrollmentGroupForm v-model="showModal" :studentId="student.id" :curriculumId="curriculumId" :courseId="courseId"
        :enrollmetGroup="enrollmetGroup" @success="getStudentEnrollmentSpecial" />
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { renderIcon } from "@/core/utils/icon.utils";

import useBreakpoints from "@/core/composable/useBreakpoints";
import { _createColumns } from "@/app/modules/Course/configs/dataTable.configs";
import {
    _getStudentEnrollment,
    _getStudentEnrollmentSpecial,
    _downloadEnrollmentPDF,
} from "@/app/modules/Enrollment/services/enrollment.services";
import { __current } from "@/app/modules/Period/services/period.services";
import { __getStudentTypesForSelect } from "@/app/modules/StudentType/services/studentType.services";
import { __getInfoById } from "@/app/modules/Student/services/student.services";
import { __getDocumentTypesForSelect } from "@/app/modules/DocumentType/services/documentType.services";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
import EnrollmentGroupForm from "../components/Form/EnrollmentGroupForm.vue";

import { usePeriodStore } from "@/app/store/period.stores";

import EnrollmentModuleForm from "../components/Form/EnrollmentModuleForm.vue";
import EditEnrollmentGroup from "../components/EditEnrollmentGroup/EditEnrollmentGroup.vue";

const { screenSize } = useBreakpoints();
const route = useRoute();
const periodStore = usePeriodStore();

const showAddModuleForm = ref<boolean>(false);
const showModal = ref<boolean>(false);

// const loadingView = ref<boolean>(true);
const curriculumId = ref<number | null>(null);
const periodCurrent = ref<any | null>(null);
const curriculumItems = ref<any>([]);

const loadingStudentInfo = ref<boolean>(true);
const student = ref<any>({});
const loadingStudentEnrollment = ref<boolean>(true);
const studentEnrollment = ref<any | null>(null);
const courseId = ref<number | null>(null);
const enrollmetGroup = ref<any | null>(null);

const downloadEnrollmentPDF = async (enrollmentGroupId: number) => {
    let response = await _downloadEnrollmentPDF({ id: enrollmentGroupId });

    let blob = new Blob([response], { type: "application/pdf" });
    let url = window.URL.createObjectURL(blob);

    let iframe = document.getElementById("printFrame") as HTMLIFrameElement;

    iframe.src = url;
    iframe.onload = function () {
        iframe.contentWindow?.print();
    };
};

const getStudentInfo = async () => {
    const id = route.params.id;
    loadingStudentInfo.value = true;
    student.value = await __getInfoById(id);
    loadingStudentInfo.value = false;
};

const getStudentEnrollmentSpecial = async () => {
    const id = route.params.id;
    const periodId = periodCurrent.value?.id;
    loadingStudentEnrollment.value = true;
    studentEnrollment.value = await _getStudentEnrollmentSpecial(
        id,
        curriculumId.value!,
        periodId
    );
    loadingStudentEnrollment.value = false;
};


const openEnrollmentGroupModal = (_id: number, _enrollmetGroup: number | null = null) => {
    courseId.value = _id;
    enrollmetGroup.value = _enrollmetGroup;
    showModal.value = true;
};

const initView = async () => {
    curriculumItems.value = await __searchCurriculums("");
    curriculumId.value = curriculumItems.value[0].value;
    getStudentInfo();
    getStudentEnrollmentSpecial();
};

onMounted(() => {
    initView();
});
</script>

<style>
.n-statistic.small {
    .n-statistic-value {
        line-height: 1rem;
        margin-top: 0.1rem;
        font-size: 0.5rem;

        span {
            font-weight: 600;
            font-size: 1rem;
        }
    }
}
</style>