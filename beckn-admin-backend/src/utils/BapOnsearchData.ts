import axios from "axios";
import { BapOnsearchData } from "../db/models/BapOnsearchData.model";
import { getSettingValues } from "./networkSettings";

function combineURLs(baseURL: string, relativeURL: string) {
    return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
};

const getErrorFromResponse = (error: any) => {
    if (error.response) {
        if (error.response.data) {
            return { status: "error", message: error.response.data };
        }
    }
    return { status: "error", message: error.message };
};

export const createNewBapOnsearchData = async (body: BapOnsearchData) => {
    const bapOnsearchData = new BapOnsearchData(body);
    const saved_item = await bapOnsearchData.save();
    return saved_item;
}

export const getAllBapOnsearchDatas = async () => {
    const results = BapOnsearchData.findAll();
    return results;
}

export const getAllBAPs = async () => {
    const results = BapOnsearchData.findAll({ where: { BapOnsearchData_type: "BAP", active: true } });
    return results;
}

export const getAllBPPs = async () => {
    const results = BapOnsearchData.findAll({ where: { BapOnsearchData_type: "BPP", active: true } });
    return results;
}

export const getAllMockBPPs = async () => {
    const results = BapOnsearchData.findAll({ where: { BapOnsearchData_type: "BPP", active: true, is_mock: true } });
    return results;
}

export const getAllMockBapOnsearchDatas = async () => {
    const results = BapOnsearchData.findAll({ where: { active: true, is_mock: true } });
    return results;
}

// export const triggerSync = async (BapOnsearchDatas: BapOnsearchData[]) => {
//     const network_settings = await getSettingValues();
//     const promises = [];
//     for (let BapOnsearchData of BapOnsearchDatas) {
//         const data: { [key: string]: any } = {
//             bpp_id: BapOnsearchData.BapOnsearchData_name
//         }
//         if(BapOnsearchData.BapOnsearchData_type === "BPP") {
//             data.bpp_uri = BapOnsearchData.BapOnsearchData_endpoint;
//         } else {
//             data.bap_uri = BapOnsearchData.BapOnsearchData_endpoint;
//         }
//         for (let key of Object.keys(network_settings)) {
//             data[key] = network_settings[key];
//         }
//         promises.push(setBapOnsearchDataSettings(BapOnsearchData, data));
//     }
//     const results = await Promise.allSettled(promises);
//     return results;
// }

export const updateBapOnsearchData = async (body: BapOnsearchData) => {
    try {
        const record = await BapOnsearchData.update(body, { where: { id: body.id } });
        if (record[0] === 0) {
            return false;
        }
        return true;
    } catch (error) {
        throw (error);
    }
}

export const deleteBapOnsearchData = async (body: BapOnsearchData) => {
    try {
        const record = await BapOnsearchData.destroy({ where: { id: body.id } });
        if (record === 0) {
            return false;
        }
        return true;
    } catch (error) {
        throw (error);
    }
}

