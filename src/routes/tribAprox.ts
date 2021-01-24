import { Request, Response, Router } from "express";

const router = Router()

router.get("/:ncm", (request: Request, response: Response) => {
    return response.status(200).json({})
})

export { router }