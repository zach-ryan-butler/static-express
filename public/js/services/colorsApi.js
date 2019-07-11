export const getColors = () => {
    return fetch('/api/v1/colors')
        .then(res => res.json());
};

export const getSpecficColor = (color) => {
    return fetch(`/api/v1/colors/${color}`)
        .then(res => res.json());
};

