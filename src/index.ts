import { NextRouter, useRouter } from "next/dist/client/router";

export const useCustomRouter = (
  cancelCondition: (router: NextRouter) => boolean,
  callback?: (router: NextRouter) => void
): NextRouter => {
  const router = useRouter();

  return {
    ...router,
    push: async (...props: Parameters<NextRouter['push']>) => {
      if (cancelCondition(router)) {
        if (typeof callback === 'function') {
          callback(router);
        }
        return false;
      }

      return router.push(...props);
    },
    replace: async (...props: Parameters<NextRouter['replace']>) => {
      if (cancelCondition(router)) {
        if (typeof callback === 'function') {
          callback(router);
        }
        return false;
      }

      return router.replace(...props);
    },
    reload: async (...props: Parameters<NextRouter['reload']>) => {
      if (cancelCondition(router)) {
        if (typeof callback === 'function') {
          callback(router);
        }
        return false;
      }

      return router.reload(...props);
    },
    back: async (...props: Parameters<NextRouter['back']>) => {
      if (cancelCondition(router)) {
        if (typeof callback === 'function') {
          callback(router);
        }
        return false;
      }

      return router.back(...props);
    },
    prefetch: async (...props: Parameters<NextRouter['prefetch']>) => {
      if (cancelCondition(router)) {
        if (typeof callback === 'function') {
          callback(router);
        }
        return;
      }

      return router.prefetch(...props);
    },
    beforePopState: async (
      ...props: Parameters<NextRouter['beforePopState']>
    ) => {
      if (cancelCondition(router)) {
        if (typeof callback === 'function') {
          callback(router);
        }
        return;
      }

      return router.beforePopState(...props);
    },
  };
};
