// import { userConstants } from '../_constants';

// export function users(state = {}, action) {
//   switch (action.type) {
//     case userConstants.GETALL_REQUEST:
//       return {
//         loading: true
//       };
//     case userConstants.GETALL_SUCCESS:
//       return {
//         items: action.users
//       };
//     case userConstants.GETALL_FAILURE:
//       return { 
//         error: action.error
//       };
//     case userConstants.DELETE_REQUEST:
//       // add 'deleting:true' property to user being deleted
//       return {
//         ...state,
//         items: state.items.map(user =>
//           user.id === action.id
//             ? { ...user, deleting: true }
//             : user
//         )
//       };
//     case userConstants.DELETE_SUCCESS:
//       // remove deleted user from state
//       return {
//         items: state.items.filter(user => user.id !== action.id)
//       };
//     case userConstants.DELETE_FAILURE:
//       // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
//       return {
//         ...state,
//         items: state.items.map(user => {
//           if (user.id === action.id) {
//             // make copy of user without 'deleting:true' property
//             const { deleting, ...userCopy } = user;
//             // return copy of user with 'deleteError:[error]' property
//             return { ...userCopy, deleteError: action.error };
//           }

//           return user;
//         })
//       };
//     default:
//       return state
//   }
// }

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export default function reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}