import Brain from '@lucide/svelte/icons/brain';
import Bot from '@lucide/svelte/icons/bot';
import ShieldCheck from '@lucide/svelte/icons/shield-check';
import Hammer from '@lucide/svelte/icons/hammer';
import Lightbulb from '@lucide/svelte/icons/lightbulb';
import Lock from '@lucide/svelte/icons/lock';
import Handshake from '@lucide/svelte/icons/handshake';
import { EVENT_DATE, VENUE } from './config.js';

export const STATS = [
	{ value: 2000, suffix: '+', label: 'Student Innovators' },
	{ value: 15, suffix: '+', label: 'Colleges Across NCR' },
	{ value: 24, suffix: ' Hours', label: 'Non-Stop Innovation' },
	{ value: 3, suffix: ' Tracks', label: 'Infinite Possibilities' }
];

export const TRACKS = [
	{
		title: 'Artificial Intelligence',
		icon: Brain,
		tagline: 'Build intelligent solutions for real-world problems.'
	},
	{
		title: 'Robotics',
		icon: Bot,
		tagline: 'Create, automate, and innovate with intelligent machines.'
	},
	{
		title: 'Cybersecurity',
		icon: ShieldCheck,
		tagline: 'Make the digital world safer for everyone.'
	}
];

export const PILLARS = [
	{
		title: 'Build',
		icon: Hammer,
		text: 'Turn ideas into working prototypes in 24 hours.'
	},
	{
		title: 'Innovate',
		icon: Lightbulb,
		text: 'Combine AI, Robotics, and Security to solve critical bottlenecks.'
	},
	{
		title: 'Secure',
		icon: Lock,
		text: 'Engineer software and hardware designed with security-first principles.'
	},
	{
		title: 'Collaborate',
		icon: Handshake,
		text: 'Network with industry mentors, sponsors, and 2000+ peers.'
	}
];

export const CHECKLIST = [
	'Team name',
	'Team leader details',
	'Track preference',
	'Preliminary idea pitch'
];

export const FAQS = [
	{
		q: 'What is CGX Chapter 01?',
		a: 'CGX Chapter 01 is a 24-hour hackathon by Cybergenix Security, built around three tracks: Artificial Intelligence, Robotics, and Cybersecurity. Teams pick a problem statement and build a working prototype by the end of the event.'
	},
	{
		q: 'Who can participate?',
		a: 'CGX is built for student innovators. We are expecting 2000+ participants from 15+ colleges across NCR. Detailed eligibility guidelines will be shared with registered teams.'
	},
	{
		q: 'How do we register?',
		a: 'Fill in the registration Google Form with your team name, team leader details, track preference, and a short preliminary pitch of your idea.'
	},
	{
		q: 'When and where is the event?',
		a: `CGX Chapter 01 takes place on ${EVENT_DATE} in ${VENUE}. The exact venue address will be shared with registered teams — keep an eye on our Instagram for updates.`
	},
	{
		q: 'How do we choose a problem statement?',
		a: 'Browse the problem statement explorer above — search by keyword or technology, or filter by track — then mention your pick and track preference in the registration form.'
	}
];
