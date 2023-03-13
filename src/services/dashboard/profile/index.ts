import { request } from "http/"
import { SetCompanyPhotoTypes } from "types/dashboard/profile/edit"

export const getProfile = () => request.get("company/profile")

export const uploadFile = (data: FormData) => request.post("files", data)

export const setCompanyPhoto = (data: SetCompanyPhotoTypes) => request.patch("company/profile/photo", data)