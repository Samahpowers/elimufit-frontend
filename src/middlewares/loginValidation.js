export const validationLogins = (values) => {
    let errors = {};

    if (values.email === "") {
        errors.email = "Email should not be empty";
    } else {
        errors.email = "";
    }

    if (values.password === "") {
        errors.password = "Password should not be empty";
    } else {
        errors.password = "";
    }

    return errors;
};
