import type { Picture } from '@sveltejs/enhanced-img';

import kudosGroups from '#lib/assets/projects/class-kudos-kudos-groups.png?enhanced&w=1600;1000;600;320';
import kudosWelcome from '#lib/assets/projects/class-kudos-welcome.png?enhanced&w=1600;1000;600;320';
import kudosStudentRewards from '#lib/assets/projects/class-kudos-student-rewards.png?enhanced&w=1600;1000;600;320';
import kudosToday from '#lib/assets/projects/class-kudos-today.png?enhanced&w=1600;1000;600;320';
import classChron from '#lib/assets/projects/class-chron.jpg?enhanced&w=1600;1000;600;320';
import alpenglow from '#lib/assets/projects/alpenglow-learning.jpg?enhanced&w=1600;1000;600;320';
import burch from '#lib/assets/projects/burch-4-b-street.jpg?enhanced&w=1600;1000;600;320';
import joeMartone from '#lib/assets/projects/joe-martone.jpg?enhanced&w=1600;1000;600;320';
import betterImpermanence from '#lib/assets/projects/better-impermanence.jpg?enhanced&w=1600;1000;600;320';

export type Screenshot = {
	src: Picture;
	alt: string;
	caption?: string;
};

export type Project = {
	slug: string;
	name: string;
	summary: string;
	/** Longer intro, shown for featured projects. */
	about?: string;
	highlights: string[];
	tech: string[];
	links: { live?: string; code?: string };
	/** The first screenshot is the cover. */
	screenshots: [Screenshot, ...Screenshot[]];
	featured?: boolean;
};

export const projects: Project[] = [
	{
		slug: 'class-kudos',
		name: 'Class Kudos',
		featured: true,
		summary:
			'Simple class management: kudos and rewards, a check-in register, random groups and a classroom board.',
		about:
			'Class Kudos started as a classroom store I built while teaching middle school. I have since rebuilt it on RedwoodSDK as a full class management tool. Teachers decide what earns kudos and what students can spend them on. Students sign in with a class code and tap their name, so they need no passwords or email accounts.',
		highlights: [
			'Kudos and rewards: teachers award kudos to students or whole groups, and approve reward requests as students make them.',
			'A register that fills itself in as students check in from the board by the door.',
			'Random groups in one click, ready to project full screen.',
			'A projectable welcome screen and a public class board that shows only first names and initials.'
		],
		tech: ['RedwoodSDK', 'React', 'Cloudflare Workers', 'Supabase', 'Tailwind CSS'],
		links: { live: 'https://www.classkudos.com' },
		screenshots: [
			{
				src: kudosGroups,
				alt: "The teacher's Kudos page: the class roster with point totals, and today's random groups as coloured cards with kudos buttons.",
				caption: 'Kudos and groups'
			},
			{
				src: kudosWelcome,
				alt: "The projected welcome screen: today's topic, numbered directions, and the students who have checked in.",
				caption: 'Welcome screen'
			},
			{
				src: kudosStudentRewards,
				alt: "A student's rewards screen showing their kudos balance and the rewards they can request.",
				caption: 'Student rewards'
			},
			{
				src: kudosToday,
				alt: "The teacher's Today page showing attendance for Period 1 with buttons to launch the welcome screen and board.",
				caption: 'Today'
			}
		]
	},
	{
		slug: 'class-chron',
		name: 'Class Chron',
		summary: 'A countdown timer for smartboards and touch screens.',
		highlights: [
			'Large touch targets, so a teacher can run it from the board without a keyboard.',
			'Custom background gradients and an optional soft bell when time is up.',
			'My first SvelteKit app, ported from a create-react-app version.'
		],
		tech: ['SvelteKit', 'TypeScript', 'Netlify'],
		links: {
			live: 'https://www.classchron.com',
			code: 'https://github.com/ryanmdoyle/class-chron'
		},
		screenshots: [
			{ src: classChron, alt: 'Class Chron showing a three-minute timer on a gradient.' }
		]
	},
	{
		slug: 'alpenglow-learning',
		name: 'Alpenglow Learning',
		summary: 'An online learning platform with course playlists, quizzes and student accounts.',
		highlights: [
			'Inspired by the Summit Learning Platform: teachers build courses from playlists of objectives.',
			'Students request a teacher-made quiz, and their playlist score updates when they pass.',
			'Each class gets a student page with scores, weekly goals and a to-do list.',
			'Role-based auth gives teachers and students separate views and routes.'
		],
		tech: ['Next.js', 'GraphQL', 'Prisma', 'MongoDB Atlas', 'Styled Components'],
		links: { code: 'https://github.com/ryanmdoyle/alpenglow-learning' },
		screenshots: [
			{
				src: alpenglow,
				alt: "A student's math class page with playlists, weekly goals, to-dos and past scores."
			}
		]
	},
	{
		slug: 'burch-4-b-street',
		name: 'Burch 4 B-Street',
		summary:
			"A site for the Sacramento theatre community to back Lyndsay Burch as B Street Theatre's artistic director.",
		highlights: [
			'Supporters could write, upload, or generate letters of support to the board of directors.',
			'Transactional email through Postmark.',
			'Document and PDF uploads through the Filestack API.'
		],
		tech: ['Redwood.js', 'Postgres', 'Postmark'],
		links: {
			live: 'https://burch4bstreet.netlify.app/',
			code: 'https://github.com/ryanmdoyle/burch4bstreet.com'
		},
		screenshots: [{ src: burch, alt: 'The Burch 4 B-Street landing page.' }]
	},
	{
		slug: 'joe-martone',
		name: 'Joe Martone',
		summary: 'Portfolio site for professional musician Joe Martone.',
		highlights: [
			'A custom audio player for previewing his compositions.',
			'A dependency-free image gallery with a full-screen view built on React context.',
			'Rebuilt from an earlier Squarespace site.'
		],
		tech: ['Gatsby', 'React', 'Sanity'],
		links: {
			live: 'https://joemartone.netlify.app/',
			code: 'https://github.com/ryanmdoyle/joemartone'
		},
		screenshots: [{ src: joeMartone, alt: "Joe Martone's portfolio home page." }]
	},
	{
		slug: 'better-impermanence',
		name: 'Better Impermanence',
		summary: 'A lightweight personal blog for Alissa Doyle.',
		highlights: [
			'Next.js front end with Sanity Studio as a configurable headless CMS.',
			'Custom Portable Text serializers so every content type renders predictably.'
		],
		tech: ['Next.js', 'React', 'Sanity', 'Emotion', 'SendGrid'],
		links: { code: 'https://github.com/ryanmdoyle/better-impermanence' },
		screenshots: [{ src: betterImpermanence, alt: 'The Better Impermanence blog home page.' }]
	}
];
