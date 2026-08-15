<script lang="ts">
	import Window from '$lib/components/Window.svelte';
	import coolestCat from '$lib/assets/images/coolest-cat.png';
	import Backlink from '$lib/components/Backlink.svelte';
</script>

<svelte:head>
	<title>about &middot; pxlinspace</title>
</svelte:head>

<Backlink />

<Window title="hiiii!!!!!!!">
	<div style="display: flex;">
		<div>
			<p>
				Hello random internet person! I'm Pixelin, a person that likes to make silly useless and
				occasionally useful things.
			</p>
			<p>
				This website is a place for me to link all of my shtuff, and also to experiment with web
				design!
			</p>
			<ul>
				<li>bday is December 7</li>
				<li>INTP 4w5 (I think???)</li>
				<li>
					fav colors are
					<span class="lavender">&nbsp;lavender&nbsp;</span> and
					<span class="periwinkle">&nbsp;periwinkle&nbsp;</span>.
				</li>
			</ul>
		</div>

		<img
			src={coolestCat}
			alt="the coolest cat doing a kickflip on a skateboard"
			class="pixelated"
			width="432px"
			height="432px"
		/>
	</div>
</Window>

<Window title="hobbies">
	<ul>
		<li>
			<b>Game development:</b> IMO it's the best art form. Not only is it technical, but making games
			encourages you to try out so many things: art, music production, UI/UX design, marketing, etc.
		</li>
		<li>
			<b>Playing games lol:</b> ofc I'm so passionate about gamedev because video games make up such a
			large part of my childhood (MINECRAFT ON THE XBOX 360!!!!!!!!!!!!!)
		</li>
		<li>
			<b>Making animations:</b> I love visualizing videos in my head whenever I'm listening to music or
			thinking about game cutscenes! Nowadays I mostly just animate game sprites.
		</li>
		<li>
			<b>Digital art (and occasionally traditional art):</b> Hobby that comes alongside with learning
			how to animate
		</li>
		<li>
			<b>Building papercrafts:</b> it started with Minecraft papercraft templates and I kinda just got
			into it from there. It's super cool being able to bring low-poly to real life with only paper and
			a printer!
		</li>
		<li>
			<b>Origami:</b> it's my childhood hobby, though I don't do it nearly as much anymore. I used to
			have an origami box that got so filled up that everything inside was crumpled. I still make paper
			cranes with restaurant napkins whenever I'm bored.
		</li>
	</ul>
</Window>

<Window title="fav games">
	<ul>
		<li><b>Minecraft:</b> ofc</li>
		<li>
			<b>Deltarune:</b> I'm inspired a lot by the music, mysteries, and world-building!
		</li>
		<li>
			<b>Undertale:</b> My fav part about this game is that the graphics are so bad that they are good.
		</li>
		<li>
			<b>Oneshot:</b> One of the most immersive RPGs I've played! The colors, music, and meta aspects
			blend together very nicely.
		</li>

		<li>
			<b>Stardew Valley:</b> So much love, time, and effort was put into every detail of this game and
			it shows! It was also hella inspiring watching the 10-year anniversary video and seeing how it changed
			over time.
		</li>
		<li>
			<b>Balatro:</b> When I tried it for the first time I was so captivated by how polished and flexible
			it was in its mechanics! LocalThunk's passion and humility remind me of why I enjoy gamedev so much
			in the first place.
		</li>
		<li>
			<b>Rhythm Doctor:</b> I love games that are only one button!
		</li>
		<li>
			<b>Celeste:</b> Playing this game and listening to Maddy talk about her process taught me a lot
			about level design!
		</li>
		<li><b>Hollow Knight:</b> PEAK PEAK PEAK PEAK</li>
		<li>
			<b>Omori:</b> This game genuinely influenced my art a lot, both the cartoony artstyle and the low-res
			photoshop visuals. The 2020 trailer was like the coolest thing to come out during the pandemic.
		</li>
		<li>
			<b>Everhood:</b> I'm in love with how weird and goofy this game is in literally every aspect.
		</li>
	</ul>
</Window>

<Window title="fav shows + manga">
	<ul>
		<li>
			<b>Toilet-Bound Hanako Kun:</b> The manga art is so detailed and beautiful. It's very aesthetically
			distinct and colorful!
		</li>
		<li>
			<b>Nichijou:</b> This anime is so silly and cute! I also found it to be oddly meaningful?
		</li>
		<li>
			<b>City the Animation:</b> Like Nichijou, it's very lighthearted and chaotic at the same time! The
			colors are very vibrant and it kinda makes me take life less seriously.
		</li>
		<li>
			<b>Mob Psycho 100:</b> I love this anime's goofy ahh art style and animation. The alien episode
			and its ending was so weird that I keep thinking about it from time to time.
		</li>
		<li>
			<b>Chainsaw Man:</b> I love the character designs, especially how they range from humans with weird
			eye patterns to the most horrendous looking monstrosities ever.
		</li>
		<li>
			<b>Bloom Into You:</b> This was the first yuri I read and it is so cute omg! It approaches love
			in a very interesting way!
		</li>
		<li><b>Bocchi the Rock!:</b> Bocchi is literally me frfrfr</li>
		<li><b>Arcane:</b> PEEAAAAKKK PEAK PEAK PEAK PEAK PEAK</li>
		<li>
			<b>Star Trek: The Next Generation:</b> A little out of place with these other shows lol. My dad
			introduced Star Trek to me and I actually got really into it! Every episode always comes up with
			a new idea to think about.
		</li>
	</ul>
