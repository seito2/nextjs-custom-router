import { NextRouter, useRouter } from "next/dist/client/router";

export const useCustomRouter = (
  cancelCondition: () => boolean,
  callback?: () => void
): NextRouter => {
  const router = useRouter();

  return {
    ...router,
    push: async (...props: Parameters<NextRouter['push']>) => {
      if (cancelCondition()) {
        if (typeof callback === 'function') {
          callback();
        }
        return false;
      }

      return router.push(...props);
    },
    replace: async (...props: Parameters<NextRouter['replace']>) => {
      if (cancelCondition()) {
        if (typeof callback === 'function') {
          callback();
        }
        return false;
      }

      return router.replace(...props);
    },
    reload: async (...props: Parameters<NextRouter['reload']>) => {
      if (cancelCondition()) {
        if (typeof callback === 'function') {
          callback();
        }
        return false;
      }

      return router.reload(...props);
    },
    back: async (...props: Parameters<NextRouter['back']>) => {
      if (cancelCondition()) {
        if (typeof callback === 'function') {
          callback();
        }
        return false;
      }

      return router.back(...props);
    },
    prefetch: async (...props: Parameters<NextRouter['prefetch']>) => {
      if (cancelCondition()) {
        if (typeof callback === 'function') {
          callback();
        }
        return;
      }

      return router.prefetch(...props);
    },
    beforePopState: async (
      ...props: Parameters<NextRouter['beforePopState']>
    ) => {
      if (cancelCondition()) {
        if (typeof callback === 'function') {
          callback();
        }
        return;
      }

      return router.beforePopState(...props);
    },
  };
};
