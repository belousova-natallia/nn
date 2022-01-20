export const getPresets = async () => {
  return await new Promise((resolve) => setTimeout(() => resolve(presets), 100));
};

const presets = {
  low: ['Violence', 'Cheating', 'Nudity', 'Weapon', 'Education'],
  strong: [],
  custom: ['Violence', 'Cheating'],
  none: []
};
