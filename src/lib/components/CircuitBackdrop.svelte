<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<div class="pointer-events-none absolute inset-0 overflow-hidden {className}" aria-hidden="true">
	<svg class="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
				<path
					d="M40 0 L40 30 M40 50 L40 80 M0 40 L30 40 M50 40 L80 40"
					stroke="#2DD4BF"
					stroke-width="1"
					fill="none"
					opacity="0.15"
				/>
				<circle cx="40" cy="40" r="3" fill="#2DD4BF" opacity="0.2" />
				<circle cx="0" cy="40" r="1.5" fill="#2DD4BF" opacity="0.15" />
				<circle cx="80" cy="40" r="1.5" fill="#2DD4BF" opacity="0.15" />
				<circle cx="40" cy="0" r="1.5" fill="#2DD4BF" opacity="0.15" />
				<circle cx="40" cy="80" r="1.5" fill="#2DD4BF" opacity="0.15" />
				<path
					d="M10 10 L30 10 L30 30"
					stroke="#2DD4BF"
					stroke-width="0.5"
					fill="none"
					opacity="0.1"
				/>
				<path
					d="M70 70 L50 70 L50 50"
					stroke="#2DD4BF"
					stroke-width="0.5"
					fill="none"
					opacity="0.1"
				/>
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#circuit)" />
	</svg>
</div>
