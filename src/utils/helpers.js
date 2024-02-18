export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export function validateName(name) {
    const wholeName = /^[a-zA-Z\s']{2,}$/;
    return wholeName.test(String(name));
}

export function validateMessage(message) {
    const m = /^[\s\S]{2,}$/;
    return m.test(String(message));
}