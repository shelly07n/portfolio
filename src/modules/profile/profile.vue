<template>
    <Toast />
    <div class="bg-white border rounded-lg w-2/5">
        <div class="grid grid-cols-12 p-3 content-center">
            <div class="col-span-4 h-full grid grid-cols-12 gap-6">
                <div class="col-span-4">
                    <div class="profile-pic">
                        <img class="forRounded" src="../../assets/vue.svg" srcset="" alt="" id="output" width="200" />
                        <label class="-label" for="file">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                            </svg>
                            <!-- <span>Change</span> -->
                        </label>
                        <input id="file" type="file" />
                    </div>

                </div>
                <div class="col-span-8">
                    <div class=" flex  justify-between pr-4">
                        <div>
                            <p class="font-semibold text-md">
                                Shelton</p>
                            <p class="font-semibold text-xs text-gray-500">
                                Developer</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="w-3/5 p-2">
            <div class="grid grid-cols-3 my-4">
                <p class="font-semibold text-xs text-gray-500">Status</p>
                <p>:</p>
                <p class="font-semibold text-sm">Single
                </p>
            </div>
            <div class="grid grid-cols-3 my-4">
                <p class="font-semibold text-xs text-gray-500">Email</p>
                <p>:</p>

                <p class="font-semibold text-sm">sheltonfdo23@gmail.com</p>
            </div>
            <div class="grid grid-cols-3 my-4">
                <p class="font-semibold text-xs text-gray-500">Mobile number</p>
                <p>:</p>

                <p class="font-semibold text-sm">8284025344</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@mixin object-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

$circleSize: 90px;
$radius: 100px;
$shadow: 0 0 10px 0 rgba(255, 255, 255, .35);
$fontColor: rgb(250, 250, 250);

.profile-pic {
    color: transparent;
    transition: all .3s ease;
    @include object-center;
    position: relative;
    transition: all .3s ease;

    input {
        display: none;
    }

    .forRounded {
        position: absolute;
        object-fit: cover;
        width: $circleSize;
        height: $circleSize;
        box-shadow: $shadow;
        border-radius: $radius;
        z-index: 0;
    }

    .-label {
        cursor: pointer;
        height: $circleSize;
        width: $circleSize;
    }

    &:hover {
        .-label {
            @include object-center;
            background-color: rgba(0, 0, 0, .8);
            z-index: 10000;
            color: $fontColor;
            transition: background-color .2s ease-in-out;
            border-radius: $radius;
            margin-bottom: 0;
        }
    }

    span {
        display: inline-flex;
        padding: .2em;
        height: 2em;
        font-size: 12px;
    }
}

.p-progressbar.p-component.p-progressbar-determinate {
    height: 13px;
    /* background-color: aqua; */
}


.progressbar_val3 .p-progressbar-value.p-progressbar-value-animate {
    /* background-color:#fff !important; */
    background-color: rgb(48, 218, 48) !important;
    color: #fff !important;
}

.progressbar .p-progressbar-value.p-progressbar-value-animate {
    /* background-color:#fff !important; */
    background-color: red !important;
    color: #fff !important;
}

.progressbar_val2 .p-progressbar-value.p-progressbar-value-animate {
    background-color: orange !important;
    color: black !important;
}

/* .p-progressbar-label{
color: black !important;
} */


/* .progressbar_val_1 >  .p-progressbar-value.p-progressbar-value-animate , .p-progressbar-label{
     background-color: red !important ;
     color: #fff !important;
} */


@media only screen and (max-width: 1280px) {
    .Digital_Id_Card_ {
        /* height: 7000px; */
    }
}
</style>




