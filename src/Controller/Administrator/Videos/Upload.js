import axios from "axios";

async function Upload(reqBody) {
    let res = false;
    await axios.post(`contents` , reqBody , {
        'Content-Type': 'multipart/form-data',
    } ).then(response => {
        res = !!(response.data.result && response.data.is_logged);
    }).catch(error => {
        console.log(error.message)
        res = false;
    })
    return res;
}

export default Upload;