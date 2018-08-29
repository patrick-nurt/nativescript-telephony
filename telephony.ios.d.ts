export interface Telephony {
    allowsVOIP?: string;
    carrierName?: string;
    countryCode?: string;
    mcc?: string;
    mnc?: string;
}
export declare function Telephony(): Promise<any>;
