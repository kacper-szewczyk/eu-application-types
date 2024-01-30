import { ComputeRange } from "../utils/computeRange";

type AttachmentType = "EXPENSES" | "INCOME" | "OTHER";

export type AttachmentDetailsPayload = {
    description: string;
    type: AttachmentType;
    pageCount: number;
    file: File;
}

export type AttachmentDetails = Pick<AttachmentDetailsPayload, "description" | "type" | "pageCount"> & {
    fileUrl: string;
}

type AttachmentName = `Załącznik ${ComputeRange<5>[number]}`

export type AttachmentList = Record<AttachmentName, AttachmentDetails>;


