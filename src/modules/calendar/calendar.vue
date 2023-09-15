<template>
   
    <div ref="calendarContainer" class="min-h-full min-w-fit text-gray-800 card" >
        <div class="min-w-max border  grid grid-cols-7  card-body ">
            <!-- Top navigation bar  -->
            <Top />

            <!-- Finding Days -->
            <div v-for="day in daysOfTheWeek" class="text-center text-sm md:text-base lg:text-lg font-semibold border py-2">
                {{ day.substring(0, 3) }}
            </div>

            <div v-if="firstDayOfCurrentMonth > 0" v-for="day in firstDayOfCurrentMonth" :key="day"
                class=" w-full border opacity-50 "></div>


            <!-- singleAttendanceDay Timesheet Data from current month  -->

            <div v-for="day in daysInCurrentMonth" :key="day" class=" h-16 py-3 shadow-sm  md:h-36 w-full border align-top "
                :class="{
                    'bg-slate-50 text-gray-600 font-medium': isToday(day),
                    'hover:bg-gray-100 hover:text-gray-700': !isToday(day),
                    'bg-gray-200': isWeekEndDays(day)
                }">


                <!-- EACH CELL -->
                <div 
                    v-for="singleAttendanceDay in currentMonthsingleAttendanceDay(day, singleAttendanceDay)"
                    class="hidden md:block">

                    <div>
                        <div
                            class="w-full h-full text-xs md:text-sm lg:text-base text-left transition-colors font-semibold relative">
                            <div class="flex justify-center">
                                <p class="mx-3 font-semibold text-sm">{{ dayjs(singleAttendanceDay.date).format('D') }}</p>
                            </div>

                            <!-- Week end -->

                            <div v-if="isWeekEndDays(day)" class="flex justify-center items-center">
                                <p v-if="singleAttendanceDay.isAbsent"
                                    class="px-auto font-semibold  fs-6  text-black text-center py-5">Week
                                    Off
                                </p>
                            </div>

                            <div v-else
                                class=" py-1 flex space-x-1 items-center  overflow-hidden  hover: cursor-pointer rounded-sm hp"
                                :class="[find(singleAttendanceDay).length > 20 ? 'whitespace-normal' : 'whitespace-nowrap']">
                                <div v-if="isFutureDate(day)"
                                    class="w-full my-3  p-2.5  rounded-sm mr-3 flex font-semibold "
                                    style="max-width: 140px;" :class="findAttendanceStatus(singleAttendanceDay)">
                                    <!-- <p class="font-sans w-2"> <i class="text-green-800 font-semibold text-sm"
                                            :class="findAttendanceMode(singleAttendanceDay.attendance_mode_checkin)"></i>
                                    </p> -->
                                    <p class="font-sans fs-6  mx-2">{{ find(singleAttendanceDay) }}<i
                                            v-if="singleAttendanceDay.isMOP"
                                            :class="icons(singleAttendanceDay.isMOP, singleAttendanceDay.mop_status)"
                                            style="font-size: 0.9rem" class="px-1"></i>
                                        <i v-else-if="singleAttendanceDay.isLC"
                                            :class="icons(singleAttendanceDay.isLC, singleAttendanceDay.lc_status)"
                                            style="font-size: 0.9rem" class="px-1"></i>
                                        <i v-else-if="singleAttendanceDay.isEG"
                                            :class="icons(singleAttendanceDay.isEG, singleAttendanceDay.eg_status)"
                                            style="font-size: 0.9rem" class="px-1"></i>
                                        <i v-else-if="singleAttendanceDay.isMIP"
                                            :class="icons(singleAttendanceDay.isMIP, singleAttendanceDay.mip_status)"
                                            style="font-size: 0.9rem" class="px-1"></i>
                                    </p>
                                </div>

                            </div>
                            <div v-if="!singleAttendanceDay.isAbsent"
                                class="hop  transition p-2 ease-in-out delay-150 bg-white border rounded-lg absolute  z-50">
                                <div
                                    class="w-full my-3  p-2.5  rounded-sm mr-3 flex  border-l-4 border-green-500 bg-green-50 text-green-600 font-medium fs-5">
                                    <i class="fa fa-arrow-down text-green-800  font-medium text-sm "
                                        style='transform: rotate(-45deg);'></i>
                                    <p class="text-green-800 font-sans font-semibold text-sm mx-1">
                                        {{ getSession(singleAttendanceDay.checkin_time) }}
                                    </p>
                                </div>
                                <div
                                    class="w-full my-3  p-2.5  rounded-sm mr-3 flex  border-l-4 border-red-500 bg-red-50 text-red-600 font-medium fs-5">
                                    <i class="fa fa-arrow-down font-medium text-sm text-red-800 "
                                        style='transform: rotate(230deg);'></i>
                                    <p class="text-red-800  font-sans font-semibold text-sm mx-1">
                                        {{ getSession(singleAttendanceDay.checkout_time) }}
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty Cells in month  -->
            <div v-if="lastEmptyCells > 0" v-for="day in lastEmptyCells" :key="day"
                class="h-16  md:h-36 w-full border rounded-lg opacity-50" ></div>

            <div class="rounded-lg md:hidden col-span-7 flex justify-between items-center p-2 ">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 cursor-pointer transition-all"
                        @click="calendarStore.decrementMonth(1)">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 cursor-pointer transition-all"
                        @click="calendarStore.incrementMonth(1)">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import Top from './topCalender.vue'
