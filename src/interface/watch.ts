export interface IWatch {
    AR: IProvider;
    AT: IProvider;
    AU: IProvider;
    BE: IProvider;
    BR: IProvider;
    CA: IProvider;
    CH: IProvider;
    CL: IProvider;
    CO: IProvider;
    CZ: IProvider;
    DE: IProvider;
    DK: IProvider;
    EC: IProvider;
    EE: IProvider;
    ES: IProvider;
    FI: IProvider;
    FR: IProvider;
    GB: IProvider;
    GR: IProvider;
    HU: IProvider;
    ID: IProvider;
    IE: IProvider;
    IN: IProvider;
    IT: IProvider;
    JP: IProvider;
    KR: IProvider;
    LT: IProvider;
    LV: IProvider;
    MX: IProvider;
    MY: IProvider;
    NL: IProvider;
    NO: IProvider;
    NZ: IProvider;
    PE: IProvider;
    PH: IProvider;
    PL: IProvider;
    PT: IProvider;
    RO: IProvider;
    RU: IProvider;
    SE: IProvider;
    SG: IProvider;
    TH: IProvider;
    TR: IProvider;
    US: IProvider;
    VE: IProvider;
    ZA: IProvider;
}

export interface IProviderProperty {
    display_priority:number;
    logo_path:string;
    provider_id:number;
    provider_name:string;
}


export interface IProvider {
    link: string;
    flatrate: IProviderProperty[];
    rent: IProviderProperty[];
    buy: IProviderProperty[];
}
export interface IWatchResponse {
    id: string;
    results: IWatch;
}