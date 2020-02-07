// Reducers index.js

const initialState = {
    students: [
        {
            id: null,
            first_name: '',
            last_name: '',
            grade: '',
            address: '',
            img_url: '',
            background: '',
            status: '',
            age: '',
            insurance: false,
            exp_date: '',
            birth_certificate: true,
            special_needs: '',
            representative_name: '',
            representative_contact: ''
        }
    ],
    currentStudent: {
        id: null,
        first_name: '',
        last_name: '',
        grade: '',
        address: '',
        img_url: '',
        background: '',
        status: '',
        age: '',
        insurance: false,
        exp_date: '',
        birth_certificate: true,
        special_needs: '',
        representative_name: '',
        representative_contact: ''
    },
    workers: [
        {
            id: null,
            password: '', // 8 char min - required
            email: '', // must include @ and . - required
            phone: '',
            first_name: '', // required
            last_name: '', // required,
            type: '', // admin or worker - required
            organization: ''
        }
    ],
    admins: [
        {
            id: null,
            password: '', // 8 char min - required
            email: '', // must include @ and . - required
            phone: '',
            first_name: '', // required
            last_name: '', // required,
            type: '', // admin or worker - required
            organization: ''
        }
    ],
    organizations: [],
    visits: [
        {
            first_name: null,
            last_name: null,
            email: null,
            date: null,
            time: null,
        }
    ],
    currentUser: {
        id: null,
            password: '', // 8 char min - required
            email: '', // must include @ and . - required
            phone: '',
            first_name: '', // required
            last_name: '', // required,
            type: '', // admin or worker - required
            organization: ''
    },
    isLoading: false,
    isEditing: false,
    error: null,
};

export const reducer = (state= initialState, action) => {
    switch (action.type) {
        case "ADDING_USER_START":
            return {
                ...state,
                isLoading: true,
            };
        case "ADDING_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload
            };
        case "ADDING_USER_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "LOGIN_USER_START":
            return {
                ...state,
                isLoading: true,
            };
        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload
            };
        case "LOGIN_USER_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "GET_STUDENTS_START":
            return {
                ...state,
                isLoading: true,
            }
        case "GET_STUDENTS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                students: action.payload
            }
        case "GET_STUDENTS_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "GET_ONE_STUDENT_START":
            return {
                ...state,
                isLoading: true,
            }
        case "GET_ONE_STUDENT_SUCCESS":
            return {
                ...state,
                isLoading: false,
                currentStudent: action.payload
            }
        case "GET_ONE_STUDENT_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "ADDING_STUDENT_START":
            return {
                ...state,
                isLoading: true,
            }
        case "ADDING_STUDENT_SUCCESS":
            return {
                ...state,
                isLoading: false,
                students: [
                    ...state.students,
                    action.payload
                ]
            };
        case "ADDING_STUDENT_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "EDIT_STUDENT_START":
            return {
                ...state,
                isLoading: true,
            };
        case "EDIT_STUDENT_SUCCESS":
            return {
                ...state,
                isLoading: false,
            };
        case "EDIT_STUDENT_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "DELETE_STUDENT_START":
            return {
                ...state,
                isLoading: true,
            }
        case "DELETE_STUDENT_SUCCESS":
            return {
                ...state,
                isLoading: false
            }
        case "DELETE_STUDENT_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "GET_WORKERS_START":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_WORKERS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                workers: action.payload
            };
        case "GET_WORKERS_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "CREATE_ORGS_LIST":
            return {
                ...state,
                organizations: action.payload
            };
        case "GET_ADMINS_START":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_ADMINS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                admins: action.payload
            };
        case "GET_ADMINS_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "ADD_VISIT":
            return {
                ...state,
                visits: [
                    ...state.visits,
                    action.payload
                ]
            }
        // case "UPDATE_PIC_START":
        //     return {
        //         ...state,
        //         //update the students...
        //     }
        default:
            return state;
    }
}