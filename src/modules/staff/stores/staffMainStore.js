import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { helperMainStore } from "../../../helpers/helperMainService";
import * as XLSX from 'xlsx';



export const staffMainStore = defineStore("staffMainStore", () => {

    const useHelper = helperMainStore()
    const createStaff = ref({})
    const staffList = ref([])
    const canShowLoading = ref(false)

    const getStaffList = () => {
        canShowLoading.value = true
        axios.get("http://localhost:5000/staff").then(res => {
            console.log(res.data);
            staffList.value = res.data
        }).finally(() => {
            canShowLoading.value = false
        })
    }

    const saveStaff = (stafflist) => {
        // console.log(stafflist);
        // axios.post("http://localhost:5000/staff", stafflist).finally(() => {
        //     getStaffList()
        // })
        staffList.value.push(stafflist)
        createStaff.value = {}
    }

    const selectedFile = ref()

    const handleFileChange = (event) => {

        selectedFile.value = event.target.files[0];
    }


    const generateFile = () => {


        if (selectedFile.value) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const binaryData = e.target.result;
                const workbook = XLSX.read(binaryData, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                const headers = jsonData[0];
                const data = jsonData.slice(1);

                let currentHeaders = headers;
                let currentSource = data.map((row) =>
                    headers.reduce(
                        (acc, header, index) => ({
                            ...acc,
                            [header]: row[index],
                        }),
                        {}
                    )
                );
                console.log(currentSource);;

                currentSource.forEach(ele => {
                    staffList.value.push(ele)
                })

            };
            reader.readAsBinaryString(selectedFile.value);

        }
    }
    return {
        canShowLoading,
        staffList, createStaff, getStaffList, saveStaff,selectedFile, handleFileChange,generateFile
    }
})