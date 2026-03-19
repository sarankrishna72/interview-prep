export const shuffleArray = (array: any[]) => {
    const shuffled = [...array]; // Create a copy to avoid modifying the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
}

export const arraysEqual = (a: any[], b: any[]): boolean => {
  if (a.length !== b.length) return false;

  return a.every((value, index) => value === b[index]);
}

export const randomArrayItem = (arr = []) => {
      return arr[Math.floor(Math.random() * arr.length)];
    }
