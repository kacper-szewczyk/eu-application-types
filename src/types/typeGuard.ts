import { PrivateApplicant } from "./applicant";

export function isObjectWithKey(
  data: unknown,
): data is { [key: string]: unknown } {
  return typeof data === 'object' && data !== null;
}

export const isApplicant = (applicant: unknown): applicant is PrivateApplicant => {
   return (
    isObjectWithKey(applicant) &&
    applicant.hasOwnProperty('PESEL')
  );
}