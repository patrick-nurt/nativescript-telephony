export interface TelephonyInfo {
    countryCode?: string;
    simOperator?: string;
    carrierName?: string;
    callState?: string;
    dataActivity?: string;
    networkType?: number;
    phoneType?: number;
    simState?: number;
    isNetworkRoaming?: string;
    mcc?: string;
    mnc?: string;
    phoneNumber?: string;
    deviceId?: string;
    deviceSoftwareVersion?: string;
    simSerialNumber?: string;
    subscriberId?: string;
}
export declare function Telephony(askForPermission?: boolean): Promise<TelephonyInfo>;
