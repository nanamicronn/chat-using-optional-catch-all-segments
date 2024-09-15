'use client'
import { createClientComponentClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export const SampleComponent = () => {
  const [data, setData] = useState<{ id: number; title: string }[] | null>()
  useEffect(() => {
    const fetch = async () => {
      const supabase = createClientComponentClient()
      const { data } = await supabase.from('notes').select()
      setData(data)
    }
    void fetch()
  }, [])
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
