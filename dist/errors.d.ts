/**
 * The ReadonlyError is thrown during an attempt to change a Concrete object.
 */
export declare class ReadonlyError extends Error {
    name: string;
    /**
     * Constructs the ReadonlyError.
     * @param message - the error message.
     */
    constructor(message: string);
}
