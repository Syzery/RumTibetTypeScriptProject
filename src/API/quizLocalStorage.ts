export const getDataLocalStorageQuiz = (name : string) => {
    const data = window.localStorage.getItem(name);
    return data === null ? null : JSON.parse(data);
};

export const setDataLocalStorageQuiz = (name: string, data: number | { Golang: { name: string; value: number }; Java: { name: string; value: number }; CPP: { name: string; value: number }; JavaScript: { name: string; value: number }; Haskell: { name: string; value: number }; Elixir: { name: string; value: number }; Python: { name: string; value: number } }) => {
    const dataJSON = JSON.stringify(data);
    window.localStorage.setItem(name, dataJSON);
};

export const removeDataLocalStorageQuiz = (name : string) => {
    return window.localStorage.removeItem(name);
};