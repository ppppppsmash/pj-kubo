'use client'

import { useInterval, usePrevious } from '@/hooks';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useHydrated } from '@/hooks/useHydrated';

const DisplacementSphere = lazy(() =>
  import('./model-core').then(module => ({ default: module.DisplacementSphere }))
);

export function ModelBrand() {
  //const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  //const prevTheme = usePrevious(theme);
  // const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(
  //   ', and '
  // );
  //const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  //const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  useInterval(
    () => {
      // const index = (disciplineIndex + 1) % disciplines.length;
      // setDisciplineIndex(index);
    },
    5000,
    //theme
  );

  useEffect(() => {
    //if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    //}
  }, []);

  return (
    <section className="h-[100vh]">
          <>
            {isHydrated && (
              <Suspense>
                <DisplacementSphere />
              </Suspense>
            )}
          </>
    </section>
  );
}
