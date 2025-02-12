import { http } from "@/core/http";
import type { SelectOption } from "naive-ui";

export const __searchPeriods = async (
  search: string
): Promise<SelectOption[]> => {
  try {
    const response = await http().get(
      `/period/items/for-select?search=${search}`
    );
    return response.data.data as SelectOption[];
  } catch (error) {
    return [];
  }
};

export const __searchCurriculums = async (
  _search: string
): Promise<SelectOption[]> => {
  try {
    const response = await http().get(`/curriculum/items/for-select`);
    return response.data.data as SelectOption[];
  } catch (error) {
    return [];
  }
};

export const __searchTeachers = async (
  request: any
): Promise<SelectOption[]> => {
  try {
    const params = new URLSearchParams();

    if (request.search) {
      params.append("search", request.search);
    }

    if (request.id) {
      params.append("id", request.id);
    }

    const response = await http().get(
      `/teacher/items/for-select?${params.toString()}`
    );
    return response.data.data as SelectOption[];
  } catch (error) {
    return [];
  }
};

export const __searchLaboratories = async (
  search: string
): Promise<SelectOption[]> => {
  try {
    const response = await http().get(
      `/laboratory/items/for-select?search=${search}`
    );
    return response.data.data as SelectOption[];
  } catch (error) {
    return [];
  }
};
