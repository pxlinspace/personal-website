<script lang="ts">
	// this is the same script from the old website, but turned into a svelte component with AI.

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D;

	const OFFSCREEN_OFFSET = 90;
	const MAX_DELTA = 1 / 10;

	let previousTime: number | null = null;
	let fishies: Fish[] = [];
	let resizeTimer: ReturnType<typeof setTimeout>;
	let animationFrameId: number;

	class Fish {
		static SPEED = 150;
		static ALPHA_SPEED = 0.5;
		static WIGGLE_SPEED = 5;

		static WIDTH_RATIO = 0.15;
		static BODY_RATIO = 0.4;
		static TAIL_LENGTH_RATIO = 0.4;
		static TAIL_WIDTH_RATIO = 0.1;

		x: number;
		y: number;
		size: number;
		angle: number;
		wiggleRadians: number;
		alphaRadians: number;
		hue: number;

		constructor(x: number, y: number) {
			this.x = x;
			this.y = y;

			this.size = 20 + Math.random() * 50;

			this.angle = Math.PI * 0.25 + (Math.random() - 0.9) * 0.25;
			this.wiggleRadians = Math.random() * Math.PI * 2;

			this.alphaRadians = Math.random() * Math.PI * 2;
			this.hue = Math.random() * 360;
		}

		update(dt: number) {
			this.x += Math.cos(this.angle) * Fish.SPEED * dt;
			this.y += Math.sin(this.angle) * Fish.SPEED * dt;

			this.angle += Math.sin(this.wiggleRadians) * 0.025;

			this.wiggleRadians += Fish.WIGGLE_SPEED * dt;
			if (this.wiggleRadians > Math.PI * 2) {
				this.wiggleRadians -= Math.PI * 2;
			}

			this.alphaRadians += Fish.ALPHA_SPEED * dt;
			if (this.alphaRadians > Math.PI * 2) {
				this.alphaRadians -= Math.PI * 2;
			}
		}

		draw(context: CanvasRenderingContext2D) {
			context.save();
			context.fillStyle = `hsla(${this.hue}, 80%, 80%, ${this.getAlpha()})`;

			context.translate(this.x, this.y);
			context.rotate(this.angle);

			context.beginPath();

			context.moveTo(0, 0);
			context.lineTo(-this.size * Fish.BODY_RATIO * 1.2, this.size * Fish.WIDTH_RATIO * 2);
			context.lineTo(-this.size * Fish.BODY_RATIO, this.size * Fish.WIDTH_RATIO);
			context.lineTo(-this.size, 0);
			context.lineTo(-this.size * Fish.BODY_RATIO, -this.size * Fish.WIDTH_RATIO);
			context.lineTo(-this.size * Fish.BODY_RATIO * 1.2, -this.size * Fish.WIDTH_RATIO * 2);

			context.translate(-this.size, 0);
			context.rotate(-Math.cos(this.wiggleRadians) * 0.2);
			context.moveTo(0, 0);
			context.lineTo(-this.size * Fish.TAIL_LENGTH_RATIO, -this.size * Fish.TAIL_WIDTH_RATIO);
			context.lineTo(-this.size * Fish.TAIL_LENGTH_RATIO, this.size * Fish.TAIL_WIDTH_RATIO);
			context.closePath();

			context.fill();

			context.restore();
		}

		getAlpha() {
			return (Math.sin(this.alphaRadians) + 1) / 2;
		}
	}

	function newFish(yPosition = Math.random() * canvas.height) {
		const x = Math.random() * (canvas.width + canvas.height) - canvas.height;
		const y = yPosition;

		return new Fish(x, y);
	}

	function update(timestamp: number) {
		const dt = previousTime ? Math.min((timestamp - previousTime) / 1000, MAX_DELTA) : 0;
		previousTime = timestamp;

		for (let i = 0; i < fishies.length; i++) {
			fishies[i].update(dt);
			if (fishies[i].y > canvas.height + OFFSCREEN_OFFSET) {
				fishies[i] = newFish(fishies[i].y % (canvas.height + OFFSCREEN_OFFSET));
			}
			if (fishies[i].x > canvas.width + OFFSCREEN_OFFSET) {
				fishies[i] = newFish(fishies[i].x % (canvas.width + OFFSCREEN_OFFSET));
			}
		}

		draw();
		animationFrameId = requestAnimationFrame(update);
	}

	function draw() {
		context.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < fishies.length; i++) {
			fishies[i].draw(context);
		}
	}

	function setCanvasDimensions() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function initialize() {
		setCanvasDimensions();
		fishies = [];
		for (let i = 0; i < canvas.width * canvas.height * 0.00006; i++) {
			fishies.push(newFish());
		}
	}

	function handleResize() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			initialize();
		}, 200);
	}

	$effect(() => {
		context = canvas.getContext('2d') as CanvasRenderingContext2D;
		context.lineWidth = 3;

		initialize();
		animationFrameId = requestAnimationFrame(update);

		window.addEventListener('resize', handleResize);

		return () => {
			cancelAnimationFrame(animationFrameId);
			clearTimeout(resizeTimer);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