import { useCalendarStore } from './stores/calendar'
import dayjs from "dayjs";
import moment from "moment";









// const toCloseSideBar = (val) => {
//     console.log(val);
//     visibleRight.value = val
// }






const getSelectedCellValues = (selectedCells) => {
    // useTimesheet.classicTimesheetSidebar = true
    visibleRight.value = true

    currentlySelectedCellRecord.value = { ...selectedCells }
    if (selectedCells.isLC) {
        useTimesheet.lcDetails = { ...selectedCells }
    }
    if (selectedCells.isEG) {
        useTimesheet.egDetails = { ...selectedCells }
    }
    if (selectedCells.isMIP) {
        useTimesheet.mipDetails = { ...selectedCells }
    }
    if (selectedCells.isMOP) {
        useTimesheet.mopDetails = { ...selectedCells }
    }
    if (selectedCells.isAbsent) {
        useTimesheet.absentRegularizationDetails = { ...selectedCells }
    }
}


const findAttendanceStatus = (data) => {
    // console.log(data);
    if (data.isAbsent) {
        if (data.absent_status.includes('Approved')) {
            return 'border-l-4 border-green-500 bg-green-50 text-green-600 font-medium fs-5'
        } else
            if (data.absent_status.includes('Rejected')) {
                return 'border-l-4 border-red-500 bg-red-50 text-red-600 font-medium fs-5'
            } else
                if (data.absent_status.includes('Pending')) {
                    return 'border-l-4 border-yellow-500 bg-yellow-50 text-yellow-600 font-medium fs-5'
                } else
                    if (data.absent_status.includes('Revoked')) {
                        return 'border-l-4 border-gray-500 bg-gray-50 text-gray-600 font-medium fs-5'

                    } else {
                        return 'border-l-4 border-red-500 bg-red-50 text-red-600 font-medium fs-5 '
                    }
    } else {
        if (data.lc_status) {
            return 'border-l-4 border-yellow-500 bg-yellow-50 text-yellow-900 font-medium fs-5 rounded-lg'

        } else
            if (data.mip_status) {
                return 'border-l-4 border-blue-500 bg-blue-50 text-blue-600 font-medium fs-5 rounded-lg'

            } else
                if (data.eg_status) {
                    return 'border-l-4 border-yellow-500 bg-yellow-50 text-yellow-900 font-medium fs-5 rounded-lg'

                }
                else
                    if (data.mop_status) {
                        return 'border-l-4 border-blue-500 bg-blue-50 text-blue-600 font-medium fs-5 rounded-lg'

                    }
                    else {
                        return 'border-l-4 border-green-500 bg-green-50 text-green-600 font-medium fs-5 rounded-lg'

                    }
    }
}

