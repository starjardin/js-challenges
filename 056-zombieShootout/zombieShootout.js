const zombie_shootout = (zombies, range, ammo) => {
	const steps = range * 2;
	if (ammo < steps && ammo < zombies) {
		return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
	}
	if (zombies > steps) {
		return `You shot ${steps} zombies before being eaten: overwhelmed.`;
	}
	return `You shot all ${zombies} zombies.`;
}
