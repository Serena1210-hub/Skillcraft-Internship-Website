# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListInternships*](#listinternships)
  - [*GetStudentApplications*](#getstudentapplications)
- [**Mutations**](#mutations)
  - [*CreateInternship*](#createinternship)
  - [*ApplyToInternship*](#applytointernship)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListInternships
You can execute the `ListInternships` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listInternships(): QueryPromise<ListInternshipsData, undefined>;

interface ListInternshipsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListInternshipsData, undefined>;
}
export const listInternshipsRef: ListInternshipsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listInternships(dc: DataConnect): QueryPromise<ListInternshipsData, undefined>;

interface ListInternshipsRef {
  ...
  (dc: DataConnect): QueryRef<ListInternshipsData, undefined>;
}
export const listInternshipsRef: ListInternshipsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listInternshipsRef:
```typescript
const name = listInternshipsRef.operationName;
console.log(name);
```

### Variables
The `ListInternships` query has no variables.
### Return Type
Recall that executing the `ListInternships` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListInternshipsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListInternshipsData {
  internships: ({
    id: UUIDString;
    title: string;
    companyName: string;
    location: string;
    applicationDeadline: DateString;
  } & Internship_Key)[];
}
```
### Using `ListInternships`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listInternships } from '@dataconnect/generated';


// Call the `listInternships()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listInternships();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listInternships(dataConnect);

console.log(data.internships);

// Or, you can use the `Promise` API.
listInternships().then((response) => {
  const data = response.data;
  console.log(data.internships);
});
```

### Using `ListInternships`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listInternshipsRef } from '@dataconnect/generated';


// Call the `listInternshipsRef()` function to get a reference to the query.
const ref = listInternshipsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listInternshipsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.internships);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.internships);
});
```

## GetStudentApplications
You can execute the `GetStudentApplications` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStudentApplications(): QueryPromise<GetStudentApplicationsData, undefined>;

interface GetStudentApplicationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetStudentApplicationsData, undefined>;
}
export const getStudentApplicationsRef: GetStudentApplicationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStudentApplications(dc: DataConnect): QueryPromise<GetStudentApplicationsData, undefined>;

interface GetStudentApplicationsRef {
  ...
  (dc: DataConnect): QueryRef<GetStudentApplicationsData, undefined>;
}
export const getStudentApplicationsRef: GetStudentApplicationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStudentApplicationsRef:
```typescript
const name = getStudentApplicationsRef.operationName;
console.log(name);
```

### Variables
The `GetStudentApplications` query has no variables.
### Return Type
Recall that executing the `GetStudentApplications` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStudentApplicationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetStudentApplications`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStudentApplications } from '@dataconnect/generated';


// Call the `getStudentApplications()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStudentApplications();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStudentApplications(dataConnect);

console.log(data.studentProfiles);

// Or, you can use the `Promise` API.
getStudentApplications().then((response) => {
  const data = response.data;
  console.log(data.studentProfiles);
});
```

### Using `GetStudentApplications`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStudentApplicationsRef } from '@dataconnect/generated';


// Call the `getStudentApplicationsRef()` function to get a reference to the query.
const ref = getStudentApplicationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStudentApplicationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studentProfiles);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studentProfiles);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateInternship
You can execute the `CreateInternship` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createInternship(vars: CreateInternshipVariables): MutationPromise<CreateInternshipData, CreateInternshipVariables>;

interface CreateInternshipRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInternshipVariables): MutationRef<CreateInternshipData, CreateInternshipVariables>;
}
export const createInternshipRef: CreateInternshipRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInternship(dc: DataConnect, vars: CreateInternshipVariables): MutationPromise<CreateInternshipData, CreateInternshipVariables>;

interface CreateInternshipRef {
  ...
  (dc: DataConnect, vars: CreateInternshipVariables): MutationRef<CreateInternshipData, CreateInternshipVariables>;
}
export const createInternshipRef: CreateInternshipRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInternshipRef:
```typescript
const name = createInternshipRef.operationName;
console.log(name);
```

### Variables
The `CreateInternship` mutation requires an argument of type `CreateInternshipVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateInternshipVariables {
  applicationDeadline: DateString;
  companyName: string;
  description: string;
  location: string;
  title: string;
}
```
### Return Type
Recall that executing the `CreateInternship` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInternshipData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInternshipData {
  internship_insert: Internship_Key;
}
```
### Using `CreateInternship`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInternship, CreateInternshipVariables } from '@dataconnect/generated';

// The `CreateInternship` mutation requires an argument of type `CreateInternshipVariables`:
const createInternshipVars: CreateInternshipVariables = {
  applicationDeadline: ..., 
  companyName: ..., 
  description: ..., 
  location: ..., 
  title: ..., 
};

// Call the `createInternship()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInternship(createInternshipVars);
// Variables can be defined inline as well.
const { data } = await createInternship({ applicationDeadline: ..., companyName: ..., description: ..., location: ..., title: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInternship(dataConnect, createInternshipVars);

console.log(data.internship_insert);

// Or, you can use the `Promise` API.
createInternship(createInternshipVars).then((response) => {
  const data = response.data;
  console.log(data.internship_insert);
});
```

### Using `CreateInternship`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInternshipRef, CreateInternshipVariables } from '@dataconnect/generated';

// The `CreateInternship` mutation requires an argument of type `CreateInternshipVariables`:
const createInternshipVars: CreateInternshipVariables = {
  applicationDeadline: ..., 
  companyName: ..., 
  description: ..., 
  location: ..., 
  title: ..., 
};

// Call the `createInternshipRef()` function to get a reference to the mutation.
const ref = createInternshipRef(createInternshipVars);
// Variables can be defined inline as well.
const ref = createInternshipRef({ applicationDeadline: ..., companyName: ..., description: ..., location: ..., title: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInternshipRef(dataConnect, createInternshipVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.internship_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.internship_insert);
});
```

## ApplyToInternship
You can execute the `ApplyToInternship` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
applyToInternship(vars: ApplyToInternshipVariables): MutationPromise<ApplyToInternshipData, ApplyToInternshipVariables>;

interface ApplyToInternshipRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ApplyToInternshipVariables): MutationRef<ApplyToInternshipData, ApplyToInternshipVariables>;
}
export const applyToInternshipRef: ApplyToInternshipRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
applyToInternship(dc: DataConnect, vars: ApplyToInternshipVariables): MutationPromise<ApplyToInternshipData, ApplyToInternshipVariables>;

interface ApplyToInternshipRef {
  ...
  (dc: DataConnect, vars: ApplyToInternshipVariables): MutationRef<ApplyToInternshipData, ApplyToInternshipVariables>;
}
export const applyToInternshipRef: ApplyToInternshipRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the applyToInternshipRef:
```typescript
const name = applyToInternshipRef.operationName;
console.log(name);
```

### Variables
The `ApplyToInternship` mutation requires an argument of type `ApplyToInternshipVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ApplyToInternshipVariables {
  internshipId: UUIDString;
}
```
### Return Type
Recall that executing the `ApplyToInternship` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ApplyToInternshipData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ApplyToInternshipData {
  application_insert: Application_Key;
}
```
### Using `ApplyToInternship`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, applyToInternship, ApplyToInternshipVariables } from '@dataconnect/generated';

// The `ApplyToInternship` mutation requires an argument of type `ApplyToInternshipVariables`:
const applyToInternshipVars: ApplyToInternshipVariables = {
  internshipId: ..., 
};

// Call the `applyToInternship()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await applyToInternship(applyToInternshipVars);
// Variables can be defined inline as well.
const { data } = await applyToInternship({ internshipId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await applyToInternship(dataConnect, applyToInternshipVars);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
applyToInternship(applyToInternshipVars).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

### Using `ApplyToInternship`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, applyToInternshipRef, ApplyToInternshipVariables } from '@dataconnect/generated';

// The `ApplyToInternship` mutation requires an argument of type `ApplyToInternshipVariables`:
const applyToInternshipVars: ApplyToInternshipVariables = {
  internshipId: ..., 
};

// Call the `applyToInternshipRef()` function to get a reference to the mutation.
const ref = applyToInternshipRef(applyToInternshipVars);
// Variables can be defined inline as well.
const ref = applyToInternshipRef({ internshipId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = applyToInternshipRef(dataConnect, applyToInternshipVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

