import axios from "axios";

async function Delete(uid) {
    let res = false;
    await axios.delete(`publishers/${uid}`).then(response => {
        res = response.data;
    }).catch(error => {
        console.log(error.message)
        res = false;
    })
    return res;
}

export default Delete;