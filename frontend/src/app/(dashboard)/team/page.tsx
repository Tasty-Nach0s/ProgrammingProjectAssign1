import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
}

const members = [
  {
    name: 'Maxim Iliev',
    role: 'PM',
    initials: 'MI',
    image: '/team/profile_maxim.jpeg',
    blurb: "Hey my name's Maxim, and I'm in the (hopefully) last year of my bachelor's of IT. When I'm not cooking or drawing I'm taking time out of my busy overwatch schedule to get uni work done.",
  },
  {
    name: 'Riley Tran',
    role: 'BA',
    initials: 'RT',
    image: '/team/profile_riley.png',
    blurb: "Hi supervisors, I'm Riley! I'm in my third year of studying Computer Science and I've been assigned as the team's BA. Looking forward to getting to know you better :)",
  },
  {
    name: 'Senuka Edirisinghe',
    role: 'UX',
    initials: 'SE',
    image: '/team/profile_senuka.jpeg',
    blurb: "Hi supervisors I'm Senuka I'm in my third year of studying bachelor of information technology majoring in cyber security. I'm the teams UX designer, looking forward to getting to know everyone!",
  },
  {
    name: 'Nathan Acheson',
    role: 'Dev 1',
    initials: 'NA',
    image: '/team/profile_nathan.jpg',
    blurb: "Hello! my name is Nathan and I'm a developer for the team. I'm currently in my 5th year of Bachelor Computer and Network Engineering / Bachelor of Computer Science double degree. Excited to see what we can do!",
  },
  {
    name: 'Yihan Li',
    role: 'Dev 2',
    initials: 'YL',
    image: '/team/profile_yihan.jpg',
    blurb: "Hi everyone! I'm Yihan, and I'm excited to be part of this team. I'm currently in my final year of studying Computer Science, and I look forward to contributing to our project!",
  },
]

type Member = (typeof members)[number]

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex min-h-48 items-start gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      {member.image ? (
        <img
          src={member.image}
          alt={`${member.name} profile`}
          className="mt-1 h-24 w-24 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div className="mt-1 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-900">
          {member.initials}
        </div>
      )}

      <div className="min-w-0 flex-1 text-left">
        <h3 className="text-lg font-semibold text-zinc-900">
          {member.name}
        </h3>

        <span className="mt-1 inline-flex items-center rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
          {member.role}
        </span>

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