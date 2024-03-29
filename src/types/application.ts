import { DeepNullable } from "../utils/nullable";
import { Applicant } from "./applicant";
import { ApplicationNumber } from "./applicationNumber";
import { AttachmentList } from "./attachments";

export type Application = {
   applicant: Applicant;
   applicationDate: Date;
   applicationNumber: ApplicationNumber;
   attachments: Partial<AttachmentList>;
}

export type ApplicationDraft = DeepNullable<Application>;
