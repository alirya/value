export default function Value(string: unknown, value?: (valid: boolean, value: unknown) => string, error?: (message: string) => Error): Error;
