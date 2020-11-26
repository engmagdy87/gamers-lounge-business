const downloadAllJobApplicantsCSV = (applicants, jobTitle, departmentName) => {
    if (applicants.length === 0) return;
    let csvContent = "data:text/csv;charset=utf-8,";

    //******* Heading *******/
    const heading =
        "Full Name,Phone,Email,Country,City,Behance Link,Linkedin Link,Resume,";

    //******* Rows *******/
    let row = "";
    let rows = [heading];
    applicants.forEach(applicant => {
        const {
            full_name,
            phone,
            email,
            country,
            city,
            behance_link,
            linkedin_link,
            resume
        } = applicant;

        row = `${full_name},${phone},${email},${country},${city},${behance_link},${linkedin_link},${resume},`;
        rows.push(row);
    });

    csvContent += rows.join("\n").replace(/(^\[)|(\]$)/gm, "");

    const data = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", data);
    link.setAttribute(
        "download",
        `${jobTitle} - ${departmentName}.csv`
    );
    link.click();
}

const downloadJobApplicantCSV = (applicant, jobTitle, departmentName) => {
    let csvContent = "data:text/csv;charset=utf-8,";

    //******* Heading *******/
    const heading =
        "Full Name,Phone,Email,Country,City,Behance Link,Linkedin Link,Resume,";

    const {
        full_name,
        phone,
        email,
        country,
        city,
        behance_link,
        linkedin_link,
        resume
    } = applicant;

    //******* Row *******/
    const row = `${full_name},${phone},${email},${country},${city},${behance_link},${linkedin_link},${resume},`;

    csvContent += [heading, row].join("\n").replace(/(^\[)|(\]$)/gm, "");

    const data = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", data);
    link.setAttribute(
        "download",
        `${full_name} - ${jobTitle} - ${departmentName}.csv`
    );
    link.click();
}

export {
    downloadAllJobApplicantsCSV,
    downloadJobApplicantCSV
}