// cardSets.ts

export const cardsInSets: { [key: string]: number } = {
    'swsh-1': 216,
    'swsh-2': 209,
    'swsh-3': 206,
    'swsh-35': 80,
    'sv-3': 230
    // Add other sets here as needed
};

export const setsMap: Map<string, string[]> = new Map<string, string[]>();

setsMap.set('Sword and Shield', ['swsh-1']);
setsMap.get('Sword and Shield')?.push('216'); // Adding 'value2' to the array

setsMap.set('Rebel Clash', ['swsh-2']);
setsMap.get('Rebel Clash')?.push('209');

setsMap.set('Darkness Ablaze', ['swsh-3']);
setsMap.get('Darkness Ablaze')?.push('206');

setsMap.set('Champions Path', ['swsh-35']);
setsMap.get('Champions Path')?.push('80');

setsMap.set('Obsidian Flames', ['sv-3']);
setsMap.get('Obsidian Flames')?.push('230');
// Add other mappings here as needed