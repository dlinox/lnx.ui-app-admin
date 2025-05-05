import { useHttp } from "@/core/composables/useHttp";

const http = useHttp();

const baseUrl = "reports/dashboard/";

export const _getEnrollmentsPeriod = async () => {
  try {
    const response = await http.get(`${baseUrl}enrollments`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const _getAllStudents = async () => {
  try {
    const response = await http.get(`${baseUrl}all-students`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const _getAllTeachers = async () => {
  try {
    const response = await http.get(`${baseUrl}all-teachers`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const _getAcademicDashboard = async () => {
  try {
    const response = await http.get(`${baseUrl}academic`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const _getAllYearsForSelect = async () => {
  try {
    const response = await http.get(`reports/all-years-for-select`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const _getEnrollmentsByYear = async (year: number) => {
  try {
    const response = await http.get(`${baseUrl}enrollments-by-year/${year}`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const _getEnabledGroupsByYear = async (year: number) => {
  try {
    const response = await http.get(`${baseUrl}enabled-groups-by-year/${year}`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};
