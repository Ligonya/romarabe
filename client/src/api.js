const API_URL = 'http://localhost:8080';

export const convertNumber = ({ source, target, value }) => {
    const route = `${API_URL}/convert/${source}-to-${target}`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({ value }),
    };

    return fetch(route, options).then(response => {
        if (response.status === 200)
            return response.text();

        throw response.text();
    });
};

