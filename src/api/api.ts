import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {ProfileDataType} from "../redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3ff5e044-7ebc-4a4d-9e54-aeedd5e75e0c',
    },
})

type GetUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: any ////////
}

type FollowResponseType = {
    resultCode: number
    messages: string[]
    data: any//////
}

type UnFollowResponseType = {
    resultCode: number
    messages: string[]
    data: any//////
}

type IsAuthResponse = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    resultCode: number | null
    messages: string[] | null
}

export const UsersApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser: (id: string) => {
        return instance.post<FollowResponseType>(`follow/${id}`)
            .then(res => res.data)
    },
    unfollowUser: (id: string) => {
        return instance.delete<UnFollowResponseType>(`follow/${id}`)
            .then(res => res.data)
    },
}

export const HeaderApi = {
    isUserAuth: () => {
        return instance.get<IsAuthResponse>('auth/me')
            .then(res => res.data)
    }
}

export const ProfileApi = {
    getProfileData: (userId: string) => {
        return instance.get<ProfileDataType>(`profile/${userId}`)
            .then(res => res.data)
    }
}
