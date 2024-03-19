enum ActionType {
    ADD_NOTES = "ADD_NOTES",
    DELETE_NOTES = "DELETE_NOTES"
}

interface Note {
    userId: number;
    id: number;
    title: string;
    text: string;
}

interface Action {
    type: ActionType;
    payload: Note[];
}

const notes = (state = [], action: Action) => {
    switch(action.type) {
        case "ADD_NOTES":
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export default notes;