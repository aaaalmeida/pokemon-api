export class InvalidObjectId extends Error {
    constructor(invalidID: string) {
        super()
        this.message = `Invalid Object ID ${invalidID}`
    }
}