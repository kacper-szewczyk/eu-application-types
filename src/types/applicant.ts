
export type PrivateApplicant = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    PESEL: string;
}

export type PrivateApplicantWithoutPESEL = Omit<PrivateApplicant, "PESEL"> & {
    birthDate: Date;
};

export type CompanyApplicant = Pick<PrivateApplicant, "firstName" | "lastName" | "email" | "phoneNumber" | "address" | "city" | "postalCode" | "country"> & {
    companyName: string;
    NIP: string;
}

export type Applicant = PrivateApplicant | CompanyApplicant | PrivateApplicantWithoutPESEL;