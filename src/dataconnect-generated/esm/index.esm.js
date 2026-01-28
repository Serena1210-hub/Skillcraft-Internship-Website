import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'skillcraft-internship-website',
  location: 'us-east4'
};

export const createInternshipRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInternship', inputVars);
}
createInternshipRef.operationName = 'CreateInternship';

export function createInternship(dcOrVars, vars) {
  return executeMutation(createInternshipRef(dcOrVars, vars));
}

export const listInternshipsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListInternships');
}
listInternshipsRef.operationName = 'ListInternships';

export function listInternships(dc) {
  return executeQuery(listInternshipsRef(dc));
}

export const applyToInternshipRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ApplyToInternship', inputVars);
}
applyToInternshipRef.operationName = 'ApplyToInternship';

export function applyToInternship(dcOrVars, vars) {
  return executeMutation(applyToInternshipRef(dcOrVars, vars));
}

export const getStudentApplicationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetStudentApplications');
}
getStudentApplicationsRef.operationName = 'GetStudentApplications';

export function getStudentApplications(dc) {
  return executeQuery(getStudentApplicationsRef(dc));
}

