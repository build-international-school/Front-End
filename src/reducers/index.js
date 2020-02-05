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
    users: [
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
    error: '',
};

export const reducer = (state= initialState, action) => {
    switch (action.type) {
        case "ADDING_USER_START":
            return {
                ...state,
                isLoading: true
            };
        case "ADDING_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload
            };
        case "ADDING_USER_ERROR":
            return {
                error: action.payload
            };
        case "LOGIN_USER_START":
            return {
                ...state,
                isLoading: true
            };
        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload
            };
        case "LOGIN_USER_ERROR":
            return {
                error: action.payload
            };
        case "GET_USER_START":
            return {
                ...state,
                isLoading: true
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
        case "GET_ONE_STUDENT_START":
            return {
                ...state,
                isLoading: true 
            }
        case "GET_ONE_STUDENT_SUCCESS":
            return {
                ...state,
                isLoading: false,
                currentStudent: action.payload
            }
        default:
            return state;
    }
}