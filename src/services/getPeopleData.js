import { HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, VG_CHAR_LIST, SWAPI_PAGE, JPG } from "@consts/root";

export const getPeoplePageId = url => {
    return url.replace(HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PAGE, '');
}

const getId = (url, category) => {
    const id = url.replace(HTTPS+SWAPI_ROOT+category, '');
    return id.slice(1, id.length-1);
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImg = id => `${VG_CHAR_LIST}/${id+JPG}`;