const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'skillcraft-internship-website',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createInternshipRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInternship', inputVars);
}
createInternshipRef.operationName = 'CreateInternship';
exports.createInternshipRef = createInternshipRef;

exports.createInternship = function createInternship(dcOrVars, vars) {
  return executeMutation(createInternshipRef(dcOrVars, vars));
};

const listInternshipsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListInternships');
}
listInternshipsRef.operationName = 'ListInternships';
exports.listInternshipsRef = listInternshipsRef;

exports.listInternships = function listInternships(dc) {
  return executeQuery(listInternshipsRef(dc));
};

const applyToInternshipRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ApplyToInternship', inputVars);
}
applyToInternshipRef.operationName = 'ApplyToInternship';
exports.applyToInternshipRef = applyToInternshipRef;

exports.applyToInternship = function applyToInternship(dcOrVars, vars) {
  return executeMutation(applyToInternshipRef(dcOrVars, vars));
};

const getStudentApplicationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetStudentApplications');
}
getStudentApplicationsRef.operationName = 'GetStudentApplications';
exports.getStudentApplicationsRef = getStudentApplicationsRef;

exports.getStudentApplications = function getStudentApplications(dc) {
  return executeQuery(getStudentApplicationsRef(dc));
};
