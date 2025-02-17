export declare class NoRequiredImport extends Error {
    constructor(inputName: string);
}
export declare class NoReportFile extends Error {
    constructor(fileName: string);
}
export declare class InvalidJsonContent extends Error {
    constructor(fileName: string);
}
export declare class InvalidSarifFormat extends Error {
    constructor(fileName: string);
}
export declare class InvalidSarifViolationData extends Error {
    constructor();
}
export declare class InvalidSarifDriver extends Error {
    constructor(driverName: string);
}