</Window>

<Window title="art + animation tools">
	<ul>
		<li>
			<b>Adobe Animate:</b> My go-to animation software, though it honestly feels like it's gotten a bit
			more buggy and annoying to use.
		</li>
		<li>
			<b>Krita:</b> Super high quality for a free and open source drawing software!
		</li>
		<li>
			<b>Procreate:</b> Great for when I'm on the go or for quick concept sketches!
		</li>
		<li>
			<b>Aseprite:</b> It's a joy to make sprites with this program! By default it's paid, but you
			can get it for free if you
			<a href="https://github.com/aseprite/aseprite/blob/main/INSTALL.md">
				compile the source code
			</a>.
		</li>
		<li>
			<b>Pixelorama:</b> Another open source pixel art software. This was what I used when compiling Aseprite
			was too hard. It's cool in that you can bind different tools to either mouse button!
		</li>
		<li>
			<b>Flipaclip:</b> Very fun for making quick animation sketches when I'm bored.
		</li>
		<li>
			<b>Tahoma2D:</b> It's just the Opentoonz animation program but more simplistic! The vertical timeline
			makes me feel more professional than I actually am.
		</li>
	</ul>
</Window>

<Window title="languages i know from best to worse">
	<ul>
		<li>
			<b>GDScript:</b> It's the language of the Godot game engine! The syntax is very similar to Python,
			with a few differences that make it more integrated with the engine.
		</li>
		<li>
			<b>Python:</b> It's basically the easiest programming language lol, though I put it below GDScript
			since I don't really have that many use cases for it right now.
		</li>
		<li>
			<b>Lua:</b> Unlike everyone else who learns Lua for Roblox scripting, I learned it for the LÖVE
			framework. It's fun, but it's differences make it feel a little weird and annoying to use.
		</li>
		<li>
			<b>JavaScript+TypeScript:</b> Ehhh it's okay. Very flexible, but I find web development to be more
			of a hassle than game development.
		</li>
		<li>
			<b>C/C++:</b> This is what we used back in my old high school Robotics team. Haven't had much need
			to use it since then, so it's slowly phasing out of memory.
		</li>
		<li>
			<b>Java:</b> I literally only studied it for the AP CSA exam. I had enough extra time to make a
			full drawing of Hatsune Miku on the scratch paper which they then proceeded to take away :(
		</li>
		<li>
			<b>C#:</b> My first game engine was actually Monogame (based on the XNA framework). I was following
			in the footsteps of my idol ConcernedApe, but gave up on it because it was too hard at the time
			:(
		</li>
		<li>Vietnamese</li>
	</ul>
</Window>

<Window title="misc tools">
	<ul>
		<li>I currently use OpenSUSE Tumbleweed Linux with Niri as my window manager!</li>
		<li>Godot is my primary game engine, but I used to be a big fan of LÖVE.</li>
		<li>VSCode is my general purpose code editor</li>
		<li>I use AFFiNE for notes, planning, & journaling</li>
		<li>Todoist for task management</li>
		<li>Zen Browser for web!</li>
	</ul>
</Window>

<Window title="inspirations">
	<ul>
		<li>
			<b>Toby Fox:</b> My biggest inspo for being a gamedev rn! His IndieLiveExpo message lowk got me
			super into indie game development during the pandemic.
		</li>
		<li>
			<b>Nicky Case:</b> Biggest inspo for web development! Her interactive sites, games, and her writing
			have made me more curious and invested in learning than school has ever made me.
		</li>
		<li>
			<b>Temmie Chang:</b> I also discovered more of her stuff during the pandemic, but her work influenced
			my current chibi art style a lot! She's a super skilled animator, and seeing her learn to make her
			own games motivated me a lot too.
		</li>
		<li>
			<b>LocalThunk:</b> Balatro is such a masterpiece game, and reading the timeline for how it was made
			left me in awe! He's a humble developer with a passion for a hobby, and reminds me of why I love
			game development so much in the first place.
		</li>
		<li>
			<b>NomnomNami:</b> I love her short and digestible games and VNs! Her stuff influenced my art style
			a lot too.
		</li>
		<li>
			<b>Alan Becker:</b> Stick figures were basically my introduction to animation! His animation tutorials,
			especially his 12 principles video, helped me a lot during my animation journey.
		</li>
		<li>
			<b>Aimkid:</b> I used to be addicted to her animations because they are so ridiculously smooth!
			I'm in love with her geometric & dynamic art style, and I think it's influenced my art to be wackier
			too.
		</li>
		<li>
			<b>Cuptoast:</b> I was addicted to her animations too. She got me into Jack Stauber and
			FlipaClip and I own her hoodie. It was because of her that I made that
			<a href="https://www.youtube.com/watch?v=8QJtCQ-9xHU">Last Cup of Coffee</a>
			animation!
		</li>
		<li>
			<b>Daidus & Emirichu:</b> Spilled Ink is my favorite art YouTube channel right now! Seeing these
			two learn traditional art mediums despite being primarily experienced in digital art made me get
			more into traditional too.
		</li>
	</ul>
	<p>
		...and a lot more people that I can't name from the top of my head, but I'll add more later.
		There's also friends, family, teachers, etc. but I won't name them.
	</p>
</Window>

<style>
	.lavender {
		background-color: #af93d5;
		color: black;
	}
	.periwinkle {
		background-color: #ccccff;
		color: black;
	}
</style>
