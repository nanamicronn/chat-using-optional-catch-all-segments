-- Create the table
create table notes (
    id bigint primary key generated always as identity,
    title text not null
);
alter table notes enable row level security;

create policy "public can read notes"
on public.notes
for select to anon
using (true);