const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** 3D tilt toward the cursor; also feeds --mx/--my to the `spotlight` utility. */
export function tilt(node: HTMLElement, max = 6) {
	if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
	const reduce = prefersReducedMotion();

	function move(e: PointerEvent) {
		const r = node.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width;
		const y = (e.clientY - r.top) / r.height;
		node.style.setProperty('--mx', `${x * 100}%`);
		node.style.setProperty('--my', `${y * 100}%`);
		if (!reduce) {
			node.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg)`;
		}
	}
	function leave() {
		node.style.transform = '';
	}

	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', leave);
	return {
		destroy() {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
}

/** Fades/slides an element in the first time it enters the viewport. */
export function reveal(node: HTMLElement, delay = 0) {
	if (prefersReducedMotion()) return;
	node.style.opacity = '0';
	node.style.transform = 'translateY(24px)';
	node.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(.2,.7,.2,1) ${delay}ms`;

	const io = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.style.opacity = '';
			node.style.transform = '';
			io.disconnect();
		},
		{ threshold: 0.15 }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}

/** Counts the element's text from 0 up to `target` when it scrolls into view. */
export function countUp(node: HTMLElement, target: number) {
	if (prefersReducedMotion()) return;
	node.textContent = '0';

	const io = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			io.disconnect();
			const start = performance.now();
			const duration = 1600;
			const tick = (now: number) => {
				const t = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - t, 3);
				node.textContent = Math.round(target * eased).toLocaleString('en-IN');
				if (t < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		},
		{ threshold: 0.4 }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}
