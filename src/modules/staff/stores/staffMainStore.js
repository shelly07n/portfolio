import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const staffMainStore = defineStore("staffMainStore", () => {

    const createStaff = ref({})
    const staffList = ref()
    const canShowLoading = ref(false)

    const getStaffList = () => {
        canShowLoading.value = true
        axios.get("http://localhost:3000/staff").then(res => {
            console.log(res.data);
            staffList.value = res.data
        }).finally(()=>{
            canShowLoading.value = false
        })
    }

    const saveStaff = (stafflist) => {
        console.log(stafflist);
        axios.post("http://localhost:3000/staff", stafflist).finally(() => {
            getStaffList()
        })
    }

    return {
        canShowLoading,
        staffList, createStaff, getStaffList, saveStaff
    }
})