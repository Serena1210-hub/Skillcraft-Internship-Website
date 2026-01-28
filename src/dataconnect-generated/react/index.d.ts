import { CreateInternshipData, CreateInternshipVariables, ListInternshipsData, ApplyToInternshipData, ApplyToInternshipVariables, GetStudentApplicationsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateInternship(options?: useDataConnectMutationOptions<CreateInternshipData, FirebaseError, CreateInternshipVariables>): UseDataConnectMutationResult<CreateInternshipData, CreateInternshipVariables>;
export function useCreateInternship(dc: DataConnect, options?: useDataConnectMutationOptions<CreateInternshipData, FirebaseError, CreateInternshipVariables>): UseDataConnectMutationResult<CreateInternshipData, CreateInternshipVariables>;

export function useListInternships(options?: useDataConnectQueryOptions<ListInternshipsData>): UseDataConnectQueryResult<ListInternshipsData, undefined>;
export function useListInternships(dc: DataConnect, options?: useDataConnectQueryOptions<ListInternshipsData>): UseDataConnectQueryResult<ListInternshipsData, undefined>;

export function useApplyToInternship(options?: useDataConnectMutationOptions<ApplyToInternshipData, FirebaseError, ApplyToInternshipVariables>): UseDataConnectMutationResult<ApplyToInternshipData, ApplyToInternshipVariables>;
export function useApplyToInternship(dc: DataConnect, options?: useDataConnectMutationOptions<ApplyToInternshipData, FirebaseError, ApplyToInternshipVariables>): UseDataConnectMutationResult<ApplyToInternshipData, ApplyToInternshipVariables>;

export function useGetStudentApplications(options?: useDataConnectQueryOptions<GetStudentApplicationsData>): UseDataConnectQueryResult<GetStudentApplicationsData, undefined>;
export function useGetStudentApplications(dc: DataConnect, options?: useDataConnectQueryOptions<GetStudentApplicationsData>): UseDataConnectQueryResult<GetStudentApplicationsData, undefined>;
