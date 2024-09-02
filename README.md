[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffahreziadh%2Ffahrezi.fyi)

# fahrezi.fyi

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Turso](https://turso.tech/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Email**: [Plunk](https://useplunk.com/) (For contact page notification)

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/fahreziadh/fahrezi.fyi.git
cd fahrezi.fyi
bun install
bun dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/fahreziadh/fahrezi.fyi/blob/main/.env.example).

## Database Schema

```sql
CREATE TABLE `posts_views` (
	`id` integer PRIMARY KEY,
	`views` integer DEFAULT '0' NOT NULL
);
```

## License

1. You are free to use this code as inspiration.
2. Please do not copy it directly.
3. Crediting the author is appreciated.

Please remove all of my personal information (blog posts, images, etc.)
