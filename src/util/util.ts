import { useGlobalStore } from "@/store/commonStore";

export const formatTimestamp = (timestamp: number | string | Date, timeZone: 'UTC' | 'KST' = 'UTC') => {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timeZone === 'KST' ? 'Asia/Seoul' : 'UTC',
    };
    const parts = new Intl.DateTimeFormat('en-GB', options).formatToParts(date);
    const get = (type: string) => parts.find(p => p.type === type)?.value.padStart(2, '0');
    return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')}`;
};

export const setAlert = (title,contents) => {
    const msg = {
        isShow: true,
        title: title,
        contents: contents,
    }
    useGlobalStore.getState().setAlert(msg);
};

export const resetAlert = () => {
    useGlobalStore.getState().resetAlert();
};