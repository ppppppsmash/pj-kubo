'use client'

import { useInterval, usePrevious } from '@/hooks'
import { Suspense, lazy, useEffect, useState } from 'react'
import { useHydrated } from '@/hooks/useHydrated'
import { Scroll } from '../Scroll'

const DisplacementSphere = lazy(() =>
  import('./model-core').then(module => ({ default: module.DisplacementSphere }))
)

export function ModelBrand() {
  const [disciplineIndex, setDisciplineIndex] = useState(0)
  const isHydrated = useHydrated();

  useInterval(
    () => {
    },
    5000,
  )

  useEffect(() => {
    setDisciplineIndex(0)
  }, []);

  return (
    <section className="h-[100vh] flex items-center justify-center flex-col">
      <>
        {isHydrated && (
          <Suspense>
            <DisplacementSphere />
          </Suspense>
        )}
      </>

      <Scroll />
    </section>
  );
}
