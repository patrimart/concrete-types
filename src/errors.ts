

/**
 * The ReadonlyError is thrown during an attempt to change a Concrete object.
 */
export class ReadonlyError extends Error {

    public name = "ReadonlyError";

    /**
     * Constructs the ReadonlyError.
     * @param message - the error message.
     */
    constructor (message: string) {
        super(message);
    }
}
