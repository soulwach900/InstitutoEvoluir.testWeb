export function Google(inputLang, outputLang, content) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLang}&tl=${outputLang}&dt=t&q=${encodeURIComponent(content)}`;

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);
        xhr.responseType = "json";

        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = xhr.response;
                if (data && data[0] && data[0][0] && data[0][0][0]) {
                    resolve(data[0][0][0]);
                } else {
                    reject("Resposta inesperada da API");
                }
            } else {
                reject(`Erro na tradução: ${xhr.status}`);
            }
        };

        xhr.onerror = () => reject("Erro de rede");

        xhr.send();
    });
}
