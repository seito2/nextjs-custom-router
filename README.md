# Nextjs custom router
You can set the conditions under which the nextjs router event will be executed.


## Install

```bash
npm install nextjs-custom-router
```

## Usage


```typescript
import { useCustomRouter } from "nextjs-custom-router";


export const Component = () => {
  const router = useCustomRouter(
    (router) => {
      // Write your condition for cancel router event.
    },
    (router) => {
      // This is optional, you can run callback before cancel router event.
    }
  );

  const handleOnClick = () => {
    router.push('/other-place')
  }

  return (
    <div>
      <button onClick={handleOnClick}>Move</button>
    </div>
  );
}

```