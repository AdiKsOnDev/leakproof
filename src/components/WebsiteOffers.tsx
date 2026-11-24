function Anchor({ x, y }: { x: number; y: number }) {
  return <rect className="offer-mark__anchor" x={x - 2.5} y={y - 2.5} width="5" height="5" />
}

const offers = [
  {
    title: 'Design that matches your brand',
    art: <>
      <path className="offer-mark__guide" d="M7 56h80M17 64V12M17 56V18h39" />
      <path d="M17 56C17 32 30 18 56 18v38Z" />
      <path d="M66 18h14v14H66z" fill="currentColor" /><path d="M66 42h14v14H66z" />
      <Anchor x={17} y={56} /><Anchor x={56} y={18} />
    </>,
  },
  {
    title: '100% ownership of your site and source code',
    art: <>
      <path className="offer-mark__guide" d="M12 12v48m13-35v20" />
      <path d="M21 16h16m7 0h23M33 29h24m7 0h13M33 42h13m7 0h16M21 55h20" />
      <Anchor x={12} y={12} />
    </>,
  },
  {
    title: 'Illustrations and motion in your style',
    art: <>
      <path className="offer-mark__guide" d="M9 48h23m0-31 30 8" />
      <path d="M9 48C32 48 32 17 47 21S64 52 84 32" />
      <circle cx="32" cy="17" r="1.5" /><circle cx="62" cy="25" r="1.5" />
      <Anchor x={9} y={48} /><Anchor x={47} y={21} /><path d="m65 49 14 7-14 7Z" />
    </>,
  },
  {
    title: 'An admin panel to update content yourself',
    art: <>
      <rect x="12" y="14" width="64" height="44" rx="2" />
      <path className="offer-mark__guide" d="M6 25h76M28 25v39" />
      <path d="M36 35h24M36 44h13m7 7 3-9 19-19 6 6-19 19Z" />
      <Anchor x={12} y={14} /><Anchor x={76} y={58} />
    </>,
  },
  {
    title: 'Local search setup for the areas you serve',
    art: <>
      <path className="offer-mark__guide" d="m7 56 23-14 34 15 22-13M15 62l16-9 29 13M69 51l13 9" />
      <path d="M64 26c0 12-16 27-16 27S32 38 32 26a16 16 0 0 1 32 0Z" />
      <circle cx="48" cy="26" r="5" /><Anchor x={48} y={53} />
    </>,
  },
  {
    title: 'Analytics that show which pages lead to bookings and enquiries',
    art: <>
      <path className="offer-mark__guide" d="M13 12v46h73M37 58V37m22 21V31m21 27V14" />
      <path d="M13 52C25 52 25 37 37 37s16 3 22-6 12-17 21-17" />
      <Anchor x={37} y={37} /><Anchor x={59} y={31} /><Anchor x={80} y={14} />
    </>,
  },
]

export function WebsiteOffers() {
  return (
    <ul className="container website-offers" role="list" aria-label="What we can deliver for your website">
      {offers.map(({ title, art }) => (
        <li key={title}>
          <svg className="offer-mark" viewBox="0 0 96 72" aria-hidden="true" focusable="false">{art}</svg>
          <p>{title}</p>
        </li>
      ))}
    </ul>
  )
}
