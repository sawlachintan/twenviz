import { FC, useReducer, useMemo, createContext } from "react";

type STATES = {
    team: string;
    years: number[];
};

type actionProps = {
    [index: string]: string;
};

// const reducer = (
//     state: STATES,
//     action: { type: string; payload: number[] | string }
// ): STATES => {
//     switch (action.type) {
//         case "CHANGE TEAM":
//             window.localStorage.setItem("team", action.payload as string);
//             return { ...state, team: action.payload as string };
//         case "CHANGE YEARS":
//             window.localStorage.setItem("year0", action.payload[0] as string);
//             window.localStorage.setItem("year1", action.payload[1] as string);
//             return { ...state, years: action.payload as number[] };
//         default:
//             return state;
//     }
// };

export const FilterContext = createContext<any>(null);

export const ACTIONS: actionProps = {
    TEAM: "CHANGE TEAM",
    YEARS: "CHANGE YEARS",
};

type FilterProps = {
    children: JSX.Element | JSX.Element[];
};

export const FilterProvider: FC<FilterProps> = ({ children }) => {
    const reducer = (
        state: STATES,
        action: { type: string; payload: number[] | string }
    ): STATES => {
        switch (action.type) {
            case "CHANGE TEAM":
                window.localStorage.setItem("team", action.payload as string);
                return { ...state, team: action.payload as string };
            case "CHANGE YEARS":
                window.localStorage.setItem(
                    "year0",
                    action.payload[0] as string
                );
                window.localStorage.setItem(
                    "year1",
                    action.payload[1] as string
                );
                return { ...state, years: action.payload as number[] };
            default:
                return state;
        }
    };

    const initialTeam: string | null = window.localStorage.getItem("team");
    const initialYear0: string | null = window.localStorage.getItem("year0");
    const initialYear1: string | null = window.localStorage.getItem("year1");

    const initialState: STATES = {
        team: initialTeam ? initialTeam : "csk",
        years:
            initialYear0 && initialYear1
                ? [parseInt(initialYear0), parseInt(initialYear1)]
                : [2008, 2021],
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    );
};
