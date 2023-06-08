/**
 * Check if a permission is granted
 * @param {String} perm  - Is the permission that the user have
 * @param {String} reqPerm - Is the required permissions
 * @returns {Boolean}
 */
function checkSingle(perm: string, reqPerm: string) {
    let answer = false

    if (perm === "*") answer = true;
    else {
        let subRP = reqPerm.split('.');
        let sub = perm.split(".")

        if (subRP.length < sub.length) answer = false;
        else {
            let i = 0;
            for (const rp of subRP) {
                i = subRP.findIndex((e) => e === rp)
                console.log(i, rp, sub[i], subRP.length)
                if (rp != sub[i]) break; 
                else i++;
            }

            if (i == subRP.length || i == sub.length) answer = true;
        }
    }


    return answer;
}


/**
 * Check if a permission is granted
 * @param {Array<String>} perm  - Is the permission that the user have
 * @param {Array<String>} reqPerm - Is the required permissions
 * @returns {Boolean}
 */
function checkList(perm: string[], reqPerm: string[]) {
    let answer = false, tl = 0, rql = reqPerm.length;

    for (const rp of reqPerm) {
        for (const p of perm) {
            if (checkSingle(p, rp)) tl++;
        }
    }

    if (rql == tl) answer = true

    return answer;
}

export default {
    checkList,
    checkSingle
}