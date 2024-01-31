import { ComputeRange } from "../utils/computeRange";


type ApplicationTypeCodes = "AB" | "CD" | "EF" | "GH" | "IJ" | "KL" | "MN" | "OP" | "QR" | "ST" | "UV" | "WX" | "YZ";

type ApplicationYearEnding = `${ComputeRange<6>[number]}`

type ApplicationYear = `202${ApplicationYearEnding}`

export type ApplicationNumber = `${ApplicationTypeCodes}${number}/${ApplicationYear}`
