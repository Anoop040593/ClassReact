const storage = {
    set(key, value) {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch(err) {
            console.error("error in saving to local storage", err);
        }
    },

    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item? JSON.parse(item) : defaultValue;
        } catch(err) {
            console.error("error reading from local storage", err);
            return defaultValue;
        }
    }
};

export default storage;