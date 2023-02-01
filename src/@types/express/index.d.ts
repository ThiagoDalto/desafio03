import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            cliente: {
                id: string 
            }
        }
    }
}