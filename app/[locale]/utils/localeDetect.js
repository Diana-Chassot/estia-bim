import { baseUrl } from "./baseUrl";
export function localeDetect(locale) {
    let url;
    if (locale === "fr") {
        url = baseUrl
    } else {
        url = `${baseUrl}/${locale}`
    }
    return url;
}