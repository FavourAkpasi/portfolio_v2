'use client';

/**
 * ⚠️ THROWAWAY — delete this file (and its usage in app/page.tsx) once you've
 * confirmed the error shows up in Sentry.
 *
 * Throwing inside the click handler produces an uncaught error, which Sentry's
 * browser SDK captures automatically and reports to your Issues dashboard.
 */
export const SentryTestButton = () => {
  return (
    <button
      type="button"
      onClick={() => {
        throw new Error('Sentry test error — portfolio verification');
      }}
      className="fixed bottom-4 left-4 z-[100] rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-lg"
    >
      Throw test error
    </button>
  );
};
