import { SampleComponent } from '@/app/_components/sample-component'
import { createServerComponentClient } from '@/utils/supabase/server'

export default async function Notes() {
  const supabase = createServerComponentClient()
  const { data: notes } = await supabase.from('notes').select()

  return <SampleComponent />
}
