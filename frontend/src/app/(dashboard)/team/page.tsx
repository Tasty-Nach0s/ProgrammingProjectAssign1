import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
}

const members = [
  {
    name: 'Maxim Iliev',
    role: 'PM',
    initials: 'M1',
    email:'S4020485@student.rmit.edu.au',
    blurb: 'Team member introduction goes here.',
  },
  {
    name: 'Riley Tran',
    role: 'BA',
    initials: 'M2',
    email:'S4092817@student.rmit.edu.au',
    blurb: 'Team member introduction goes here.',
  },
  {
    name: 'Senuka Edirisinghe',
    role: 'UX',
    initials: 'M3',
    email:'S4092199@student.rmit.edu.au',
    blurb: 'Team member introduction goes here.',
  },
  {
    name: 'Nathan Acheson',
    role: 'Dev 1',
    initials: 'M4',
    email:'S3946699@student.rmit.edu.au',
    blurb: 'Team member introduction goes here.',
  },
  {
    name: 'Yihan Li',
    role: 'Dev 2',
    initials: 'M5',
    email:'S4078001@student.rmit.edu.au',
    blurb: 'Team member introduction goes here.',
  },
]

type Member = (typeof members)[number]

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex min-h-40 items-center rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mr-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-900">
        {member.initials}
      </div>

      <div className="text-left">
        <h3 className="text-lg font-semibold text-zinc-900">
          {member.name}
        </h3>

        <span className="mt-1 inline-flex items-center rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
          {member.role}
        </span>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          {member.email}
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          {member.blurb}
        </p>
      </div>
    </article>
  )
}

export default function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Ecosystem
          </h1>
          <p className="text-lg font-semibold text-zinc-900">
            B - Team 60
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Our Team
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Meet the people behind Team 60
          </p>
        </div>
      </div>

      <div className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2">
          <MemberCard member={members[0]!} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {members.slice(1).map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}