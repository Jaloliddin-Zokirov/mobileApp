import React, { createContext, useReducer } from "react";

export const StoreContext = createContext();

const StoreWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreWrapper;

const initialState = {
  theme: null,
  loading: false,
  money: '0',
  dateOfBirth: null,
  name: 'Enter name',
  company: 'Enter company',
  gander: null,
  email: 'Enter email',
  themeColor: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "theme": {
      return {
        ...state,
        theme: action.payload,
      };
    }

    case "money": {
      return {
        ...state,
        money: action.payload,
      }
    }

    case "dateOfBirth": {
      return {
        ...state,
        dateOfBirth: action.payload,
      }
    }

    case "name": {
      return {
        ...state,
        name: action.payload,
      }
    }

    case "company": {
      return {
        ...state,
        company: action.payload,
      }
    }

    case "gander": {
      return {
        ...state,
        gander: action.payload,
      }
    }

    case "email": {
      return {
        ...state,
        email: action.payload,
      }
    }

    case "loading": {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case "themeColor": {
      return {
        ...state,
        themeColor: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};