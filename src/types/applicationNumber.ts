import { ComputeRange } from "../utils/computeRange";


type ApplicationTypeCodes = "AB" | "CD" | "EF" | "GH" | "IJ" | "KL" | "MN" | "OP" | "QR" | "ST" | "UV" | "WX" | "YZ";

type YearEnding = `${ComputeRange<6>[number]}`

type Year = `202${YearEnding}`

export type ApplicationNumber = `${ApplicationTypeCodes}${number}/${Year}`
