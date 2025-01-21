import fs from 'fs';

export function readJson(filename: string = "data.json"): string[] {
    if (!fs.existsSync(filename)) {
        // If the file does not exist, create an empty array
        fs.writeFileSync(filename, '[]', 'utf-8');
    }
    const data = fs.readFileSync(filename, 'utf-8');
    return JSON.parse(data) as string[];
}

// Function to write JSON file
export function writeJson( data: string[], filename: string = "data.json",): void {
    fs.writeFileSync(filename, JSON.stringify(data, null, 4), 'utf-8');
}