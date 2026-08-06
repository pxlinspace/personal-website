<script lang="ts">
	// this is the same script from the old website, but turned into a svelte component with AI.
	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D;

	const MAX_DELTA = 1 / 10;
	const MAX_MOUSE_DISTANCE = 50;

	let previousTime: number | null = null;
	let idiots: Idiot[] = [];
	let image: HTMLImageElement;
	let animationFrameId: number;

	class Idiot {
		static SPEED = 75;
		static GRAVITY = 500;
		static RECT_SIZE = 16;
		static SPRITE_SCALE = 3;
		static FRAME_COUNTS = [4, 2];
		static ANIMATION_TIMES = [125, 75];
		static getSize() {
			return Idiot.RECT_SIZE * Idiot.SPRITE_SCALE;
		}

		x: number;
		y: number;
		yVelocity: number;
		animationRow: number;
		frame: number;
		animationIntervalId: ReturnType<typeof setInterval> | null;
		_isGrabbed: boolean;
		isMoving: boolean;
		movementTimeoutId: ReturnType<typeof setTimeout> | null;
		xDirection: number;

		constructor(x: number, y: number) {
			this.x = x;
			this.y = y;
			this.yVelocity = 0;
			this.animationRow = 0;
			this.frame = 0;
			this.animationIntervalId = null;
			this._isGrabbed = false;
			this.isMoving = false;
			this.movementTimeoutId = null;
			this.xDirection = 1;
			this.continueMovementProcess();
		}

		update(dt: number) {
			if (!this.isGrabbed) {
				if (this.y < canvas.height - Idiot.getSize() * 0.5) {
					this.yVelocity += Idiot.GRAVITY * dt;
					this.y += this.yVelocity * dt;
				} else {
					this.y = canvas.height - Idiot.getSize() * 0.5;
					this.yVelocity = 0;

					if (this.animationRow == 1) {
						this.animationRow = 0;
						this.frame = 0;
						if (this.animationIntervalId !== null) clearInterval(this.animationIntervalId);
						this.animationIntervalId = null;
					}

					if (!this.movementTimeoutId) {
						this.animationIntervalId = null;
						this.continueMovementProcess();
					}
				}
			}

			if (this.isMoving) {
				this.x += Idiot.SPEED * dt * this.xDirection;
				if (this.animationIntervalId === null) {
					this.animationIntervalId = setInterval(
						this.gotoNextFrame.bind(this),
						Idiot.ANIMATION_TIMES[this.animationRow]
					);
				}
			} else if (!this.isGrabbed && this.y === canvas.height - Idiot.getSize() * 0.5) {
				if (this.animationIntervalId !== null) {
					clearInterval(this.animationIntervalId);
					this.animationIntervalId = null;
				}
				this.frame = 0;
			}
		}

		gotoNextFrame() {
			this.frame += 1;
			if (this.frame >= Idiot.FRAME_COUNTS[this.animationRow]) {
				this.frame = 0;
			}
		}

		continueMovementProcess() {
			this.movementTimeoutId = setTimeout(
				() => {
					this.continueMovementProcess();
					this.isMoving = !this.isMoving;
					if (this.isMoving) {
						this.gotoNextFrame();
						if (this.x < 200) {
							this.xDirection = 1;
						} else if (this.x > canvas.width - 200) {
							this.xDirection = -1;
						} else {
							this.xDirection = Math.random() > 0.5 ? 1 : -1;
						}
					}
				},
				750 + Math.random() * 1500
			);
		}

		draw(context: CanvasRenderingContext2D) {
			context.save();
			context.translate(this.x, this.y);
			context.scale(this.xDirection, 1);

			const size = Idiot.getSize();
			context.drawImage(
				image,
				this.frame * Idiot.RECT_SIZE,
				this.animationRow * Idiot.RECT_SIZE,
				Idiot.RECT_SIZE,
				Idiot.RECT_SIZE,
				-size * 0.5,
				-size * 0.5,
				size,
				size
			);
			context.restore();
		}

		destroy() {
			if (this.animationIntervalId !== null) clearInterval(this.animationIntervalId);
			if (this.movementTimeoutId !== null) clearTimeout(this.movementTimeoutId);
		}

		get isGrabbed() {
			return this._isGrabbed;
		}

		set isGrabbed(value: boolean) {
			this._isGrabbed = value;
			if (value) {
				this.isMoving = false;
				this.frame = 0;
				if (this.movementTimeoutId) {
					clearTimeout(this.movementTimeoutId);
					this.movementTimeoutId = null;
				}
				this.animationRow = 1;
				if (this.animationIntervalId !== null) {
					clearInterval(this.animationIntervalId);
				}
				this.animationIntervalId = setInterval(
					this.gotoNextFrame.bind(this),
					Idiot.ANIMATION_TIMES[this.animationRow]
				);
			}
		}
	}

	function update(timestamp: number) {
		const dt = previousTime ? Math.min((timestamp - previousTime) / 1000, MAX_DELTA) : 0;
		previousTime = timestamp;

		for (let i = 0; i < idiots.length; i++) {
			idiots[i].update(dt);
		}

		draw();
		animationFrameId = requestAnimationFrame(update);
	}

	function draw() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.imageSmoothingEnabled = false;
		for (let i = 0; i < idiots.length; i++) {
			idiots[i].draw(context);
		}
	}

	function initialize() {
		for (let i = 0; i < 3; i++) {
			idiots.push(new Idiot(Math.random() * canvas.width, canvas.height - Idiot.getSize() * 0.5));
		}
	}

	function setIdiotToMouse(idiot: Idiot, mouseX: number, mouseY: number) {
		const distance = Idiot.getSize() * 0.5;
		idiot.x = Math.max(distance, Math.min(canvas.width - distance, mouseX));
		idiot.y = Math.max(distance, Math.min(canvas.height - distance, mouseY));
	}

	function handleMouseDown(event: MouseEvent) {
		if (event.button !== 0) return;

		const canvasRect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - canvasRect.left;
		const mouseY = event.clientY - canvasRect.top;

		let closestIdiotIndex: number | null = null;
		let closestDistance = Infinity;
		for (let i = 0; i < idiots.length; i++) {
			const distance = Math.hypot(mouseX - idiots[i].x, mouseY - idiots[i].y);
			if (distance < closestDistance && distance < MAX_MOUSE_DISTANCE) {
				closestIdiotIndex = i;
				closestDistance = distance;
			}
		}
		if (closestIdiotIndex !== null) {
			idiots[closestIdiotIndex].isGrabbed = true;
			setIdiotToMouse(idiots[closestIdiotIndex], mouseX, mouseY);
		}
	}

	function handleMouseUp(event: MouseEvent) {
		if (event.button !== 0) return;

		for (let i = 0; i < idiots.length; i++) {
			if (idiots[i].isGrabbed) {
				idiots[i].isGrabbed = false;
				idiots[i].yVelocity = 0;
			}
		}
	}

	function handleMouseMove(event: MouseEvent) {
		const canvasRect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - canvasRect.left;
		const mouseY = event.clientY - canvasRect.top;
		for (let i = 0; i < idiots.length; i++) {
			if (idiots[i].isGrabbed) {
				setIdiotToMouse(idiots[i], mouseX, mouseY);
			}
		}
		draw();
	}

	$effect(() => {
		image = new Image();
		image.src = '/idiot-Sheet.png';

		context = canvas.getContext('2d') as CanvasRenderingContext2D;

		function setupCanvas() {
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width;
			canvas.height = rect.height;
			context.imageSmoothingEnabled = false;
		}

		const resizeObserver = new ResizeObserver(() => {
			setupCanvas();
			if (idiots.length === 0) {
				initialize();
			}
			draw();
		});
		resizeObserver.observe(canvas);

		animationFrameId = requestAnimationFrame(update);

		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			resizeObserver.disconnect();
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('mousemove', handleMouseMove);
			for (const idiot of idiots) {
				idiot.destroy();
			}
		};
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		image-rendering: pixelated;
		image-rendering: crisp-edges;
		z-index: 0;
	}
</style>
