export const validationSignup = (values) => {
    let errors = {};
    const email_pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /.{4,}/; // At least 4 characters
    const phoneNumber_pattern = /.{10,}/; // At least 4 characters.......do a correct pattern
    

    if (!values.name.trim()) {
        errors.name = "Username should not be empty";
    }  else {
        errors.name = "";
    }

    if (!values.phoneNumber.trim()) {
        errors.phoneNumber = "Phone Number should not be empty";
    } else if (!phoneNumber_pattern.test(values.email)) {
        errors.phoneNumber = "Invalid phoneNumberNumber";
    } else {
        errors.phoneNumber = "";
    }
    if (!values.email.trim()) {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email";
    } else {
        errors.email = "";
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must have at least four characters";
    } else {
        errors.password = "";
    }

    return errors;
};
