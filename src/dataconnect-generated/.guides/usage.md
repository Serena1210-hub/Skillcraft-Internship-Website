# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateInternship, useListInternships, useApplyToInternship, useGetStudentApplications } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateInternship(createInternshipVars);

const { data, isPending, isSuccess, isError, error } = useListInternships();

const { data, isPending, isSuccess, isError, error } = useApplyToInternship(applyToInternshipVars);

const { data, isPending, isSuccess, isError, error } = useGetStudentApplications();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createInternship, listInternships, applyToInternship, getStudentApplications } from '@dataconnect/generated';


// Operation CreateInternship:  For variables, look at type CreateInternshipVars in ../index.d.ts
const { data } = await CreateInternship(dataConnect, createInternshipVars);

// Operation ListInternships: 
const { data } = await ListInternships(dataConnect);

// Operation ApplyToInternship:  For variables, look at type ApplyToInternshipVars in ../index.d.ts
const { data } = await ApplyToInternship(dataConnect, applyToInternshipVars);

// Operation GetStudentApplications: 
const { data } = await GetStudentApplications(dataConnect);


```