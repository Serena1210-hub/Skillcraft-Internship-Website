import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Application_Key {
  id: UUIDString;
  __typename?: 'Application_Key';
}

export interface ApplyToInternshipData {
  application_insert: Application_Key;
}

export interface ApplyToInternshipVariables {
  internshipId: UUIDString;
}

export interface CreateInternshipData {
  internship_insert: Internship_Key;
}

export interface CreateInternshipVariables {
  applicationDeadline: DateString;
  companyName: string;
  description: string;
  location: string;
  title: string;
}

export interface GetStudentApplicationsData {
  studentProfiles: ({
    applications_on_studentProfile: ({
      id: UUIDString;
      internship: {
        title: string;
        companyName: string;
      };
        status: string;
        appliedAt: TimestampString;
    } & Application_Key)[];
  })[];
}

export interface Internship_Key {
  id: UUIDString;
  __typename?: 'Internship_Key';
}

export interface ListInternshipsData {
  internships: ({
    id: UUIDString;
    title: string;
    companyName: string;
    location: string;
    applicationDeadline: DateString;
  } & Internship_Key)[];
}

export interface Message_Key {
  id: UUIDString;
  __typename?: 'Message_Key';
}

export interface StudentProfile_Key {
  id: UUIDString;
  __typename?: 'StudentProfile_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateInternshipRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInternshipVariables): MutationRef<CreateInternshipData, CreateInternshipVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInternshipVariables): MutationRef<CreateInternshipData, CreateInternshipVariables>;
  operationName: string;
}
export const createInternshipRef: CreateInternshipRef;

export function createInternship(vars: CreateInternshipVariables): MutationPromise<CreateInternshipData, CreateInternshipVariables>;
export function createInternship(dc: DataConnect, vars: CreateInternshipVariables): MutationPromise<CreateInternshipData, CreateInternshipVariables>;

interface ListInternshipsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListInternshipsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListInternshipsData, undefined>;
  operationName: string;
}
export const listInternshipsRef: ListInternshipsRef;

export function listInternships(): QueryPromise<ListInternshipsData, undefined>;
export function listInternships(dc: DataConnect): QueryPromise<ListInternshipsData, undefined>;

interface ApplyToInternshipRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ApplyToInternshipVariables): MutationRef<ApplyToInternshipData, ApplyToInternshipVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ApplyToInternshipVariables): MutationRef<ApplyToInternshipData, ApplyToInternshipVariables>;
  operationName: string;
}
export const applyToInternshipRef: ApplyToInternshipRef;

export function applyToInternship(vars: ApplyToInternshipVariables): MutationPromise<ApplyToInternshipData, ApplyToInternshipVariables>;
export function applyToInternship(dc: DataConnect, vars: ApplyToInternshipVariables): MutationPromise<ApplyToInternshipData, ApplyToInternshipVariables>;

interface GetStudentApplicationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetStudentApplicationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetStudentApplicationsData, undefined>;
  operationName: string;
}
export const getStudentApplicationsRef: GetStudentApplicationsRef;

export function getStudentApplications(): QueryPromise<GetStudentApplicationsData, undefined>;
export function getStudentApplications(dc: DataConnect): QueryPromise<GetStudentApplicationsData, undefined>;

