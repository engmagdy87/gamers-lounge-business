const isDatesInProperSequence = function (date1, date2) {
    if (date1 === "" || date2 === "") return null
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    if (firstDate > secondDate) return false;
    else return true;
}


export default isDatesInProperSequence