const findAttendanceMode = (attendance_mode) => {
    // console.log(attendance_mode);
    if (attendance_mode == "biometric")
        // return '&nbsp;<i class="fa-solid fa-fingerprint"></i>';
        return 'fas fa-fingerprint fs-12'
    else
        if (attendance_mode == "web")
            return 'fa fa-laptop fs-12';
        else
            if (attendance_mode == "mobile")
                return 'fa fa-mobile-phone fs-12';
            else {
                return ''; // when attendance_mode column is empty.
            }
}
const icons = (isSelected, data) => {

    if (isSelected) {
        if (data == 'Approved') {
            return 'pi pi-check-circle text-green-600 font-semibold'
        } else
            if (data == 'Pending') {
                return 'pi pi-question-circle text-gray-600 font-semibold'
            } else
                if (data == 'Rejected') {
                    return 'pi pi-times-circle text-red-600 font-semibold'
                } else {
                    return 'pi pi-exclamation-circle text-yellow-600 font-semibold'
                }
    } else {
        console.log('no data');
    }

}

const find = (data) => {

    if (data.isAbsent) {

        if (data.absent_status.includes('Approved')) {
            return data.leave_type == 'Sick Leave / Casual Leave' ? 'Sl/CL Approved' : `${data.leave_type} Approved`
        } else
            if (data.absent_status.includes('Rejected')) {
                return data.leave_type == 'Sick Leave / Casual Leave' ? 'Sl/CL Rejected' : `${data.leave_type} Rejected`
            } else
                if (data.absent_status.includes('Pending')) {
                    return data.leave_type == 'Sick Leave / Casual Leave' ? 'Sl/CL Pending' : `${data.leave_type} Pending`
                } else
                    if (data.absent_status.includes('Revoked')) {
                        return `${data.leave_type} Revoked`

                    } else {
                        return 'Absent'

                    }
    } else {
        if (data.lc_status) {
            return 'Late coming'

        } else
            if (data.mip_status) {
                return 'Missed in punch'

            } else
                if (data.eg_status) {
                    return 'Early going'

                } else
                    if (data.mop_status) {
                        return 'Missed out punch'

                    } else {
                        return 'Present'

                    }
    }
}


const findCheckInStatus = (type, data) => {
    if (type == 'checkin') {
        if (data.isLC) {
            return 'Late coming'

        } else
            if (data.isMIP) {
                return 'Missed in punch'
            } else {
                return '-'
            }

    }
    if (type == 'checkout') {

        if (data.isEG) {
            return 'Early going'

        } else
            if (data.isMOP) {
                return 'Missed out punch'
            } else {
                return '-'
            }

    }

    if (type == 'checkInStatus') {

        if (data.lc_status == 'None' || data.lc_status == 'None') {
            return 'Not Applied'
        } else
            if (data.lc_status) {
                return data.lc_status
            } else
                if (data.mip_status) {
                    return data.mip_status
                } else {
                    return '-'
                }

    }

    if (type == 'checkOutStatus') {
        if (data.eg_status == 'None' || data.mop_status == 'None') {
            return 'Not Applied'
        } else
            if (data.eg_status) {
                return data.eg_status
            } else
                if (data.mop_status) {
                    return data.mop_status
                } else {
                    return '-'
                }

    }


}


const findAbsentStatus = (data) => {
    if (data.includes('Approved')) {
        return 'bg-green-50'
    } else
        if (data.includes('Pending')) {
            return 'bg-yellow-50'
        } else
            if (data.includes('Rejected')) {
                return 'bg-red-50'
            } else
                if (data.includes('Revoked')) {
                    return 'bg-slate-50'

                }
}

const props = defineProps({
    singleAttendanceDay: {
        type: Object,
        required: true,
    },
    sidebar: {
        type: Boolean,
        required: true
    }

});

