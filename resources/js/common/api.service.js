import { TOCA_WEBSERVICE_URL } from '@/common/config';

export const fetchEmpreendimentos = () => {

    const params = {
        u_wsdl: 'toim',
        s_wsdl: '9a87ds9f9w9w99KSS'
    }

    const formData = new FormData();

    for (let p in params) {
        formData.append(p, params[p]);
    }

    const headers = {
    };

    const request = {
        method: 'POST',
        headers: headers,
        body: formData
    }

    const url = `${TOCA_WEBSERVICE_URL}/lancamentos_pesquisa.php?webservice`;

    return fetch(url, request)
        .catch(err => {
            console.log(err)
        })
};