<!-- <div class="mb-0 card top-line">
    <div class="card-body">
        <div class="row">
            <div class="col-12 text-end">
                <button class="p-0 m-0 bg-transparent border-0 outline-none btn" @click="dialogIdCard = true">
                    <i class="pi pi-id-card text-success fs-4" aria-hidden="true"></i>
                </button>
            </div>
            <div class="text-center col-12">
                <div class="mx-auto rounded-circle img-xl userActive-status profile-img d-flex  justify-content-center align-items-center"
                    style=" "
                    :class="[_instance_profilePagesStore.employeeDetails.short_name_Color ? _instance_profilePagesStore.employeeDetails.short_name_Color : '', _instance_profilePagesStore.employeeDetails.short_name_Color]">
                     box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; -->
                    <!-- <img class="rounded-circle img-xl userActive-status profile-img" src="./photo1675430684.jpeg" alt=""
                        srcset="" style="border:6px solid #c2c2c2c2"> -->
                   <!-- <img v-if="_instance_profilePagesStore.profile"
                        class="rounded-circle img-xl userActive-status profile-img"
                        :src="`data:image/png;base64,${_instance_profilePagesStore.profile}`" srcset="" alt="" />
                    <h1 v-if="!_instance_profilePagesStore.profile" class=" text-white fs-4">{{
                        _instance_profilePagesStore.employeeDetails.user_short_name }}</h1>

                    <label class="cursor-pointer edit-icon" style="position: absolute; top: 76px ;right: 10px;"
                        data-bs-toggle="modal" data-bs-target="#edit_profileImg" id="" for="upload">
                        <i class="fa fa-camera"></i></label>

                    <input type="file" name="" id="upload" hidden @change="updateProfilePhoto($event)" />

                </div>
                <div class="mt-4">
                    <div class="progress-wrapper border-bottom-liteAsh">
                        <span class="mx-auto opacity-0 border-1"></span>
                        <div class="mb-1  px-auto d-flex align-items-center justify-content-around ">
                            <h6 class="text-center fw-bold fs-5  ">
                                {{ _instance_profilePagesStore.employeeDetails.name }}
                            </h6>
                        </div>
                        <span class="personal-edit position-absolute" style="top: 148px;right: 0px;">
                                <a href="#" class="edit-icon "><i class="ri-pencil-fill"
                                        @click="dialog_emp_name_visible = true"></i>
                                </a>
                            </span>


                        <Dialog v-model:visible="dialog_emp_name_visible" modal header=" "
                            :style="{ width: '50vw', borderTop: '5px solid #002f56' }">
                            <template #header>
                                <div>
                                    <h5 :style="{ color: 'var(--color-blue)', borderLeft: '3px solid var(--light-orange-color', paddingLeft: '6px' }"
                                        class="fw-bold fs-5">
                                        Edit Employee Name</h5>
                                </div>
                            </template>
                            <div>
                                <div class="modal-body">

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3 form-group">
                                                <label class="mb-2 font-semibold text-lg">Employee Name</label>
                                             <InputMask @focusout="panCardExists" id="serial" mask="aaaaa9999a"
                                                    v-model="employee_info.emp_name" placeholder="AHFCS1234F"
                                                    style="text-transform: uppercase" class="form-controls pl-2" :class="[
                                                        v$.emp_name.$error ? 'p-invalid' : '',
                                                    ]" /> -->
                                                <!--<InputText type="text" v-model="employee_info.emp_name"
                                                    style="text-transform: uppercase" class="form-controls pl-2" :class="[
                                                        v$.emp_name.$error ? 'p-invalid' : '',
                                                    ]" />
                                                <span v-if="v$.emp_name.$error" class="text-red-400 fs-6 font-semibold">
                                                    {{ v$.emp_name.required.$message.replace("Value", "Employee Name")
                                                    }}
                                                </span>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class=" form-group">
                                                <label for="" class="mb-1 mb-1 font-semibold text-lg">Documents</label>
                                                <Dropdown v-model="employee_info.emp_doc_name" :options="doc_name"
                                                    optionLabel="name" placeholder="Select a document "
                                                    class="form-controls pl-2 w-full h-12" :class="[
                                                        v$.emp_doc_name.$error ? 'p-invalid' : '',
                                                    ]" />
                                                <span v-if="v$.emp_doc_name.$error"
                                                    class="text-red-400 fs-6 font-semibold">
                                                    {{ v$.emp_doc_name.required.$message.replace("Value", "Documents")
                                                    }}
                                                </span>
                                            </div>
                                        </div>

                                        <div class="col-md-6 d-flex flex-column ">
                                             flex-column -->
                                           <!-- <div class="d-flex justify-items-center  flex-column ">
                                                <label for="" class="float-label mb-2 font-semibold text-lg">Upload
                                                    Documents</label>
                                                <div class="d-flex  justify-items-center align-items-center">
                                                    <Toast />
                                                    <label
                                                        class="cursor-pointer text-primary d-flex align-items-center fs-5 btn bg-primary "
                                                        style="width:100px ; " id="" for="uploadPassBook">
                                                        <i class="pi pi-arrow-circle-up fs-5 mr-2"></i>
                                                        <h1 class="text-light">Upload</h1>
                                                    </label>

                                                    <div v-if="employee_info.emp_upload_doc"
                                                        class="p-2 px-3 bg-green-100 rounded-lg font-semibold fs-11 mx-4">
                                                        {{ employee_info.emp_upload_doc.name }}</div>

                                                    <input type="file" name="" id="uploadPassBook" hidden
                                                        @change="UploadEmpDocsPhoto($event)" :class="[
                                                            v$.emp_upload_doc.$error ? 'p-invalid' : '',
                                                        ]" />
                                                </div>
                                                <span v-if="v$.emp_upload_doc.$error"
                                                    class="text-red-400 fs-6 font-semibold">
                                                    {{ v$.emp_upload_doc.required.$message.replace("Value", "document")
                                                    }}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-12">
                                        <div class="text-right">
                                            <button id="btn_submit_bank_info" class="btn btn-orange submit-btn"
                                                @click="submitForm">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog>




                        <div class="mx-auto mb-1 d-flex justify-content-between">
                            <span class="text-muted f-12">Profile Completeness</span>
                            <span class="text-muted text-end f-12 fw-bold" id="prograssBar_percentage">
                            </span>
                        </div>
                       <div class="mb-2 progress progress-bar-content">
                                <div class="progress-bar " role="progressbar" id="profile_progressBar"
                                    aria-valuenow="{{ 100 }}" aria-valuemin="0"
                                    aria-valuemax="100"></div>


                            </div> -->
                         <!-- <ProgressBar  v-if="_instance_profilePagesStore.employeeDetails.profile_completeness <=39 "
                            :value="_instance_profilePagesStore.employeeDetails.profile_completeness" :class="[_instance_profilePagesStore.employeeDetails.profile_completeness <=39 ? 'progressbar' : '' ]" >
                        </ProgressBar>
                        <ProgressBar  class="progressbar_val2" v-if="_instance_profilePagesStore.employeeDetails.profile_completeness >=40 && _instance_profilePagesStore.employeeDetails.profile_completeness <=59"
                        :class="[_instance_profilePagesStore.employeeDetails.profile_completeness >=40 &&  _instance_profilePagesStore.employeeDetails.profile_completeness <=59]"  :value="_instance_profilePagesStore.employeeDetails.profile_completeness" >
                        </ProgressBar>

                        <ProgressBar class="progressbar_val3" v-if="_instance_profilePagesStore.employeeDetails.profile_completeness >=60"
                        :class="[_instance_profilePagesStore.employeeDetails.profile_completeness >=60]"
                            :value="_instance_profilePagesStore.employeeDetails.profile_completeness" >
                        </ProgressBar>

                        <p class="mb-2 text-muted f-10 text-start fw-bold">
                            Your profile is completed
                        </p>
                    </div>


                    <div class="mb-4 text-center profile-mid-right-content">
                        <div class="py-2 border-bottom-liteAsh">
                            <p class="text-muted f-12 fw-bold">Employee Status</p>
                            <p v-if="_instance_profilePagesStore.employeeDetails.active == 1" class="f-12 fw-bold">
                                Active
                            </p>
                            <p v-else class="text-danger f-12 fw-bold">Not Active</p>
                        </div>
                        <div class="py-2 border-bottom-liteAsh">
                            <p class="text-muted f-12 fw-bold">Employee Code</p>
                            <p v-if="_instance_profilePagesStore.employeeDetails.user_code" class="f-12 fw-bold">
                                {{ _instance_profilePagesStore.employeeDetails.user_code }}
                            </p>
                            <p v-else class="f-12 fw-bold">-</p>
                        </div>
                        <div class="py-2 border-bottom-liteAsh">
                            <p class="text-muted f-12 fw-bold">Designation</p>
                            <p v-if="_instance_profilePagesStore.employeeDetails
                                .get_employee_office_details.designation
                                " class="f-12 fw-bold">
                                {{
                                    _instance_profilePagesStore.employeeDetails
                                        .get_employee_office_details.designation
                                }}
                            </p>
                            <p v-else class="f-12 fw-bold">-</p>
                        </div>
                        <div class="py-2 border-bottom-liteAsh">
                            <p class="text-muted f-12 fw-bold">Location</p>
                            <p v-if="_instance_profilePagesStore.employeeDetails
                                        .get_employee_office_details.work_location
                                    " class="f-12 fw-bold">
                                {{
                                    _instance_profilePagesStore.employeeDetails
                                        .get_employee_office_details.work_location
                                }}
                            </p>
                            <p v-else class="f-12 fw-bold">-</p>
                        </div>
                        <div class="py-2 border-bottom-liteAsh ml-3">
                            <p class="text-muted f-12 fw-bold">
                                Department
                                <a href="#" class="edit-icon" v-if="_instance_profilePagesStore.employeeDetails
                                .Current_login_user.org_role == 1 ||_instance_profilePagesStore.employeeDetails
                                .Current_login_user.org_role == 2 || _instance_profilePagesStore.employeeDetails
                                .Current_login_user.org_role == 3 " @click="dailogDepartment = true"><i class="ri-pencil-fill"></i></a>
                            </p>
                            <p v-if="_instance_profilePagesStore.employeeDetails
                                .get_employee_office_details.department_id
                                " class="f-12 fw-bold">
                                {{
                                    _instance_profilePagesStore.employeeDetails
                                        .get_employee_office_details.department_name
                                }}
                            </p>
                            <p v-else class="f-12 fw-bold">-</p>
                        </div>
                        <div class="py-2 border-bottom-liteAsh">
                            <p class="text-muted f-12 fw-bold">
                                Reporting To
                                <a href="#" v-if="_instance_profilePagesStore.employeeDetails
                                .Current_login_user.org_role == 1 ||_instance_profilePagesStore.employeeDetails
                                .Current_login_user.org_role == 2 || _instance_profilePagesStore.employeeDetails
                                .Current_login_user.org_role == 3  " class="edit-icon" @click="dailogReporting
            = true"><i class="ri-pencil-fill"></i>

                                </a>
                            </p>

                            <p v-if="_instance_profilePagesStore.employeeDetails
                                .get_employee_office_details.l1_manager_code
                                " class="f-12 fw-bold">
                                {{
                                    _instance_profilePagesStore.employeeDetails
                                        .get_employee_office_details.l1_manager_name
                                }}
                                 {{ _instance_profilePagesStore.employeeDetails }} -->
                              <!--  -
                                {{
                                    _instance_profilePagesStore.employeeDetails
                                        .get_employee_office_details.l1_manager_code
                                }}
                            </p>
                            <p v-else class="f-12 fw-bold">-</p>
                        </div>
                    </div>
                    <div class="text-center profile-bottom-right-content">
                         {{-- <button class="btn btn-danger"><i class="fa fa-sign-out me-2"></i> Logout </button> --}} -->
                        <!-- <button class="btn btn-danger">
                            <i class="fa fa-sign-out me-1"></i> Action
                        </button> -->
                   <!-- </div>
                </div>
            </div>
        </div>
    </div>
</div> -->