const findAttendanceRegularizationStatus = (data) => {

    if (data.isLc) {
        if (data.lc_status.includes('Approved')) {
            return ' bg-green-50 text-green-600  fs-6 rounded-lg'
        } else
            if (data.lc_status.includes('Rejected')) {
                return ' bg-red-50 text-red-600  fs-6 rounded-lg'
            } else
                if (data.lc_status.includes('Pending')) {
                    return 'border-yellow-500 bg-yellow-50 text-yellow-600  fs-6 rounded-lg'
                } else
                    if (data.lc_status.includes('Revoked')) {
                        return ' bg-gray-50 text-gray-600  fs-6 rounded-lg'
                    }
                    else
                        if (data.lc_status.includes('None')) {
                            return ' bg-red-50 text-red-600  fs-6 rounded-lg'
                        }
    } else
        if (data.isMIP) {
            if (data.mip_status.includes('Approved')) {
                return ' bg-green-50 text-green-600  fs-6 rounded-lg'
            } else
                if (data.mip_status.includes('Rejected')) {
                    return ' bg-red-50 text-red-600  fs-6 rounded-lg'
                } else
                    if (data.mip_status.includes('Pending')) {
                        return 'border-yellow-500 bg-yellow-50 text-yellow-600  fs-6 rounded-lg'
                    } else
                        if (data.mip_status.includes('Revoked')) {
                            return ' bg-gray-50 text-gray-600  fs-6 rounded-lg'
                        }
                        else
                            if (data.mip_status.includes('None')) {
                                return ' bg-red-50 text-red-600  fs-6 rounded-lg'
                            }
        } else
            if (data.isEG) {
                if (data.eg_status.includes('Approved')) {
                    return ' bg-green-50 text-green-600  fs-6 rounded-lg'
                } else
                    if (data.eg_status.includes('Rejected')) {
                        return ' bg-red-50 text-red-600  fs-6 rounded-lg'
                    } else
                        if (data.eg_status.includes('Pending')) {
                            return 'border-yellow-500 bg-yellow-50 text-yellow-600  fs-6 rounded-lg'
                        } else
                            if (data.eg_status.includes('Revoked')) {
                                return ' bg-gray-50 text-gray-600  fs-6 rounded-lg'
                            }
                            else
                                if (data.eg_status.includes('None')) {
                                    return ' bg-red-50 text-red-600  fs-6 rounded-lg'
                                }
            } else
                if (data.isMOP) {
                    if (data.mop_status.includes('Approved')) {
                        return ' bg-green-50 text-green-600  fs-6 rounded-lg'
                    } else
                        if (data.mop_status.includes('Rejected')) {
                            return ' bg-red-50 text-red-600  fs-6 rounded-lg'
                        } else
                            if (data.mop_status.includes('Pending')) {
                                return 'border-yellow-500 bg-yellow-50 text-yellow-600  fs-6 rounded-lg'
                            } else
                                if (data.mop_status.includes('Revoked')) {
                                    return ' bg-gray-50 text-gray-600  fs-6 rounded-lg'
                                }
                                else
                                    if (data.mop_status.includes('None')) {
                                        return ' bg-red-50 text-red-600  fs-6 rounded-lg'
                                    }
                }


}


function capitalizeFLetter(name) {
    let result = name.charAt(0).toUpperCase() +
        name.slice(1)
        return result
}

const leaveShortFormat = (leave_type) => {
    if (leave_type == 'Sick Leave / Casual Leave') {
        return SL / CL
    } else {
        return leave_type
    }

}






const calendarStore = useCalendarStore();

calendarStore.$subscribe((mutation, state) => {
    getDaysInMonth();
    getFirstDayOfMonth();
});

// component variables
const daysOfTheWeek = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
};

const daysInCurrentMonth = ref(0);
const firstDayOfCurrentMonth = ref(0);
const lastEmptyCells = ref(0);
/**
 * Gets the number of days present in a month
 * The month is gotten from the calendar store
 */
const getDaysInMonth = () => {
    daysInCurrentMonth.value = new Date(
        calendarStore.getYear,
        calendarStore.getMonth + 1, // 👈️ months are 0-based
        0
    ).getDate();
};




/**
 * Gets in number, the first day of a month
 * The month is gotten from the calendar store
 */


const getFirstDayOfMonth = () => {
    firstDayOfCurrentMonth.value = new Date(
        calendarStore.getYear,
        calendarStore.getMonth,
        1
    ).getDay();
};



/**
 * Gets the last empty cells (if any) on the calendar grid
 */


const lastCalendarCells = () => {
    let totalGrid = firstDayOfCurrentMonth.value <= 5 ? 35 : 42;

    lastEmptyCells.value =
        totalGrid - daysInCurrentMonth.value - firstDayOfCurrentMonth.value;
};



/**
 * Validates a day to check if it's today or not
 *
 * @param {number} day The day to validate
 * @return boolean True or false if it's today or not
 */
const isToday = (day) => {
    let today = new Date();
    if (
        calendarStore.getYear == today.getFullYear() &&
        calendarStore.getMonth == today.getMonth() &&
        day == today.getDate()
    )
        return true;

    return false;
};


const isWeekEndDays = (day) => {
    var dayValue = new Date(
        calendarStore.getYear,
        calendarStore.getMonth,
        day
    ).getDay();


    if (dayValue == 0) {
        return true;
    } else {
        return false;
    }
}


const isFutureDate = (today) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate());

    var dayValue = new Date(
        calendarStore.getYear,
        calendarStore.getMonth,
        today
    )
    if (tomorrow > dayValue) {
        return true
    } else {
        return false
    }
}

const getSession = (time) => {

    let timeFormat = time == null ? "--:--:--" : moment(
        time, ["HH:mm"]).format('h:mm a');

    return timeFormat
};

const isNumber = (e) => {
    let char = String.fromCharCode(e.keyCode); // Get the character
    if (/^[0-9:]+$/.test(char)) return true; // Match with regex
    else e.preventDefault(); // If not match, don't add to input text
}

/**
 * Validates a day to check if event start date is current calendar date or not
 *
 * @param {number} day The calendar month date to check against
 * @param {string} startdate The event start date
 * @return boolean True or false if event is today or not
 */
const isEventToday = (day, startdate) => {
    if (
        calendarStore.getYear == startdate.substring(0, 4) &&
        calendarStore.getMonth + 1 == startdate.substring(5, 7) &&
        day == startdate.substring(8, 10)
    )
        return true;

    return false;
};

/**
 * Gets all the calendar singleAttendanceDay on a given day
 *
 * @param {number} day calendar month day whose event(s) we're getting
 * @param {array} singleAttendanceDay Array of singleAttendanceDay objects to filter through
 *
 * @return array Array of the filtered day's event(s)
 */
const currentMonthsingleAttendanceDay = (day, singleAttendanceDay) => {
    if (!singleAttendanceDay.length) return [];

    let todaysEvent = [];
    singleAttendanceDay.forEach((event) => {
        if (isEventToday(day, event.date)) {
            todaysEvent.push(event);
        }
    });

    return todaysEvent;
};

/**
 * Open the event details modal
 *
 * @param {number} day current calendar month day
 * @param {array} singleAttendanceDay Array of singleAttendanceDay objects to show on the modal
 *
 * @return null
 */

onMounted(() => {
    getDaysInMonth();
    getFirstDayOfMonth();
    lastCalendarCells();
});

onUpdated(() => {
    getFirstDayOfMonth();
    lastCalendarCells();
});
</script>

<style>
.hop {
    display: none;
    width: 150px;
    top: 80px;
    left: 25px;

}

.hp:hover+.hop {
    display: block;
}



.modal-enter-active,
.modal-leave-active {
    transition: translate 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
    /** opacity: 0; **/
    translate: 0px 100%;
}

.regualarization_button {
    padding: 1px !important;
    height: 14px;
    width: auto;
    min-width: 20px;
    border-radius: 2px;
    font-size: 8px !important;
    text-align: center;
}
</style>
